const DEFAULT_TIMEOUT_MS = 10000;

export async function fetchWithTimeout(
  input: RequestInfo | URL,
  init: RequestInit = {},
  timeoutMs = DEFAULT_TIMEOUT_MS
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  const cleanup: Array<() => void> = [];

  let signal: AbortSignal = controller.signal;

  if (init.signal) {
    if (init.signal.aborted) {
      controller.abort();
    } else {
      const abortOnExternalSignal = () => controller.abort();
      init.signal.addEventListener("abort", abortOnExternalSignal, { once: true });
      cleanup.push(() =>
        init.signal?.removeEventListener("abort", abortOnExternalSignal)
      );
    }
  }

  try {
    return await fetch(input, {
      ...init,
      signal,
    });
  } finally {
    clearTimeout(timeoutId);
    cleanup.forEach((fn) => fn());
  }
}

export function isAbortLikeError(error: unknown) {
  return (
    error instanceof Error &&
    (error.name === "AbortError" ||
      error.message.toLowerCase().includes("timeout") ||
      error.message.toLowerCase().includes("fetch failed"))
  );
}
