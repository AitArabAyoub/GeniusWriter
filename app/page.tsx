"use client"
import { Card } from "@/components/ui/card";
import { UserButton, useUser } from "@clerk/nextjs";
import { Book, File, FileClock, Settings, Settings2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const {user} = useUser()
  const features = [
    {title : "+25 Templates",desc : "differnte templates to generate differente content",icon : <File/>},
    {title : "Customizable",desc : "components are easly customized and extendable",icon : <Settings2/>},
    {title : "Free to use",desc : "free access to all templates for now",icon : <Book/>},
    {title : "History",desc : "acces to previous generated content",icon : <FileClock/>}
  ]
  return (
    <div>
      <header className="flex justify-between items-center container border-b">
        <div className='py-3 flex justify-center items-center'>
          <Image src="/logo.svg" alt='logo' width={125} height={125}/>
        </div>
        <div className="flex items-center gap-1">
          {
            user
            ?
            <>
            <UserButton/>
            <Link href="/dashboard" className="btn-primary">dashboard</Link>
            </>
            :
            <Link href="/dashboard" className="btn-primary">Login</Link>
          }
        </div>
      </header>
      <main className="h-[500px] flex flex-col justify-center items-center">
        <article className="w-full md:w-[50%] mx-auto text-center">
          <h1 className="text-5xl font-bold">AI Content <span className="text-primary">Generator</span></h1>
          <p className="">Revolutionize your Content creation with our AI-powered app, delivering engaging and high-quality text in seconds</p>
        </article>
        <article className="grid grid-cols-4 gap-3 container mt-36">
          {
            features.map(el =>{
              return(
                <Card key={el.title} className="p-2">
                  <div className="w-[32px] h-[32px] bg-blue-600 flex justify-center items-center rounded-md text-white">
                    {el.icon}
                  </div>
                  <h2 className="font-bold my-2">{el.title}</h2>
                  <p className="text-gray-700">{el.desc}</p>
                </Card>
              )
            })
          }
        </article>
      </main>
    </div>
  );
}
