import { useState } from "react";
import formatDate from "@utils/dateFormat";
import Search from "@components/Search";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "@styles/MobileHeader.module.css";
import logo from "@images/logo.jpg";
import menu from "@images/menu.png";
import categories from "@utils/categories";

export default function MobileHeader() {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <>
          <img className={styles.hamburger} src={menu} onClick={toggleDrawer} />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="bla bla bla"
          >
            <nav className={styles.nav}>
              <ul>
                <label
                  style={{
                    color: "#000",
                    display: "block",
                    marginBottom: "1vw",
                  }}
                >
                  Categories:{" "}
                </label>
                {categories.map((category) => {
                  return (
                    <li key={category}>
                      <a href="#">{category}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Drawer>
        </>
        <img className={styles.logo} src={logo} alt="" />
        <Search />
      </div>
      <div className={styles.headerBottom}>
        <div>{formattedDate}</div>
        <p>Subscribe</p>
      </div>
    </header>
  );
}
