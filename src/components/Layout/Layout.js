// import { AuthProvider } from "@/context/AuthContext";
import Footer from "./Footer";
import "../styles/globals.css";
import PropTypes from 'prop-types';
import Header from "@components/Header/Header";

export default function Layout({
  title,
  keywords,
  description,
  children,
}) {

    return (
      <div>
        <head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </head>
        {/* <AuthProvider> */}
        <Header />
          <main>{children}</main>
          <Footer />
        {/* </AuthProvider> */}
      </div>
    );
  }
  Layout.defaultProps = {
    title: "Bilel | News Aggregator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    keywords: "Magazine, Digital, Articles, Data Sources",
  };

  Layout.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  
