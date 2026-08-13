import Splash from "./components/Splash";
import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Splash />
      <CursorGlow />

      <main className="relative z-10 flex min-h-screen items-center px-6 py-16 sm:px-10 lg:px-[8vw]">
        <Hero />
      </main>
    </>
  );
}

export default App;