import Channel from "./components/channel";
import Event from "./components/event";
import ParticipantInfo from "./components/aside";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  return (
    <main className="min-h-screen bg-gray-600 px-1 py-1">
      {/* Content utama */}
      <div className="grid grid-cols-5 gap-2">
        {/* Left */}
        <section className="col-span-3 flex flex-col gap-2">
          <Channel />
          <Event />
        </section>
        {/* Right */}
        <section  className="col-span-2">
          <ParticipantInfo />
        </section>
      </div>
      {/* Contact - Full Width */}
      <section>
        <Contact />
        <Footer />
      </section>
    </main>
  );
}

export default App;