const Navbar = () => {
  return (
    <div className="header-navbar">
      <div className="logo">
        <div style={{ position: "absolute", left: "5%", top: "35%" }}>
        <strong style={{color:"#42e386"}}>AD</strong><span><ins style={{textDecorationColor:"#42e386"}}>Works</ins></span>
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
