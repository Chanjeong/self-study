import styles from "../assets/css/Footer.module.css";
import visa from "../assets/img/svg/visa.svg";
import master from "../assets/img/svg/master.svg";
import americanExpress from "../assets/img/svg/americanExpress.svg";
import paypal from "../assets/img/svg/paypal.svg";
import dinersClub from "../assets/img/svg/dinersClub.svg";
import discover from "../assets/img/svg/discover.svg";
import facebook from "../assets/img/svg/facebook.svg";
import instagram from "../assets/img/svg/instagram.svg";
import github from "../assets/img/svg/github.svg";
import cx from "clsx";
import { useDarkMode } from "../helpers/DarkModeProvider";

export default function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div className={cx(styles.footer, { [styles.dark]: darkMode })}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <a href="https://zero-base.co.kr/">제로베이스</a>
        </div>
        <div className={styles.payLink}>
          <img className={styles.payment} src={visa} alt="visa" />
          <img className={styles.payment} src={master} alt="master" />
          <img className={styles.payment} src={americanExpress} alt="americanExpress" />
          <img className={styles.payment} src={paypal} alt="paypal" />
          <img className={styles.payment} src={dinersClub} alt="dinersClub" />
          <img className={styles.payment} src={discover} alt="discover" />
        </div>
        <div className={styles.social}>
          <a href="https://www.facebook.com/0base">
            <img
              className={cx(styles.socialIcon, { [styles.dark]: darkMode })}
              src={facebook}
              alt="facebook"
              width={"24px"}
              height={"24px"}
            ></img>
          </a>
          <a href="https://www.instagram.com/zerobase.official">
            <img
              className={cx(styles.socialIcon, { [styles.dark]: darkMode })}
              src={instagram}
              alt="instagram"
              width={"24px"}
              height={"24px"}
            ></img>
          </a>
          <a href="https://github.com/oinochoe">
            <img
              className={cx(styles.socialIcon, { [styles.dark]: darkMode })}
              src={github}
              alt="github"
              width={"24px"}
              height={"24px"}
            ></img>
          </a>
        </div>
        <div className={styles.year}>Copyright © 2022 Zero Base</div>
      </div>
    </div>
  );
}
