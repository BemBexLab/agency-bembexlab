"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const WhyChooseUs = ({ whyUs }: { whyUs?: { semiTitle?: string; title?: string; description?: React.ReactNode; imageURL?: string } }) => {
    const data = whyUs || { semiTitle: 'Why Us?', title: 'Why Choose Bembex Lab', description: 'At Bembex Lab, we do more than build websites. We create complete digital experiences shaped by strategy, design, and performance. Our team handles everything from user experience planning and custom design to development, optimization, and ongoing support. The process is straightforward, collaborative, and focused on real results without unnecessary complexity. We combine creative thinking with practical digital strategy to build websites that work as hard as you do. Every project is designed to drive growth, improve engagement, and strengthen your brand. You don’t just need a website. You need a digital foundation that supports your business long term, and that’s what we deliver.', imageURL: '/service/webService.webp' }
    return (
        <section className='py-20'>
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-7xl px-4 sm:px-6">
                <Image
                    src={data.imageURL ?? '/service/webService.webp'}
                    alt={data.title ?? 'Why Choose Us'}
                    width={1600}
                    height={1400}
                    className="w-full md:w-1/2 h-auto rounded-3xl mb-6 md:mb-0 object-cover"
                />

                {/* Text Div */}
                <motion.div
                    className="flex flex-col w-full md:w-1/2 justify-center px-4 py-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p variants={itemVariants} className=" text-3xl font-semibold text-[#DE2F04]">
                        {data.semiTitle}
                    </motion.p>

                    <motion.h2 variants={itemVariants} className="text-4xl mt-3 font-semibold">
                        {data.title}
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-md mt-4 font-light text-[#FFFFFF80]">
                        {data.description}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs
