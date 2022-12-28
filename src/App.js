import { Navbar, Footer } from "./components";
import { Home, About, Contact, Pricing } from "./pages";

function App() {
  return (
    <main className="App bg-mainBgChilledWhite text-secondaryLightSanJuanBlue grid grid-cols-mobColumns gap-y-20 sm:grid-cols-tabColumns">
      {/* NAVBAR */}
      <Navbar />
      {/* PAGE CONTENT */}
      <Home />
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Pricing/> */}
      {/**/}
      {/* CTA SECTION */}
      <section className="col-start-2 col-end-12 text-center">
        <h3 className="text-secondarySanJuanBlue text-[32px] font-dmDisplay mb-8 tab:text-5xl">
          Ready to start?
        </h3>
        <div className="mx-auto relative w-full flex flex-col gap-4 max-w-[445px] tab:flex-row">
          <input
            type="email"
            name="email"
            className="h-12 w-full px-7 py-3 rounded-3xl text-sm font-semibold tab:pr-48"
            placeholder="Enter email address"
          />
          <button className="text-primaryWaterWhite primary-btn h-12 w-full tab:w-44 tab:absolute tab:top-0 tab:right-0">
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
