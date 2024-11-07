"use client"
import { TableCell, TableRow } from '@/components/ui/table'
import { Prompt } from '@prisma/client'
import { Copy } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function PromptRow({prompt} : {prompt : Prompt}) {
    return (
        <TableRow className='border-b'>
            <TableCell className='flex gap-1 items-center'>
                <Image alt='logo' src={prompt.icon} width={40} height={40}/>
                {prompt.title}</TableCell>
            <TableCell className='w-[400px]'><p className='response'>{prompt.response}</p></TableCell>
            <TableCell>{prompt.date.toLocaleDateString()}</TableCell>
            <TableCell>{prompt.words}</TableCell>
            <TableCell>
            <button className='bg-primary p-2 text-white rounded-md flex gap-1 w-fit' onClick={()=>{navigator.clipboard.writeText(prompt.response)}}><Copy/> Copy</button>
            </TableCell>
        </TableRow>
    )
}

export default PromptRow
