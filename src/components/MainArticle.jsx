import styles from "@styles/MainArticle.module.css";
import PropTypes from "prop-types";

export default function MainArticle({ article }) {
  return (
    <article className={styles.article}>
      <a href={article.url} target="__blank">
        <div className={styles.coverImgWrapper}>
          <img className={styles.coverImg} src={article.urlToImage} alt="" />
        </div>
        <h1 className={styles.title}>{article.title}</h1>
      </a>
    </article>
  );
}

MainArticle.propTypes = {
  article: PropTypes.object.isRequired,
};
