import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p> My React Site|Design by Mehrsa Khalaj</p>
        <div className={styles.socials}>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Call</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
