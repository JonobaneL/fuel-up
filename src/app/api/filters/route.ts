import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const data = await request.json();
  // console.log("request", data);
  return NextResponse.json({ data: "check" });
}
