"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

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

    // default comma format
    return <>{Math.round(value).toLocaleString()}{suffix}</>
}

const LineChart = () => {
    // static SVG that mirrors the requested visual: rounded plot, grid, labels, white line and filled area, and a red tooltip badge
    return (
        <svg viewBox="0 0 360 220" preserveAspectRatio="none" className="w-full h-[220px] block" style={{ overflow: 'visible' }}>
            <defs>
                <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                </linearGradient>
            </defs>

            {/* rounded plot background inset to match card */}
            <rect x="8" y="8" width="344" height="204" rx="12" fill="transparent" />

            {/* grid lines (horizontal) */}
            <g stroke="#3b3352" strokeOpacity="0.35" strokeWidth="1">
                <line x1="28" y1="30" x2="332" y2="30" />
                <line x1="28" y1="70" x2="332" y2="70" />
                <line x1="28" y1="110" x2="332" y2="110" />
                <line x1="28" y1="150" x2="332" y2="150" />
                <line x1="28" y1="190" x2="332" y2="190" />
            </g>

            {/* y-axis labels */}
            <g fill="#7c6f95" fontSize="10" textAnchor="end">
                <text x="24" y="190">0</text>
                <text x="24" y="150">20</text>
                <text x="24" y="110">40</text>
                <text x="24" y="70">60</text>
                <text x="24" y="30">80</text>
            </g>

            {/* x-axis labels */}
            <g fill="#7c6f95" fontSize="10" textAnchor="middle">
                <text x="28" y="205">1 Jan</text>
                <text x="88" y="205">10 Jan</text>
                <text x="148" y="205">13 Jan</text>
                <text x="208" y="205">15 Jan</text>
                <text x="268" y="205">20 Jan</text>
                <text x="328" y="205">25 Jan</text>
            </g>

            {/* data path and filled area */}
            {/* Points chosen to visually match the reference */}
            <defs>
                <clipPath id="plotArea">
                    <rect x="28" y="20" width="304" height="172" rx="8" />
                </clipPath>
            </defs>

            <g clipPath="url(#plotArea)">
                <path d="M28 180 L88 160 L148 60 L208 140 L268 100 L328 80"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="1"
                />

                <path d="M28 180 L88 160 L148 60 L208 140 L268 100 L328 80 L328 192 L28 192 Z"
                    fill="url(#areaGrad)"
                    opacity="0.9"
                />
            </g>

            {/* small bottom axis line */}
            <line x1="28" y1="192" x2="332" y2="192" stroke="#4b415f" strokeWidth="1" />

            {/* tooltip badge near the peak (positioned at approx x=140) */}
            <g>
                <rect x="150" y="18" width="70" height="22" rx="6" fill="#DE2F04" />
                <text x="185" y="34" fill="#fff" fontSize="12" fontWeight={700} textAnchor="middle">727.49</text>
            </g>
        </svg>
    )
}

const StrengthShowcase: React.FC = () => {
    // Full-width layout
    const gridClass = 'grid grid-cols-12 w-full gap-8 items-start';

    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
        exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
        exit: { opacity: 0, y: 18, transition: { duration: 0.4, ease: 'easeIn' } },
    }

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
        <motion.section className="relative overflow-hidden" variants={containerVariants} initial="hidden" animate="show" exit="exit">
            <div className="absolute inset-0 bg-gradient-to-r from-[#05060a] via-[#0b0b12] to-[#0b0611] opacity-95" />
            <div className="relative w-full px-6 py-20">
                <div className="relative border-t border-b border-gray-800/40 py-12">
                    <div className={gridClass}>
                        <motion.div variants={itemVariants} className="col-span-7">
                            <h2 className="text-white text-5xl font-semibold leading-tight">Showcase Your<br />Strengths</h2>
                            <p className="mt-4 text-[#FFFFFF80] max-w-2xl">Bembex Lab is trusted by over 7,000 startups and growing<br />brands to deliver high-impact creative quickly, without the<br />cost or complexity of traditional agencies.</p>

                            <div ref={numsRef} className="mt-20 flex items-center text-sm text-gray-400">
                                <div className="flex-1">
                                    <div className="text-white text-2xl font-semibold"><AnimatedNumber end={39000} duration={1400} format="comma" suffix="+" start={numbersInView} /></div>
                                    <div className="mt-2 text-xs">Startups launched &amp; scaling through Bembex Lab</div>
                                </div>

                                <div className="h-8 w-px bg-gray-700/40 mx-6" />

                                <div className="flex-1">
                                    <div className="text-white text-2xl font-semibold"><AnimatedNumber end={180_000_000} duration={1600} format="millions" suffix="+" start={numbersInView} /></div>
                                    <div className="mt-2 text-xs">Reach generated across Meta platforms</div>
                                </div>

                                <div className="h-8 w-px bg-gray-700/40 mx-6" />

                                <div className="flex-1">
                                    <div className="text-white text-2xl font-semibold"><AnimatedNumber end={5} duration={1200} format="decimal" decimals={1} start={numbersInView} /></div>
                                    <div className="mt-2 text-xs">Average rating from 10,000+ verified clients</div>
                                </div>
                            </div>

                        </motion.div>

                        {/* Testimonial (fixed overlapping) */}
                        <motion.div
                            variants={itemVariants}
                            className="absolute top-15 left-[55%] transform -translate-x-[220px] w-[250px]"
                            style={{ left: 'calc(55% - 220px)' }}
                        >
                            <div className="text-white rounded-2xl p-4 shadow-2xl border border-white/10" style={{
                                borderRadius: '20px',
                                border: '1px solid #DE2F04',
                                background: 'rgba(222, 47, 4, 0.10)',
                                boxShadow: '9.138px -9.138px 9.138px 0 rgba(169, 36, 3, 0.10) inset, -9.138px 9.138px 9.138px 0 rgba(255, 255, 255, 0.10) inset',
                                backdropFilter: 'blur(9.137930870056152px)'
                            }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center text-sm font-semibold">HJ</div>
                                    <div>
                                        <div className="text-sm font-semibold">Harper J.</div>
                                        <div className="text-xs text-gray-300">Retail Manager, Wearline</div>
                                    </div>
                                </div>
                                <p className="mt-3 text-xs text-[#FFFFFF80]">With Advertyzed, we stopped worrying about marketing. Campaigns just get done—fast, effective, and without surprise fees. It's truly plug-and-play.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="col-span-5">
                            <div className="rounded-2xl w-full p-6 shadow-lg"
                                style={{
                                    borderRadius: '20px',
                                    border: '1px solid #29297F',
                                    background: '#080819',
                                }}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm text-gray-300">3.2x return on ad spend (ROAS)</div>
                                        <div className="text-xs text-gray-500 mt-1">Bembex Lab clients average a 3.2x ROAS, with many scaling beyond 5x, without bloated agency retainers or hidden fees.</div>
                                    </div>
                                </div>
                                <div className="mt-6 w-full">
                                    <LineChart />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}

export default StrengthShowcase