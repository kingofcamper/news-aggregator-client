import styles from "./Header.module.css";
import formatDate from "@utils/dateFormat";

export default function Header() {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  return (
    <header className={styles.header}>
      <div>{formattedDate}</div>
    </header>
  );
}
