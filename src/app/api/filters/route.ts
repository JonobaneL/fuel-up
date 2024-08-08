import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brands = await prisma.flavour.findMany();
  return NextResponse.json(brands);
}
