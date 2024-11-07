import { TTemp } from '@/utils/types'
import {
    Card,
} from "@/components/ui/card"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
type Props = {
    temp : TTemp
}
function Template({temp}:Props) {
    return (
        <Card className='p-2'>
            <Link href={`/dashboard/${temp.slug}`}>
                <Image src={temp.icon} alt="logo" width={50} height={50} />
                <h6 className="mt-2 font-bold text-md text-gray-800 dark:text-white">
                    {temp.name}
                </h6>
                <p className="trunc mt-2 leading-relaxed text-sm font-medium  text-gray-500 dark:text-neutral-500">
                    {temp.desc}
                </p>
            </Link>
        </Card>
    )
}

export default Template
