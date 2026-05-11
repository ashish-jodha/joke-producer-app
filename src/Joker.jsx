import { useEffect, useState } from "react";
import { getJoke } from "./JokeAPI";

export default function Joker() {
    const [joke, setJoke] = useState("Loading your joke...");

    const handleClick = async () => {
        setJoke("Loading your joke...");
        const newJoke = await getJoke();
        setJoke(newJoke);
    }

    useEffect(() => {
        const getFirstJoke = async () => {
            const initialJoke = await getJoke();
            setJoke(initialJoke);
        }

        getFirstJoke();
    }, []);

    return (
        <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col items-center gap-6 transition-all duration-300">
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500 drop-shadow-sm text-center">
                The Comedy Club
            </h1>

            <div className="w-full bg-slate-950/50 rounded-2xl p-6 min-h-45 flex flex-col justify-center text-center shadow-inner border border-slate-800/50">
                {joke.includes('\n... ') ? (
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-slate-400 font-medium">
                            {joke.split('\n... ')[0]}
                        </p>
                        <p className="text-2xl font-bold text-amber-400">
                            {joke.split('\n... ')[1]}
                        </p>
                    </div>
                ) : (
                    <p className="text-xl font-medium leading-relaxed text-slate-200">
                        {joke}
                    </p>
                )}
            </div>

            <button 
                onClick={handleClick}
                className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-lg rounded-xl shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-200"
            >
                Give me a joke
            </button>
            
        </div>
    );
}