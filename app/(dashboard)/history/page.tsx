import prisma from '@/utils/db'
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import PromptRow from './_components/Prompt'
async function History() {
  const res = await prisma.prompt.findMany({orderBy : {date : "desc"}})
  return (
    <div className='p-5 bg-slate-100'>
      <div className='bg-white rounded-md min-h-screen p-3'>
        <h2 className='text-3xl font-bold mb-1'>History</h2>
        <p className='text-gray-600 mb-1'>Search for your previous generated ai content</p>
        <Table>
          <TableHeader>
            <TableRow className='bg-gray-100'>
              <TableHead className='font-bold text-black'>Template</TableHead>
              <TableHead className='font-bold text-black'>AI Resp</TableHead>
              <TableHead className='font-bold text-black'>Date</TableHead>
              <TableHead className='font-bold text-black'>Words</TableHead> 
              <TableHead className='font-bold text-black'>Copy</TableHead> 
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              res.map(el=>{
                return <PromptRow prompt={el} key={el.id}/>
              })
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default History
