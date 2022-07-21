import { useState } from "react";
import Menu from "./Menu";
import "./Portfolio.css";

const Portfolio = () => {
  const [Items, setItems] = useState(Menu);

  const filterManu = (category: string) => {
    const newManu = Menu.filter((el) => {
      return el.category === category;
    });

    setItems(newManu);
  };

  const WorkItem = [
    {
      title: "Creative",
    },
    {
      title: "Art",
    },
    {
      title: "Design",
    },
    {
      title: "Branding",
    },
  ];
  return (
    <section className="work section container" id="work">
      <h2 className="section_title">Recent Works</h2>
      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        {WorkItem.map((item) => (
          <span className="work_item" onClick={() => filterManu(item.title)}>
            {item.title}
          </span>
        ))}
      </div>
      <div className="work_container grid">
        {Items.map((item) => {
          return (
            <div className="work_card" key={item?.id}>
              <div className="work_thumbnail">
                <img src={item?.image} alt={item?.title} className="work_img" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{item?.category}</span>
              <h3 className="work_title">{item?.title}</h3>
              <a href="/" className="work_button">
                <i className="icon-link work_button_icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
