"use client";

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { GoArrowDown } from "react-icons/go";

type FAQItem = {
    question: string
    answer: React.ReactNode
}

const defaultFaqs: FAQItem[] = [
    {
        question: 'How do I update my billing information?',
        answer: "To update billing information, go to your account settings → Billing. There you'll be able to add or update payment methods, view invoices, and change billing addresses.",
    },
    {
        question: 'How can I contact customer support?',
        answer: "Look for the 'Contact us' or 'Help' link on the site to reach support via email, chat, or phone. Provide your order or account details for faster assistance.",
    },
    {
        question: 'How do I update my profile information?',
        answer: "Visit your profile page in account settings to change your name, email, password, and other personal details.",
    },
    {
        question: 'How do I find my purchase history?',
        answer: "Your purchase history and invoices are available under Account → Orders or Billing. You can download receipts from each order entry.",
    },
    {
        question: 'Can I change or cancel an order?',
        answer: "Orders can typically be modified or canceled within a brief window after purchase-check the Orders section and contact support as soon as possible.",
    },
    {
        question: 'Do you offer discounts for long-term projects?',
        answer: "We do provide custom pricing for ongoing engagements. Reach out to our sales team with project details for a tailored quote.",
    },
]

const FAQs = ({ items }: { items?: FAQItem[] }) => {
    const faqs = items && items.length > 0 ? items : defaultFaqs

    const [open, setOpen] = useState<number | null>(0)
    const [visible, setVisible] = useState<number>(4)

    const visibleFaqs = faqs.slice(0, visible)

    return (
        <section className="mt-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <motion.p
                        className="text-[#FF3C1B] font-semibold mb-2 md:mb-3 text-3xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        FAQs
                    </motion.p>
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
                            Frequently Asked Questions
                        </span>
                    </motion.h2>
                </motion.div>

                <div className="space-y-4">
                    {visibleFaqs.map((f, idx) => {
                        const isOpen = open === idx
                        return (
                            <div
                                key={idx}
                                className={`py-6 px-6 transition-all duration-300 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/6 shadow-[0_10px_30px_rgba(2,2,10,0.6)] ${isOpen ? 'bg-white/10' : 'bg-white/5 opacity-90'}`}
                                style={{ backgroundColor: isOpen ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)' }}
                            >
                                <button
                                    onClick={() => setOpen(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between text-left"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-${idx}`}
                                >
                                    <h5 className="font-semibold text-white">{f.question}</h5>
                                    <svg
                                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                <div id={`faq-${idx}`} className={`mt-4 text-sm text-[#c9c9d6] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
                                    <p>{f.answer}</p>
                                </div>
                            </div>
                        )
                    })}

                    <div className="mt-6 text-center">
                        {visible < faqs.length && (
                            <button
                                onClick={() => setVisible((v) => Math.min(faqs.length, v + 2))}
                                className="inline-block px-5 py-2 rounded-full text-white font-semibold hover:brightness-90 transition"
                                style={{
                                    backgroundImage: 'url("/service/Button.webp")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <span className='font-light flex flex-row items-center'>Load More<GoArrowDown className="ml-2" /></span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs
