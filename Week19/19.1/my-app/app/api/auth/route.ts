import { NextRequest, NextResponse } from "next/server";


export function GET() {
    return NextResponse.json({
        message:'hi there'
    })
}