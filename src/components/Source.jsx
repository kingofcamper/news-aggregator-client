import styles from "@styles/Source.module.css";
import PropTypes from "prop-types";

export default function Source({ source, onClick }) {
  return (
    <div onClick={onClick} className={styles.source}>
      <h3 className={styles.title}>{source.name}</h3>
    </div>
  );
}

Source.propTypes = {
  source: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
