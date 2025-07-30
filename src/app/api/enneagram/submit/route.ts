import { NextResponse } from 'next/server';
import { findEnneagramType } from '@/libs/findEnneagramType';
import type { Answer } from '@/types';

export async function POST(request: Request) {
  const { answers } = await request.json();
  const type = findEnneagramType(answers as Answer[]);
  return NextResponse.json({ type });
}
