// app/api/update-affiliate/route.ts
import { NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ref = searchParams.get("ref");

  if (ref) {
    const response = NextResponse.json({ message: "Affiliate ID stored" });
    cookies().set("affiliate_id", ref);
    return response;
  }

  return NextResponse.json({ message: "No Affiliate ID provided" });
}
