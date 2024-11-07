"use client"
import Templates from '@/utils/Templates'
import React, { useState } from 'react'
import Template from './_components/Template'

function Dashboard() {
    const [templates,setTemplates] = useState(Templates)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const val = e.target.value
        if(!val){
            setTemplates(Templates)
        }else{
            setTemplates(templates.filter(el => el.slug.toLowerCase().includes(val.toLowerCase())))
        }
    }
    return (
        <div className='bg-slate-100 min-h-screen'>
            <div className='gradient flex flex-col justify-center items-center text-white py-5'>
                <h2 className='text-3xl font-bold'>Browse All Templates</h2>
                <p className='mb-2'>what would you like to create today?</p>
                <input type="text" onChange={handleChange} className='p-2 text-black w-[70%] rounded-md' placeholder='Search ...' />
            </div>
            <div className='grid grid-cols-4 gap-2 p-5'>
                {
                    templates.map(el=>{
                        return(
                            <Template temp={el} key={el.slug}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard
