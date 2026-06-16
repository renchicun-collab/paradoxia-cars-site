import { NextResponse } from "next/server";

const BLOG = "https://renchicun4.com";

export async function GET() {
  try {
    const res = await fetch(
      `${BLOG}/wp-json/wp/v2/posts?per_page=3&_embed=1`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`WP API error: ${res.status}`);
    const data = await res.json();
    return NextResponse.json(data, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json([], { status: 200 });
  }
}
