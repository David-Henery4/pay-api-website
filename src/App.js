import { useState } from "react";
import { Navbar, Footer, Sidebar } from "./components";
import { Home, About, Contact, Pricing } from "./pages";

// DONE: PRICING, HOME, ABOUT

function App() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  return (
    <main className="App bg-mainBgChilledWhite text-secondaryLightSanJuanBlue grid grid-cols-mobColumns sm:grid-cols-tabColumns xl:grid-cols-deskColumns">
      {/* NAVBAR */}
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {/* PAGE CONTENT */}
      {/* <Home /> */}
      <About/>
      {/* <Contact/> */}
      {/* <Pricing/>  */}
      {/**/}
      {/* CTA SECTION */}
      <section className="col-start-2 col-end-12 text-center flex flex-col justify-center items-center gap-8 py-20 tab:py-24 tab:gap-10 lg:flex-row lg:justify-between">
        <h3 className="text-secondarySanJuanBlue text-[32px] font-dmDisplay tab:text-5xl">
          Ready to start?
        </h3>
        <div className="relative w-full flex flex-col gap-4 max-w-[445px] tab:flex-row">
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
