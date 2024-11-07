import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const body = await req.json()
    const newPrompt = await prisma.prompt.create({
        data : {
            ...body
        }
    })
    return NextResponse.json(newPrompt)
}