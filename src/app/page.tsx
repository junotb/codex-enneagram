export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Next Enneagram</h1>
      <a
        href="/enneagram"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Start Test
      </a>
    </div>
  );
}
