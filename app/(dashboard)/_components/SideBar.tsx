"use client"
import { History, Home} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideBar() {
    const links = [{title: "Home",icon :<Home/>,link : "/dashboard"},{title: "History",icon :<History/>,link : "/history"}]
    const path = usePathname()
    return (
        <div className='border-r'>
            <div className='border-b py-3 flex justify-center items-center'>
                <Image src="/logo.svg" alt='logo' width={125} height={125}/>
            </div>
            <ul className='pt-6'>
                {
                    links.map(el=>{
                        return(
                            <Link href={el.link} className={path === el.link ? "active": "unactive"} key={el.title}>
                                {el.icon}{el.title}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SideBar
