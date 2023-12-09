import Source from "@components/Source";
import sources from "@utils/sources";
import styles from "@styles/aside.module.css";

export default function Aside() {
  return (
    <aside>
      <div className={styles.sources}>
        {sources.map((source) => (
          <Source
            onClick={() => console.log("source.key", source.key)}
            key={source.key}
            source={source}
          />
        ))}
      </div>
    </aside>
  );
}
