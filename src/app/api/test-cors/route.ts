import { NextResponse } from "next/server";

const corsHeaders = new Headers({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
});

export async function POST() {
  const b: string = "4";
  b.charAt(1);
  return new NextResponse(JSON.stringify({ message: "Success" }), {
    headers: corsHeaders,
    status: 200,
  });
}

//accommodate the browser's preflight request
export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders, status: 204 });
}
