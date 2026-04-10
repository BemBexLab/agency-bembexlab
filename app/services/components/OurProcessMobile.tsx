"use client"

import React from 'react'
import OurProcess from './OurProcess'

export default function OurProcessMobile(props: any) {
    return (
        <div className="lg:hidden">
            <OurProcess {...props} />
        </div>
    )
}
