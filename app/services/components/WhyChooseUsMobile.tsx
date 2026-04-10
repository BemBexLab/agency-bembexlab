"use client"

import React from 'react'
import WhyChooseUs from './WhyChooseUs'

export default function WhyChooseUsMobile(props: any) {
    return (
        <div className="lg:hidden">
            <WhyChooseUs {...props} />
        </div>
    )
}
