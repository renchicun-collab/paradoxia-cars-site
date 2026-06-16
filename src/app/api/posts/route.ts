import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

/**
 * サーバーサイドプロキシ。
 * ブラウザから直接WordPress APIを叩くとCORSでブロックされるが、
 * Vercelのサーバー（Next.js API Route）から叩けばCORSは関係ない。
 */
export async function GET() {
  try {
    const res = await fetch(
      `https://${SITE.blog}/wp-json/wp/v2/posts?per_page=3&_embed=1`,
      { next: { revalidate: 3600 } } // 1時間キャッシュ
    );
    if (!res.ok) throw new Error(`WP API error: ${res.status}`);
    const data = await res.json();
    return NextResponse.json(data, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json([], { status: 200 }); // エラー時は空配列でフォールバック
  }
}
