import { AuthProvider } from "@contexts/AuthContext";
import { FilterProvider } from "@contexts/FilterContext";
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
    <AuthProvider>
      <FilterProvider>
        {width < 768 ? <MobileHeader /> : <Header />}
        <div className={styles.container}>
          <main>{children}</main>
          <Aside />
        </div>
        <Footer />
      </FilterProvider>
    </AuthProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
