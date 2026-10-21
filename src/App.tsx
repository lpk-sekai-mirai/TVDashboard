import { useEffect, useState } from "react";

import Channel from "./components/channel";
import Event from "./components/event";
import ParticipantInfo from "./components/aside";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Background from "./assets/img-bg.webp"

export type Language = "id" | "ja";


function App() {
  const [language, setLanguage] = useState<Language>("id");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "ja" : "id"));
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      if (event.key.toLowerCase() !== "s") {
        return;
      }

      if (
        event.target instanceof HTMLElement &&
        (
          event.target.isContentEditable || 
          ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)
        )
      ) {
        return;
      }

      setLanguage((prev) => (prev === "id" ? "ja" : "id"));
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);


  return (
    <main 
    className="font-sekai h-screen w-screen overflow-hidden bg-cover bg-center" 
    style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex h-full min-h-0 flex-col lg:backdrop-blur-sm md:backdrop-blur-xs">
        <div className="grid min-h-0 flex-1 grid-cols-3 gap-2 md:gap-1">
          <section className="col-span-2 grid min-h-0 min-w-0 grid-rows-[minmax(0,3fr)_minmax(0,1fr)] gap-2 md:gap-1">
            <div className="min-h-0 min-w-0">
              <Channel />
            </div>
            <div className="min-h-0 min-w-0">
              <Event />
            </div>
          </section>
          <section className="col-span-1 min-h-0 min-w-0">
            <ParticipantInfo language={language} />
          </section>
        </div>
        <section className="shrink-0 overflow-hidden">
          <Footer language={language} onToggleLanguage={toggleLanguage} />
          <Contact />
        </section>
      </div>
    </main>
  );
}

export default App;