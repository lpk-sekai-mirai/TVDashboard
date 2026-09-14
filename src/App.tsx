import Channel from "./components/channel";
import Event from "./components/event";
import ParticipantInfo from "./components/aside";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Background from "./assets/img-bg.jpg";

// style={{ backgroundImage: `url(${Background})` }}

function App() {
  return (
    // <main className="min-h-screen px-1 py-1" style={{ backgroundImage: `url(${Background})` }} >
    <main
      className="font-sekai min-h-screen w-full overflow-x-hidden bg-cover bg-center px-1 py-1"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex h-full flex-col gap-4 backdrop-blur-md">
        {/* Content utama */}
        <div className="min-h-0 flex-1 grid grid-cols-3 gap-2">
          {/* Left */}
          <section className="col-span-2 min-h-0 flex flex-col gap-2">
            <Channel />
            <Event />
          </section>
          {/* Right */}
          <section className="col-span-1 min-h-0">
            <ParticipantInfo />
          </section>
        </div>
        {/* Contact - Full Width */}
        <section className="shrink-0 mt-2">
          <div className="bg-white">
            <Contact />
          </div>
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default App;
