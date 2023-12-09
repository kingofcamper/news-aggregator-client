import Search from "@components/Search";
import Calendar from "@components/Calendar";
import styles from "@styles/Header.module.css";
import formatDate from "@utils/dateFormat";
import categories from "@utils/categories";
import logo from "@images/logo.jpg";
import twitter from "@images/twitter.jpg";
import facebook from "@images/facebook.jpg";
import instagram from "@images/instagram.jpg";

export default function Header() {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return (
    <header>
      <div className={styles.topBar}>
        <div>{formattedDate}</div>
        <nav className={styles.nav}>
          <ul>
            {categories.map((category) => {
              return (
                <li key={category}>
                  <a href="#">{category}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.rightCol}>
          <Search />
        </div>
      </div>
      <div className={styles.lowerBar}>
        <div className={styles.siteIdentity}>
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles.socialIcons}>
            <img src={twitter} width={20} alt="" />
            <img src={facebook} height={20} alt="" />
            <img src={instagram} width={20} alt="" />
          </div>
        </div>
        <Calendar />
      </div>
      <hr style={{ margin: "0 6vw" }} />
    </header>
  );
}
