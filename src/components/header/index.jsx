import styles from "./styles.module.css";
import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">
          <img src={logo} alt="Cooljob" />
        </a>
      </div>
      <nav className={styles.nav}>
        <a href="/link">Главная</a>
        <a href="/link">Музыка</a>
        <a href="/link">Сообщества</a>
        <a href="/link">Друзья</a>
      </nav>
    </header>
  );
};
export default Header;
