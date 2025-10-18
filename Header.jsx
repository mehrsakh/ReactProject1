import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ReactSite</div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
       <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
        />
      </div>
    </header>
  );
}

export default Header;
