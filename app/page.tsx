import { Anticipation } from "@/components/Anticipation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Wordmark } from "@/components/Wordmark";

export default function Home() {
  return (
    <>
      <header className="border-b border-ink-200 bg-surface">
        <div className="mx-auto flex w-full max-w-3xl items-center px-4 py-4 sm:px-6">
          <Wordmark />
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <Problem />
        <Anticipation />
        {/* Waitlist → étape 4 · Footer → étape 5 · Analytics → étape 6 */}
      </main>
    </>
  );
}
