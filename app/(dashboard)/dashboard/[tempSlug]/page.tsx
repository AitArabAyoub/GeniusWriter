"use client"
import Templates from '@/utils/Templates'
import { ArrowBigLeft, Copy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { chatSession } from '@/utils/ai'
import { toast } from 'sonner'
import { useAuth } from '@clerk/nextjs'

function TemplatePage() {
    const {userId} = useAuth()
    const editRef:any = useRef()
    const {tempSlug} = useParams()
    const template = Templates.find(el => el.slug === tempSlug)
    const [data,setData] = useState({})
    const [Res,setRes] = useState("")
    const [loading,setLoading] = useState(false)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name,value} = e.target
        setData({...data,[name] : value})
    }
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoading(true)
        const Prompt = template?.aiPrompt + ","+ JSON.stringify(data)
        const res = await chatSession.sendMessage(Prompt)
        const req = await fetch("/api/prompt",{method : "POST",body  : JSON.stringify({userId,title : template?.slug,icon : template?.icon,response : res.response.text(),words : res.response.text().length})}) 
        if(req.ok){
            toast("Prompt Created Successfully")
        }else{
                toast("Creation Failed")
        }
        setRes(res.response.text())
        setLoading(false)
    }

    return (
        <div className='bg-slate-100 min-h-screen p-5'>
            <div className='flex justify-between'>
                <Link href="/dashboard" className='bg-primary p-2 text-white rounded-md flex gap-1 w-fit'><ArrowBigLeft/> Back</Link>
                <button className='bg-primary p-2 text-white rounded-md flex gap-1 w-fit' onClick={()=>{navigator.clipboard.writeText(Res)}}><Copy/> Copy</button>
            </div>
            <div className='grid grid-cols-3 gap-3 mt-3'>
                <div className='bg-white col-span-1 p-3 rounded-md'>
                    <Image src={template?.icon || ""} alt="logo" width={60} height={50} />
                    <h2 className='text-primary text-xl font-bold'>{template?.name}</h2>
                    <p className='text-gray-500 '>{template?.desc}</p>
                    <form onSubmit={handleSubmit}>
                    {
                        template?.form.map(el =>{
                            return(
                                <div className='py-2' key={el.label}>
                                    <label htmlFor="" className=''>{el.label} :</label>
                                    {
                                        el.field === "input"
                                        ?
                                        <input 
                                        className='py-3 px-4 block w-full border border-gray-800 rounded-lg text-sm'
                                        name={el.name} required={el.required}
                                        onChange={handleChange}
                                        />
                                        :
                                        <textarea  
                                            className='py-3 px-4 block w-full border border-gray-800 rounded-lg text-sm' maxLength={2000} 
                                            name={el.name}
                                            required={el.required}
                                            onChange={handleChange}
                                        /> 
                                    }
                                </div>
                            )
                        })
                    }
                    <button className='bg-primary p-2 text-white block mx-auto rounded-md'>
                        {
                            loading
                            ?
                            <div className='w-5 h-5 rounded-full border-b-transparent border-2 animate-spin'></div>
                            :
                            "Generate Content"
                        }
                    </button>
                </form>
                </div>
                <div className='bg-white col-span-2 p-3 rounded-md h-[400px] overflow-scroll'>
                    <div className='py-2 border-b'>
                        <h2>Your Result</h2>
                    </div>
                        <p>
                            {Res}
                        </p>
                </div>
            </div>
        </div>  
    )
}

export default TemplatePage
