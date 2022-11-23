import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-bg">
        <div className="layout-box">
          <Header />
          {children}
          <h6 className="footer-text">
            © {new Date().getFullYear()} | All rights reserved | Made with <span style={{ color: "red" }}>❤</span> -
            VIGNESHWAR
          </h6>
        </div>
      </div>
    </>
  );
};

export default Layout;
