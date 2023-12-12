import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "@styles/Pagination.module.css";

export default function Pagination({ pagination, onClick }) {
  const { current_page, per_page, links, total } = pagination;
  const startArticle = (current_page - 1) * per_page + 1;
  const endArticle = Math.min(current_page * per_page, total);

  return (
    <nav className={styles.paginationNav}>
      <div
        className={styles.paginationInfo}
      >{`Shows ${startArticle}-${endArticle} of ${total} articles`}</div>

      <div className={styles.pagesNum}>
        <ul className={styles.pageList}>
          {links.map((link) => {
            return (
              <Link
                onClick={() => onClick(link.url)}
                key={link.label}
                href={link.url ?? ""}
                className={`${styles.link} ${link.active ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
