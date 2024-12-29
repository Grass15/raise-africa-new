// app/api/update-affiliate/route.ts
import { NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function GET(request: Request) {
  const ref = cookies().get("affiliate_id");

  console.log(ref);
  return NextResponse.json({ ref: ref?.value || "" });
}
