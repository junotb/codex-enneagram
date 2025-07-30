import enneagrams from '@/libs/enneagrams.json';
import { notFound } from 'next/navigation';

interface Props {
  params: { type: string };
}

export default function ResultPage({ params }: Props) {
  const enneagram = enneagrams.find((e) => e.type === parseInt(params.type));
  if (!enneagram) return notFound();
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Type {enneagram.type}: {enneagram.title.korean} ({enneagram.title.english})
      </h1>
      <p className="mb-2">{enneagram.summary}</p>
      <p>{enneagram.description}</p>
    </div>
  );
}
