"use client"

import React from 'react'
import PackagesSection from './PackagesSection'

export default function PackagesSectionMobile(props: any) {
    return (
        <div className="lg:hidden">
            <PackagesSection {...props} />
        </div>
    )
}
