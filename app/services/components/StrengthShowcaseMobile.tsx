"use client"

import React, { useEffect, useRef, useState } from 'react'

const AnimatedNumber: React.FC<{
    end: number,
    duration?: number,
    format?: 'comma' | 'millions' | 'decimal',
    decimals?: number,
    suffix?: string,
    start?: boolean
}> = ({ end, duration = 1500, format = 'comma', decimals = 0, suffix = '', start = true }) => {
    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        if (!start) {
            setValue(0)
            return
        }

        let raf = 0
        const t0 = performance.now()
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

        const loop = (now: number) => {
            const elapsed = now - t0
            const progress = Math.min(elapsed / duration, 1)
            const current = end * easeOutCubic(progress)
            setValue(current)
            if (progress < 1) raf = requestAnimationFrame(loop)
        }

        raf = requestAnimationFrame(loop)
        return () => cancelAnimationFrame(raf)
    }, [end, duration, start])

    if (format === 'millions') {
        const millions = Math.round(value / 1_000_000)
        return <>{millions}M{suffix}</>
    }

    if (format === 'decimal') {
        return <>{(Number(value) || 0).toFixed(decimals)}{suffix}</>
    }

    return <>{Math.round(value).toLocaleString()}{suffix}</>
}

export default function StrengthShowcaseMobile() {
    const numsRef = useRef<HTMLDivElement | null>(null)
    const [numbersInView, setNumbersInView] = useState(false)

    useEffect(() => {
        if (!numsRef.current) return
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setNumbersInView(true)
                        obs.disconnect()
                    }
                })
            },
            { threshold: 0.35 }
        )
        obs.observe(numsRef.current)
        return () => obs.disconnect()
    }, [])

    return (
        <section className="block lg:hidden relative overflow-hidden py-12 px-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#05060a] via-[#0b0b12] to-[#0b0611] opacity-95" />
            <div className="relative w-full">
                <div className="border-t border-b border-gray-800/40 py-8">
                    <h2 className="text-white text-2xl sm:text-3xl font-semibold leading-tight mb-4">
                        Showcase Your<br />Strengths
                    </h2>
                    <p className="text-[#FFFFFF80] text-sm mb-8">
                        Bembex Lab is trusted by over 7,000 startups and growing brands to deliver high-impact creative quickly, without the cost or complexity of traditional agencies.
                    </p>

                    <div ref={numsRef} className="space-y-6">
                        <div className="bg-[#0b0b11] rounded-2xl p-4 border border-[#1f2130]">
                            <div className="text-white text-xl font-semibold">
                                <AnimatedNumber end={39000} duration={1400} format="comma" suffix="+" start={numbersInView} />
                            </div>
                            <div className="mt-2 text-xs text-gray-400">Startups launched &amp; scaling through Bembex Lab</div>
                        </div>

                        <div className="bg-[#0b0b11] rounded-2xl p-4 border border-[#1f2130]">
                            <div className="text-white text-xl font-semibold">
                                <AnimatedNumber end={180_000_000} duration={1600} format="millions" suffix="+" start={numbersInView} />
                            </div>
                            <div className="mt-2 text-xs text-gray-400">Reach generated across Meta platforms</div>
                        </div>

                        <div className="bg-[#0b0b11] rounded-2xl p-4 border border-[#1f2130]">
                            <div className="text-white text-xl font-semibold">
                                <AnimatedNumber end={5} duration={1200} format="decimal" decimals={1} start={numbersInView} />
                            </div>
                            <div className="mt-2 text-xs text-gray-400">Average rating from 10,000+ verified clients</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
