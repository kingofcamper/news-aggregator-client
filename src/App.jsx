import { useState, useEffect } from "react";
import { useFilter } from "@contexts/FilterContext";
import api from "@services/apiService";
import Layout from "@components/Layout";
import Article from "@components/Article";
import MainArticle from "@components/MainArticle";
import NoResults from "@components/NoResults";
import Pagination from "@components/Pagination";
import styles from "@styles/App.module.css";

// Fetch articles
async function fetchArticles(url = "/articles") {
  const config = {
    method: "get",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await api.request(config);
  return response.data;
}

function App() {
  const { filterOptions } = useFilter();
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(filterOptions, "filterOptionsfilterOptions");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchArticles();
      setLoading(false);
      setArticles(data);
    }
    console.log("FilterOptions changed:", filterOptions);
    fetchData();
  }, [filterOptions]);

  function renderArticles() {
    return articles.data.map((article, i) => {
      if (i === 0) {
        return <MainArticle article={article} key={i} />;
      } else {
        return <Article article={article} key={i} />;
      }
    });
  }

  function handlePaginationClick(url) {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    setLoading(true);
    fetchArticles(url).then((data) => {
      setLoading(false);
      setArticles(data);
    });
  }

  return (
    <Layout>
      {loading ? (
        <div>Loading...</div>
      ) : !articles.data?.length ? (
        <NoResults />
      ) : (
        <div className={styles.articles}>
          {renderArticles()}
          <Pagination
            pagination={articles}
            onClick={(url) => handlePaginationClick(url)}
          />
        </div>
      )}
    </Layout>
  );
}

export default App;
