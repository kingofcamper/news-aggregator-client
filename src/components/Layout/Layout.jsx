// import { AuthProvider } from "@/context/AuthContext";
// import styles from "@components/Layout/Layout";
import Footer from "@components/Footer/Footer";
import PropTypes from "prop-types";
import Header from "@components/Header/Header";
import Aside from "@components/Aside/Aside";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Aside />
      <Footer />
      {/* </AuthProvider> */}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
