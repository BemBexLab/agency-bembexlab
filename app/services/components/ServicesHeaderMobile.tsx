"use client"

import React from 'react'
import ServicesHeader from '@/components/Servicesheader'

export default function ServicesHeaderMobile(props: any) {
    // Mobile-specific wrapper (keep visual parity; override classes if needed)
    return (
        <div className="lg:hidden">
            <ServicesHeader {...props} />
        </div>
    )
}
