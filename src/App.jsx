import Splash from "./components/Splash";
import CursorGlow from "./components/CursorGlow";
import ProfilePanel from "./components/ProfilePanel";
import PortfolioContent from "./components/PortfolioContent";

function App() {
  return (
    <>
      <Splash />
      <CursorGlow />

      <div className="relative z-10 min-h-screen overflow-x-clip lg:grid lg:grid-cols-[42vw_58vw]">
        <ProfilePanel />

        <main className="min-w-0">
          <PortfolioContent />
        </main>
      </div>
    </>
  );
}

export default App;