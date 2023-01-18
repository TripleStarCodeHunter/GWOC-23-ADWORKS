const Navbar = () => {
  return (
    <div className="header-navbar">
      <div className="logo">
        <div style={{ position: "absolute", left: "5%", top: "35%" }}>
          ADWORKS
        </div>
      </div>
      <div className="menu">
        <div>
          <a href="/">HOME</a>
        </div>
        <div>
          <a href="/services">SERVICES</a>
        </div>
        <div>
          <a href="/about">ABOUT</a>
        </div>
        <div>
          <a href="/contact">CONTACT</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
