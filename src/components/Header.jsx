import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "@contexts/FilterContext";
import AuthContext from "@contexts/AuthContext";
import api from "@services/apiService";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Search from "@components/Search";
import Calendar from "@components/Calendar";
import styles from "@styles/Header.module.css";
import formatDate from "@utils/dateFormat";
import logo from "@images/logo.jpg";
import twitter from "@images/twitter.jpg";
import facebook from "@images/facebook.jpg";
import instagram from "@images/instagram.jpg";

// Fetch categories
async function fetchCategories() {
  const config = {
    method: "get",
    url: "/categories",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await api.request(config);
  return response.data;
}

export default function Header() {
  const { filterOptions, handleCategoryFilterChange } = useFilter();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const { user, register, login, logout } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authForm, setAuthForm] = useState("login");
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchCategories();
      setLoading(false);
      setCategories(data);
    }

    fetchData();
  }, []);

  // update login state on change
  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  // update register state on change
  const handleRegisterData = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  // Login action
  const handleLogin = async (event) => {
    event.preventDefault();
    await login({
      email: loginFormData.email,
      password: loginFormData.password,
    });
  };

  // Register action
  const handleRegister = (event) => {
    event.preventDefault();
    register({
      first_name: registerFormData.first_name,
      last_name: registerFormData.last_name,
      email: registerFormData.email,
      password: registerFormData.password,
      password_confirmation: registerFormData.password_confirmation,
    });
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Login Form
  const LoginFrom = () => {
    return (
      <form onSubmit={(e) => handleLogin(e)} className={styles.authForm}>
        <h3 className={styles.formTitle}>Login</h3>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="text"
            value={loginFormData.email}
            placeholder="Enter your email"
            onChange={(e) => handleLoginData(e)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            type="password"
            value={loginFormData.password}
            placeholder="Enter your password"
            onChange={(e) => handleLoginData(e)}
          />
        </label>
        <input type="submit" value={authForm} />
      </form>
    );
  };

  // Register Form
  const RegisterFrom = () => {
    return (
      <form onSubmit={(e) => handleRegister(e)} className={styles.authForm}>
        <h3 className={styles.formTitle}>Register</h3>
        <label htmlFor="first_name">
          First name:
          <input
            id="first_name"
            name="first_name"
            type="text"
            value={registerFormData.first_name}
            placeholder="Enter your first name"
            onChange={(e) => handleRegisterData(e)}
          />
        </label>
        <label htmlFor="last_name">
          Last name:
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={registerFormData.last_name}
            placeholder="Enter your last name"
            onChange={(e) => handleRegisterData(e)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="text"
            value={registerFormData.email}
            placeholder="Enter your first name"
            onChange={(e) => handleRegisterData(e)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            type="password"
            value={registerFormData.password}
            placeholder="Enter your password"
            onChange={(e) => handleRegisterData(e)}
          />
        </label>
        <label htmlFor="password_confirmation">
          Confirm password:
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            value={registerFormData.password_confirmation}
            placeholder="Confirm your password"
            onChange={(e) => handleRegisterData(e)}
          />
        </label>
        <input type="submit" value={authForm} />
      </form>
    );
  };

  // User Profile
  // const UserProfile = () => {};

  return (
    <header>
      <div className={styles.topBar}>
        <div>{formattedDate}</div>
        <nav className={styles.nav}>
          <ul>
            {loading ? (
              <p style={{ width: "100%", color: "#fff" }}>Loading...</p>
            ) : (
              categories.map((category) => {
                return (
                  <li
                    key={category.id}
                    onClick={() => handleCategoryFilterChange(category.id)}
                  >
                    <Link
                      className={
                        filterOptions.category === category.id
                          ? styles.active
                          : ""
                      }
                      href="#"
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </nav>
        <div className={styles.rightCol}>
          <Search />

          <div className={styles.userAuth}>
            {!user ? (
              <>
                <Link href="#" onClick={() => toggleDrawer()}>
                  Login | Register
                </Link>
                <Drawer
                  open={isOpen}
                  onClose={toggleDrawer}
                  direction="right"
                  className={styles.authDrawer}
                >
                  {authForm === "login" ? LoginFrom() : RegisterFrom()}
                  <hr />
                  <span
                    className={styles.authAction}
                    onClick={() =>
                      setAuthForm(authForm === "login" ? "register" : "login")
                    }
                  >
                    Switch to{" "}
                    <Link href="#">
                      {authForm === "login" ? "register" : "login"}
                    </Link>
                  </span>
                </Drawer>
              </>
            ) : (
              <Link href="#" onClick={(e) => logout(e)}>
                Hello {user.first_name}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={styles.lowerBar}>
        <div className={styles.siteIdentity}>
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles.socialIcons}>
            <img src={twitter} width={20} alt="" />
            <img src={facebook} height={20} alt="" />
            <img src={instagram} width={20} alt="" />
          </div>
        </div>
        <Calendar />
      </div>
      <hr style={{ margin: "0 6vw" }} />
    </header>
  );
}
