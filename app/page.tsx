import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-red-500">
          Welcome to the Quiz Game!
        </h1>
        <p className="text-xl mb-8 text-red-700 max-w-md mx-auto">
          Test your knowledge on Sports, Health, and Programming. Ready for a
          quick challenge?
        </p>
        <div className="space-y-4">
          <Link
            href="/quiz"
            className="block w-64 mx-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
          >
            Take a Quick Quiz
          </Link>
          <Link
            href="/history"
            className="block w-64 mx-auto bg-red-200 hover:bg-red-300 text-red-700 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
          >
            View Quiz History
          </Link>
        </div>
      </div>
    </main>
  );
}
