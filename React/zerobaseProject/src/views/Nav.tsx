import React, { useContext, useState, ChangeEvent, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/Nav.module.css";
import sunIcon from "../assets/img/svg/sun.png";
import moonIcon from "../assets/img/svg/moon.png";
import cartIcon from "../assets/img/svg/cart.png";
import cx from "clsx";
import { useDarkMode } from "../helpers/DarkModeProvider";
import { useSearch } from "../helpers/SearchProvider";
import { useCart } from "../helpers/CartProvider";
import Drawer from "../components/common/Drawer";

export default function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { search, searchResult, setSearch } = useSearch();
  const { cart } = useCart();
  const searchResultsRef = useRef<HTMLUListElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchResultsRef.current && !searchResultsRef.current.contains(event.target as Node)) {
      setSearch("");
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const links = [
    { path: "/fashion", label: "패션" },
    { path: "/accessory", label: "액세서리" },
    { path: "/digital", label: "디지털" },
  ];

  return (
    <div className={cx(styles.nav, { [styles.dark]: darkMode })}>
      <div className={styles.container}>
        <span className={styles.drawerIcon} onClick={toggleDrawer}>
          ☰
        </span>
        <h1 className={styles.title}>
          <Link to="/">React Shop</Link>
        </h1>
        <div className={styles.tabs}>
          <Link className={styles.link} to="/fashion">
            패션
          </Link>
          <Link className={styles.link} to="/accessory">
            액세서리
          </Link>
          <Link className={styles.link} to="/digital">
            디지털
          </Link>
        </div>
        <div className={styles.options}>
          <button onClick={toggleDarkMode}>
            <img
              className={cx(styles.mode, { [styles.dark]: darkMode })}
              src={darkMode ? sunIcon : moonIcon}
              alt={darkMode ? "whiteMode" : "darkMode"}
            />
          </button>
          <input
            className={cx(styles.search, { [styles.dark]: darkMode })}
            type="text"
            placeholder="검색"
            onChange={handleInputChange}
          />
          {search && (
            <ul className={styles.searchedContainer} ref={searchResultsRef}>
              {searchResult.map((result) => (
                <Link
                  key={result.id}
                  to={`/product/${result.id}`}
                  className={cx(styles.searchLink, { [styles.dark]: darkMode })}
                >
                  <li className={styles.listContainer}>{result.title}</li>
                </Link>
              ))}
            </ul>
          )}
          <Link className={styles.cart} to="/cart">
            <img className={cx(styles.cartIcon, { [styles.dark]: darkMode })} src={cartIcon} alt="cart" />
            <div className={styles.items}>{cart.reduce((acc, product) => acc + product.quantity, 0)}</div>
          </Link>
        </div>
      </div>
      <Drawer isOpen={isOpen} onClose={toggleDrawer} links={links} />
    </div>
  );
}
