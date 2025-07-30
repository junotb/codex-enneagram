import questions from '@/libs/questions.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(questions);
}
