import { useEffect, useState } from "react";
import { getJoke } from "./JokeAPI";

export default function Joker() {
    const cardStyle = "w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col items-center gap-6 sm:gap-8 transition-all duration-300";
    const titleStyle = "text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500 drop-shadow-sm text-center";
    const jokeBoxStyle = "w-full bg-slate-950/50 rounded-2xl p-5 sm:p-6 min-h-40 sm:min-h-48 flex flex-col justify-center text-center shadow-inner border border-slate-800/50";
    const jokeContainerStyle = "flex flex-col gap-4";
    const setupStyle = "text-base sm:text-lg text-slate-400 font-medium";
    const punchlineStyle = "text-xl sm:text-2xl font-bold text-amber-400";
    const singleJokeStyle = "text-lg sm:text-xl font-medium leading-relaxed text-slate-200";
    const buttonStyle = "w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-200";

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
        <div className={cardStyle}>

            <h1 className={titleStyle}>
                The Comedy Club
            </h1>

            <div className={jokeBoxStyle}>
                {joke.includes('\n... ') ? (
                    <div className={jokeContainerStyle}>
                        <p className={setupStyle}>
                            {joke.split('\n... ')[0]}
                        </p>
                        <p className={punchlineStyle}>
                            {joke.split('\n... ')[1]}
                        </p>
                    </div>
                ) : (
                    <p className={singleJokeStyle}>
                        {joke}
                    </p>
                )}
            </div>

            <button
                onClick={handleClick}
                className={buttonStyle}
            >
                Give me a joke
            </button>

        </div>
    );
}