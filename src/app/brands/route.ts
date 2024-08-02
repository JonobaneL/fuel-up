import prisma from "@/lib/db";
import { getAllBrands } from "@/requests/params";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  console.log(name);
  const brands = await prisma.brand.findMany({
    where: {
      name: {
        contains: name || "",
      },
    },
  });
  return NextResponse.json(brands);
}
