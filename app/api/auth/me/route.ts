import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export async function GET(req: Request) {
  try {
    const cookieHeader = req.headers.get('cookie') || '';
    const match = cookieHeader.match(/(?:^|; )token=([^;]+)/);
    const token = match ? decodeURIComponent(match[1]) : null;
    if (!token) return NextResponse.json({ authenticated: false });

    const payload = verifyToken(token as string);
    if (!payload) return NextResponse.json({ authenticated: false });

    return NextResponse.json({ authenticated: true, user: { id: payload.id, email: payload.email } });
  } catch (e) {
    return NextResponse.json({ authenticated: false });
  }
}
