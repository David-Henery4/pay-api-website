import { Navbar, Footer } from "./components";
import { Home, About, Contact, Pricing } from "./pages";
import { Logo, TwitterIcon, FacebookIcon, LinkedinIcon } from "./assets";

function App() {
  return (
    <main className="App bg-mainBgChilledWhite text-secondaryLightSanJuanBlue grid grid-cols-mobColumns gap-y-20">
      {/* NAVBAR */}
      <Navbar />
      {/* PAGE CONTENT */}
      <Home />
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Pricing/> */}
      {/**/}
      {/* CTA SECTION */}
      <section className="col-start-2 col-end-12">
        <h3>Ready to start?</h3>
        <div>
          <input
            type="email"
            name="email"
            className="px-7 py-3 rounded-3xl text-sm font-semibold"
            placeholder="Enter email address"
          />
          <button className="text-primaryWaterWhite primary-btn h-12 w-full">
            Schedule a Demo
          </button>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default App;
