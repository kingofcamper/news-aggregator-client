// import { AuthProvider } from "@/context/AuthContext";
import useWindowDimensions from "@utils/useWindowDimensions";
import styles from "@styles/Layout.module.css";
import Footer from "@components/Footer";
import PropTypes from "prop-types";
import Header from "@components/Header";
import MobileHeader from "@components/MobileHeader";
import Aside from "@components/Aside";

export default function Layout({ children }) {
  const { width } = useWindowDimensions();
  return (
    <>
      {width < 768 ? <MobileHeader /> : <Header />}
      <div className={styles.container}>
        <main>{children}</main>
        <Aside />
      </div>
      <Footer />
      {/* </AuthProvider> */}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
