'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Question } from '@/types';

interface ContextValue {
  questions: Question[];
  answers: Record<number, number>;
  setQuestions: (qs: Question[]) => void;
  setAnswer: (seq: number, value: number) => void;
}

const EnneagramContext = createContext<ContextValue | null>(null);

export function EnneagramProvider({ children }: { children: ReactNode }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const setAnswer = (seq: number, value: number) =>
    setAnswers((prev) => ({ ...prev, [seq]: value }));

  return (
    <EnneagramContext.Provider value={{ questions, answers, setQuestions, setAnswer }}>
      {children}
    </EnneagramContext.Provider>
  );
}

export function useEnneagram() {
  const ctx = useContext(EnneagramContext);
  if (!ctx) throw new Error('EnneagramProvider missing');
  return ctx;
}
