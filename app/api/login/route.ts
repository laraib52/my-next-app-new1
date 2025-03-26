import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Simple authentication check (replace with real logic)
  if (email === "admin@example.com" && password === "password123") {
    const response = NextResponse.json({ success: true });

    // ✅ Set HTTP-only secure cookie
    response.cookies.set("authToken", "secureToken123", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
