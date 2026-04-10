"use client"
import { motion } from 'framer-motion'
import React from 'react'
import PricingPlan from './PricingPlan'

const PackagesSection = ({ pricingCardData }: { pricingCardData?: any[] }) => {
    return (
        <section>
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
                    Pricing
                </motion.p>
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
                        {pricingCardData?.[0]?.heading ?? 'The Perfect plans for Your Needs'}
                    </span>{" "}
                </motion.h2>
            </motion.div>

            <PricingPlan cardData={pricingCardData?.[0]?.cardData ?? undefined} />
        </section>
    )
}

export default PackagesSection