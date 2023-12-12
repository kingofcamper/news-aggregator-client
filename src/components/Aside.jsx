import { useState, useEffect } from "react";
import { useFilter } from "@contexts/FilterContext";
import api from "@services/apiService";
import Source from "@components/Source";
import PropTypes from "prop-types";
import styles from "@styles/aside.module.css";

// Fetch sources
async function FetchSources() {
  const config = {
    method: "get",
    url: "/sources",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await api.request(config);
  return response.data;
}

export default function Aside() {
  const { filterOptions, handleSourceFilterChange } = useFilter();
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await FetchSources();
      setLoading(false);
      setSources(data);
    }

    fetchData();
  }, []);

  return (
    <aside>
      <div className={styles.sources}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          sources.map((source) => (
            <Source
              className={
                filterOptions.sources === source.id ? styles.active : ""
              }
              onClick={() => handleSourceFilterChange(source.id)}
              key={source.id}
              source={source}
            />
          ))
        )}
      </div>
    </aside>
  );
}

Aside.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
