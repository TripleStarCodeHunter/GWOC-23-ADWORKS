const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div style={{ position: "absolute", left: "5%", top: "35%" }}>
          ADWORKS
        </div>
      </div>
      <div className="menu">
        <div>
          <a href="">HOME</a>
        </div>
        <div>
          <a href="">SERVICES</a>
        </div>
        <div>
          <a href="">ABOUT</a>
        </div>
        <div>
          <a href="">CONTACT</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
