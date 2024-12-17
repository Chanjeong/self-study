import styles from "../../assets/css/Drawer.module.css";
import cx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../helpers/DarkModeProvider";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: { path: string; label: string }[];
}

function Drawer({ isOpen, onClose, links }: DrawerProps) {
  const { darkMode } = useDarkMode();
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
      <div className={cx(styles.drawerSide, { [styles.open]: isOpen }, { [styles.dark]: darkMode })}>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.path} className={cx({ [styles.dark]: darkMode })}>
              <Link to={link.path} onClick={onClose}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Drawer;
