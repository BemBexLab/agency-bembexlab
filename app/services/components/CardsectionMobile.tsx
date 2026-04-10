"use client"

import React from 'react'
import Cardsection from '@/components/Cardsection'

export default function CardsectionMobile(props: any) {
    return (
        <div className="lg:hidden">
            <Cardsection {...props} />
        </div>
    )
}
