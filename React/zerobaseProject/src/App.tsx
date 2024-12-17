import "./assets/css/tailwind.css";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./router/router";
import Nav from "./views/Nav";
import Footer from "./views/Footer";
import cx from "clsx";
import styles from "../src/assets/css/App.module.css";
import DarkModeProvider from "./helpers/DarkModeProvider";
import { useDarkMode } from "./helpers/DarkModeProvider";
import SearchProvider from "./helpers/SearchProvider";
import { CartProvider } from "./helpers/CartProvider";

const AppContent = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        <Nav />
        <section className={cx("main", { [styles.dark]: darkMode })}>
          <Router />
        </section>
        <Footer />
      </section>
    </>
  );
};

const App = (): JSX.Element => {
  return (
    <DarkModeProvider>
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </DarkModeProvider>
  );
};

export default App;
