"use client";

import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const defaultSteps = [
    { id: 1, title: 'Strategy And Planning', subtitle: 'Strategy and Planning', desc: 'We explore your market audience, competitors, and goals to identify opportunities and establish a strong foundation for our brand.' },
    { id: 2, title: 'UX And Interface Design', subtitle: 'UX And Interface Design', desc: 'We craft intuitive interfaces and delightful user experiences tailored to your audience.' },
    { id: 3, title: 'Smart AI Integration', subtitle: 'Smart AI Integration', desc: 'We integrate AI-driven features to automate and personalize user interactions.' },
    { id: 4, title: 'Development And Coding', subtitle: 'Development And Coding', desc: 'Our engineers build scalable, maintainable code and performant frontends/backends.' },
    { id: 5, title: 'SEO Optimization', subtitle: 'SEO Optimization', desc: 'We optimize content and technical SEO to help your site get discovered.' },
    { id: 6, title: 'Testing And Quality Assurance', subtitle: 'Testing And Quality Assurance', desc: 'Thorough QA and testing ensure a stable, bug-free release.' },
    { id: 7, title: 'Launch And Deployment', subtitle: 'Launch And Deployment', desc: 'We deploy, monitor and hand over with documentation and training.' },
]

const contactUrl = "https://www.upwork.com/agencies/bembexlab/";

const OurProcess = ({ steps = defaultSteps, progressBarTitle }: { steps?: any[]; progressBarTitle?: React.ReactNode }) => {
    const [active, setActive] = useState<number>(0)
    const [isTwoRow, setIsTwoRow] = useState(false)

    useEffect(() => {
        const check = () => setIsTwoRow(typeof window !== 'undefined' ? window.innerWidth <= 1064 : false)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const prev = () => setActive((p) => (p === 0 ? steps.length - 1 : p - 1))
    const next = () => setActive((p) => (p === steps.length - 1 ? 0 : p + 1))

    const progressPercent = (active / (steps.length - 1)) * 100

    const stats = [
        { id: 1, value: '800+', label: 'Projects Completed' },
        { id: 2, value: '500+', label: 'Satisfied Clients' },
        { id: 3, value: '1000+', label: 'Innovative Solutions Delivered' },
        { id: 4, value: '6+', label: 'Years of Expertise' },
    ]

    const [counts, setCounts] = useState<number[]>(() => stats.map(() => 0))
    const statsRef = useRef<HTMLDivElement | null>(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const duration = 1200
        const targets = stats.map((s) => parseInt(String(s.value).replace(/[^0-9]/g, '')) || 0)

        let raf = 0
        let started = false

        const tick = (now: number) => {
            // capture start time on first tick
            // store on the function scope
            if (!(tick as any).startTime) (tick as any).startTime = now
            const startTime = (tick as any).startTime as number
            const elapsed = now - startTime
            const t = Math.min(1, elapsed / duration)
            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            const next = targets.map((target) => Math.floor(target * eased))
            setCounts(next)
            if (t < 1) raf = requestAnimationFrame(tick)
            else setCounts(targets)
        }

        const startAnimation = () => {
            if (started) return
            started = true
            setHasAnimated(true)
            raf = requestAnimationFrame(tick)
        }

        const observerTarget = statsRef.current
        if (!observerTarget) {
            startAnimation()
            return () => cancelAnimationFrame(raf)
        }

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startAnimation()
                }
            })
        }, { threshold: 0.3 })

        io.observe(observerTarget)

        return () => {
            io.disconnect()
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <section className='py-20'>
            {/* Header */}
            <motion.div
                className="text-center mb-12 md:mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.p
                    className="text-[#FF3C1B] font-semibold mb-2 md:mb-3 text-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Our Process
                </motion.p>
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
                        {progressBarTitle ?? "How we build Smart Website Solution for you"}
                    </span>{" "}
                </motion.h2>
            </motion.div>

            {/* Card Progress Section with progress bar */}
            <div className="max-w-5xl mx-auto px-4">
                <div>
                    {!isTwoRow && (
                        <div className="relative">
                            {/* horizontal track */}
                            <div className="relative">
                                <div className="h-0.5 bg-[#1f2937] dark:bg-opacity-20 absolute left-0 right-0 top-6 sm:top-7 md:top-6"></div>
                                <div
                                    className="h-0.5 bg-gradient-to-r from-[#FF3C1B] to-[#ffb199] absolute left-0 top-6 sm:top-7 md:top-6 transition-all duration-300"
                                    style={{ width: `${progressPercent}%` }}
                                />

                                <div className={`relative ${isTwoRow ? 'h-56' : 'h-32 sm:h-36 md:h-28'}`}>
                                    {steps.map((s, i) => {
                                        let style: React.CSSProperties
                                        if (!isTwoRow) {
                                            const leftPercent = (i / (steps.length - 1)) * 100
                                            style = { left: `${leftPercent}%`, transform: 'translateX(-50%)', top: 0 }
                                        } else {
                                            const firstRowCount = Math.ceil(steps.length / 2)
                                            const rowIndex = i < firstRowCount ? 0 : 1
                                            const indexInRow = rowIndex === 0 ? i : i - firstRowCount
                                            const numInRow = rowIndex === 0 ? firstRowCount : (steps.length - firstRowCount)
                                            const leftPercent = numInRow > 1 ? (indexInRow / (numInRow - 1)) * 100 : 50
                                            const topOffset = rowIndex === 0 ? 0 : 120
                                            style = { left: `${leftPercent}%`, transform: 'translateX(-50%)', top: `${topOffset}px` }
                                        }
                                        return (
                                            <div
                                                key={s.id}
                                                className="absolute text-center"
                                                style={style}
                                            >
                                                <button
                                                    onClick={() => setActive(i)}
                                                    aria-label={`step-${s.id}`}
                                                    className="focus:outline-none"
                                                >
                                                    <div className={`${active === i ? 'p-[2px] bg-gradient-to-r from-[#FF3C1B] to-[#ffb199] rounded-full' : ''}`}>
                                                        <div className={`${active === i ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#0b1220] flex items-center justify-center text-sm md:text-base text-white' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[#0b1220] border border-[#23303a] flex items-center justify-center text-sm md:text-base text-white/80'}`}>
                                                            <span className={`${active === i ? 'text-white font-semibold text-[11px] sm:text-[13px] md:text-base' : 'text-white/80 text-[10px] sm:text-[11px] md:text-sm'}`}>{s.id.toString().padStart(2, '0')}</span>
                                                        </div>
                                                    </div>
                                                </button>
                                                <div className={`mt-2 sm:mt-3 text-[9px] sm:text-[10px] md:text-xs max-w-[70px] sm:max-w-[90px] md:max-w-[110px] lg:max-w-[140px] mx-auto transition-colors duration-200 leading-tight ${active === i ? 'text-white' : 'text-gray-300/70'}`}>
                                                    {s.title}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Card and navigation */}
                    <div className="relative mt-8">
                        <div className="hidden md:block absolute left-4 md:left-0 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2">
                            <button
                                onClick={prev}
                                aria-label="previous"
                                aria-disabled={active === 0}
                                disabled={active === 0}
                                className={`w-12 h-12 rounded-full border border-[#3a2b2b] bg-transparent flex items-center justify-center shadow-md z-50 ${active === 0 ? 'opacity-40 pointer-events-none' : ''}`}
                                id="prev-button"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#ffb199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </div>

                        <div className="mx-auto max-w-3xl">
                            <div className="rounded-2xl overflow-hidden p-6 sm:p-12 relative " style={{
                                backgroundImage: 'url("/service/progressCard.webp")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                {/* Small-screen inline nav buttons (inside card) */}
                                <div className="absolute top-4 left-4 md:hidden">
                                    <button
                                        onClick={prev}
                                        aria-label="previous"
                                        aria-disabled={active === 0}
                                        disabled={active === 0}
                                        className={`w-10 h-10 rounded-full border border-[#3a2b2b] bg-transparent flex items-center justify-center shadow-md z-50 ${active === 0 ? 'opacity-40' : ''}`}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#ffb199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </button>
                                </div>

                                <div className="absolute top-4 right-4 md:hidden">
                                    <button
                                        onClick={next}
                                        aria-label="next"
                                        aria-disabled={active === steps.length - 1}
                                        disabled={active === steps.length - 1}
                                        className={`w-10 h-10 rounded-full border border-[#3a2b2b] bg-transparent flex items-center justify-center shadow-md z-50 ${active === steps.length - 1 ? 'opacity-40' : ''}`}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="#ffb199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </button>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-4xl sm:text-6xl font-bold text-white">{steps[active].id.toString().padStart(2, '0')}</div>
                                    <div className="mt-4 text-xl sm:text-2xl font-semibold text-white">{steps[active].subtitle}</div>
                                    <p className="mt-6 text-sm text-gray-300/70 max-w-full sm:max-w-[720px]">
                                        {steps[active].desc}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2 md:translate-x-1/2">
                            <button
                                onClick={next}
                                aria-label="next"
                                aria-disabled={active === steps.length - 1}
                                disabled={active === steps.length - 1}
                                className={`w-12 h-12 rounded-full border border-[#3a2b2b] bg-transparent flex items-center justify-center shadow-md z-50 ${active === steps.length - 1 ? 'opacity-40 pointer-events-none' : ''}`}
                                id="next-button"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="#ffb199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            {/* Numberic Data Card */}
            <div ref={statsRef} className="flex flex-col justify-center items-center w-full max-w-[950px] rounded-2xl mt-6 mx-auto p-5" style={{
                backgroundImage: 'url("/service/ourprocessNumericFrame.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>

                {/* Cards Div */}
                <div className="flex mt-0 w-full">
                    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 w-full lg:w-auto mx-auto lg:max-w-[950px]">
                        {stats.map((s, idx) => (
                            <div key={s.id} className='flex flex-col justify-center items-start flex-shrink-0 w-full sm:w-[200px] lg:w-[200px] h-[120px] rounded-2xl p-2' style={{
                                backgroundImage: 'url("/service/Cards.webp")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <h2 className="text-3xl sm:text-5xl font-semibold text-[#DE2F04] text-left">{counts[idx] ?? 0}{/\D+$/.test(s.value) ? s.value.match(/\D+$/)?.[0] : ''}</h2>
                                <p className="text-sm text-white font-regular text-left">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buttons Div */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full items-center sm:justify-center">

                    {/* Call us now button */}
                    <button type="button" onClick={() => window.location.href = contactUrl} className="w-full sm:w-auto relative px-4 py-2 rounded-full text-white text-sm font-light flex items-center gap-2 bg-[#1a1a1a]/60 backdrop-blur-md border border-[#ff1e00]/20 transition-all duration-300 group overflow-hidden justify-center">
                        <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                            Call Us Now
                        </span>
                        <FaArrowRight className="relative z-10 text-white text-sm transition-transform duration-300 group-hover:translate-x-1" />

                        {/* 🔴 Top red shine */}
                        <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-b from-[#ff1e00] to-transparent rounded-t-full pointer-events-none" />

                        {/* 🔴 Bottom hover line glow */}
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full" />

                        {/* 🧊 Inner glossy shadow */}
                        <span className="absolute inset-0 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.08)] pointer-events-none" />
                    </button>

                    {/* Request a quote button */}
                    <button type="button" onClick={() => window.location.href = contactUrl} className="w-full sm:w-auto relative px-4 py-2 rounded-full text-white text-sm font-light flex items-center gap-2 bg-[#1a1a1a]/60 backdrop-blur-md border border-[#ff1e00]/20 transition-all duration-300 group overflow-hidden justify-center">
                        <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                            Request a Quote
                        </span>
                        <FaArrowRight className="relative z-10 text-white text-sm transition-transform duration-300 group-hover:translate-x-1" />

                        {/* 🔴 Top red shine */}
                        <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-b from-[#ff1e00] to-transparent rounded-t-full pointer-events-none" />

                        {/* 🔴 Bottom hover line glow */}
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full" />

                        {/* 🧊 Inner glossy shadow */}
                        <span className="absolute inset-0 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.08)] pointer-events-none" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurProcess
