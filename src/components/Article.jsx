import styles from "@styles/Article.module.css";
import PropTypes from "prop-types";
import formatDate from "@utils/dateFormat.js";

export default function Article({ article }) {
  const articlePublishedDate = new Date(article.publishedAt);
  return (
    <article className={styles.article}>
      <a href={article.url} target="__blank">
        <div className={styles.coverImgWrapper}>
          <img className={styles.coverImg} src={article.urlToImage} alt="" />
        </div>
        <h2 className={styles.title}>{truncateText(article.title, 70)}</h2>
        <p className={styles.description}>{article.description}</p>
        <p className={styles.date}>{formatDate(articlePublishedDate)}</p>
      </a>
    </article>
  );
}

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  }
  return text;
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};
