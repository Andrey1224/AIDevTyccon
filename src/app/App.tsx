import { useGameStore } from "../game/store/gameStore";

export function App() {
  const game = useGameStore((store) => store.state);
  const tick = useGameStore((store) => store.tick);
  const resetGame = useGameStore((store) => store.resetGame);

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <section className="mx-auto max-w-5xl space-y-6">
        <header>
          <p className="text-sm text-slate-400">AI Dev Tycoon Prototype</p>
          <h1 className="text-3xl font-bold">{game.company.name}</h1>
        </header>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard
            label="Date"
            value={`Y${game.time.year} M${game.time.month} W${game.time.week}`}
          />
          <StatCard label="Cash" value={`$${game.company.cash.toLocaleString()}`} />
          <StatCard label="Trust" value={game.company.publicTrust} />
          <StatCard label="Morale" value={game.company.teamMorale} />
        </div>

        <div className="flex gap-3">
          <button
            onClick={tick}
            className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400"
          >
            Next Week
          </button>

          <button
            onClick={resetGame}
            className="rounded-lg bg-slate-800 px-4 py-2 font-semibold text-white hover:bg-slate-700"
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

function StatCard(props: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="text-sm text-slate-400">{props.label}</p>
      <p className="mt-1 text-2xl font-bold">{props.value}</p>
    </div>
  );
}
