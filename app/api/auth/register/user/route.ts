import { NextResponse } from "next/server";
import { RegisterFormInputs } from "@/types";

export async function GET() {
    return NextResponse.json({
        message: "The API is working properly."
    });
}

export async function POST(request: Request) {
    const body: RegisterFormInputs = await request.json();
    console.log(body);
    return NextResponse.json(
        { message: "Account created successfully! (from API)" }
    );
}