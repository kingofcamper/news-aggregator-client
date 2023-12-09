import Layout from "@components/Layout";
import Article from "@components/Article";
import MainArticle from "@components/MainArticle";
import NoResults from "@components/NoResults";
import articles from "@utils/articles";
import styles from "@styles/App.module.css";

function App() {
  const content = () => {
    if (!articles.articles?.length) {
      return <NoResults />;
    } else {
      return (
        <div className={styles.articles}>
          {articles.articles.map((article, i) => {
            if (i === 0) {
              return <MainArticle article={article} key={i} />;
            } else {
              return <Article article={article} key={i} />;
            }
          })}
        </div>
      );
    }
  };

  return <Layout>{content()}</Layout>;
}

export default App;
