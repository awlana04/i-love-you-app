import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="text-6xl text-center pt-52">Quer casar comigo?</h1>

      <div className="pt-16 grid-flow-row text-center text-3xl font-semibold transition-colors">
        <Link href="/thank-u">
          <button className="w-52 h-28 mr-14 bg-red-600 rounded-md hover:animate-bounce hover:bg-red-800">SIM!!!</button>
        </Link>

        <button className="w-52 h-28 bg-slate-400 rounded-md hover:bg-slate-600 hover:block" >Não</button>
      </div>
    </>
  )
}
