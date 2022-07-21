import "./Sidebar.css";
import Logo from "../../assets/logo.svg";

const SideBar = () => {
  const navItems = [
    {
      title: "home",
      icon: "icon-home",
    },
    {
      title: "about",
      icon: "icon-user-following",
    },
    {
      title: "services",
      icon: "icon-briefcase",
    },
    {
      title: "resume",
      icon: "icon-graduation",
    },
    {
      title: "portfolio",
      icon: "icon-layers",
    },
    {
      title: "blog",
      icon: "icon-note",
    },
    {
      title: "contact",
      icon: "icon-bubble",
    },
  ];

  return (
    <aside className="aside">
      <a href="#home" className="nav_logo">
        <img src={Logo} alt="Logo" />
      </a>
      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            {navItems.map((item) => (
              <li className="nav_item" key={item.title}>
                <a href={"#" + item.title} className="nav_link">
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="nav_footer">
        <span className="copyright">&copy; 2022 - 2023.</span>
      </div>
    </aside>
  );
};

export default SideBar;
