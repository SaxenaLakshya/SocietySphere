import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "The API is working properly."
    });
}

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json(
        { message: "Your message as been sent to the creator! (from API)" }
    );
}