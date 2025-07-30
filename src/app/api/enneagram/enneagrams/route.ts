import enneagrams from '@/libs/enneagrams.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(enneagrams);
}
