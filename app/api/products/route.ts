
//@ts-ignore
import list from '@/data/list.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(list);
}
