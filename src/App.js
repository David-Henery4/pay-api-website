import { useState, useLayoutEffect } from "react";
import { Navbar, Footer, Sidebar } from "./components";
import { Outlet, useLocation } from "react-router-dom";
import { SharedCta } from "./pages/SharedSections";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main className="App bg-mainBgChilledWhite text-secondaryLightSanJuanBlue grid grid-cols-mobColumns sm:grid-cols-tabColumns xl:grid-cols-deskColumns overflow-hidden">
      <Wrapper>
        {/* NAVBAR */}
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* PAGE CONTENT */}
        <Outlet />
        {/* CTA SECTION */}
        <SharedCta />
        {/* FOOTER */}
        <Footer />
      </Wrapper>
    </main>
  );
}

export default App;
