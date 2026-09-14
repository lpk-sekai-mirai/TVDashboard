import Channel from "./components/channel";
import Event from "./components/event";
import ParticipantInfo from "./components/aside";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Background from "./assets/img-bg.jpg";

function App() {
  return (
    <main
      className="font-sekai h-screen w-screen overflow-hidden bg-cover bg-center "
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex h-full min-h-0 flex-col  backdrop-blur-md">
        {/* CONTENT UTAMA */}
        <div className="grid min-h-0 flex-1 grid-cols-3 gap-2">
          {/* KIRI - 2 BAGIAN */}
          <section className="col-span-2 grid min-h-0 min-w-0 grid-rows-[minmax(0,3fr)_minmax(0,1fr)] gap-2">
            {/* CHANNEL */}
            <div className="min-h-0 min-w-0">
              <Channel />
            </div>

            {/* EVENT */}
            <div className="min-h-0 min-w-0">
              <Event />
            </div>
          </section>

          {/* KANAN - 1 BAGIAN */}
          <section className="col-span-1 min-h-0 min-w-0">
            <ParticipantInfo />
          </section>
        </div>

        {/* FOOTER */}
        <section className="shrink-0 overflow-hidden">
          <Footer />
          <Contact />
        </section>
      </div>
    </main>
  );
}

export default App;