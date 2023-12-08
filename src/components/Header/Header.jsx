import { useState, useEffect } from "react";
// import axios from "axios";
import styles from "./Header.module.css";
import formatDate from "@utils/dateFormat";
import categories from "@utils/categories";
import sources from "@utils/sources";
import logo from "@images/logo.jpg";
import twitter from "@images/twitter.jpg";
import facebook from "@images/facebook.jpg";
import instagram from "@images/instagram.jpg";

export default function Header() {
  const [query, setQuery] = useState("");
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const getQuery = async (query) => {
    console.log(`Fetching ${query}...`);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => getQuery(query), 1000);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div>{formattedDate}</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
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
          <form href="#" action="search">
            <input
              className={styles.search}
              type="text"
              placeholder="Search by keyword"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>
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
        <form className={styles.btnGroup}>
          {sources.map((source) => {
            return (
              <label key={source.key} className="btn btnActive">
                <input type="radio" name="options" id={source.key} checked />
                {source.name}
              </label>
            );
          })}
        </form>
      </div>
    </header>
  );
}
