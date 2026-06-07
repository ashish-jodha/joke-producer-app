import Joker from "./Joker";

export default function App() {
  const containerStyle = "min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8 font-sans text-slate-100";

  return (
    <div className={containerStyle}>
      <Joker />
    </div>
  );
}