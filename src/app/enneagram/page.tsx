'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Question, Answer } from '@/types';

export default function EnneagramPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [step, setStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/enneagram/questions')
      .then(res => res.json())
      .then(setQuestions);
  }, []);

  const pageSize = 8;
  const pages = Math.ceil(questions.length / pageSize);
  const stepQuestions = questions.slice(step * pageSize, (step + 1) * pageSize);

  const handleChange = (seq: number, value: number) => {
    setAnswers(prev => ({ ...prev, [seq]: value }));
  };

  const handleNext = async () => {
    if (step + 1 < pages) {
      setStep(step + 1);
    } else {
      const payload: Answer[] = questions.map(q => ({
        seq: q.seq,
        type: q.type,
        answer: answers[q.seq] ?? 3,
      }));
      const res = await fetch('/api/enneagram/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: payload }),
      });
      const data = await res.json();
      router.push(`/enneagram/${data.type}`);
    }
  };

  if (!questions.length) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      {stepQuestions.map((q) => (
        <div key={q.seq} className="mb-4">
          <p className="mb-2">{q.question}</p>
          <input
            type="range"
            min="1"
            max="5"
            value={answers[q.seq] ?? 3}
            onChange={(e) => handleChange(q.seq, parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      ))}
      <button
        onClick={handleNext}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {step + 1 < pages ? 'Next' : 'Submit'}
      </button>
    </div>
  );
}
