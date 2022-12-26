import {Navbar} from "./components"
import {Home, About, Contact,Pricing} from "./pages"

function App() {
  return (
    <main className="App">
      {/* NAVBAR */}
      <Navbar/>
      {/* PAGE CONTENT */}
      <Home/>
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Pricing/> */}
      {/**/}
      {/* CTA SECTION */}
      <section>Call to action</section>
      {/* FOOTER */}
      <footer>footer</footer>
    </main>
  );
}

export default App;
