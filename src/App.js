import { useState } from "react";
import { Navbar, Footer, Sidebar } from "./components";
import { Outlet } from "react-router-dom";
import {SharedCta} from "./pages/SharedSections";

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
      <Outlet/>
      {/* CTA SECTION */}
      <SharedCta/>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default App;
