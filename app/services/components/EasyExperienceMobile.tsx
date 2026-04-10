"use client"

import React from 'react'
import EasyExperience from './EasyExperience'

export default function EasyExperienceMobile(props: any) {
    return (
        <div className="lg:hidden">
            <EasyExperience {...props} />
        </div>
    )
}
