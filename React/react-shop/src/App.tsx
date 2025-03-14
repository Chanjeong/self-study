import "./assets/css/tailwind.css";
import "./assets/css/custom.css";
import { useCallback, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Drawer from "./components/layouts/Drawer";
import Router from "./router/router";

const App = (): JSX.Element => {
  const $hamburger = useRef<HTMLInputElement>(null);

  const closeOverlay = useCallback(() => {
    $hamburger?.current?.click();
  }, []);

  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" ref={$hamburger} />
      <section className="drawer-content">
        <Nav />
        <section className="main pt-16">
          <Router />
        </section>
        <Footer />
      </section>
      <Drawer closeOverlay={closeOverlay} />
    </BrowserRouter>
  );
};

export default App;
