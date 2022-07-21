import "./Service.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const Service = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
    {
      id: 3,
      image: Image3,
      title: "Api Development",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    },
  ];
  return (
    <section className="services section container" id="services">
      <h2 className="section_title">Services</h2>
      <div className="services_container grid">
        {data.map((service) => (
          <div className="services_card" key={service.id}>
            <img
              src={service.image}
              alt={service.title}
              className="services_img"
            />
            <h3 className="services_title">{service.title}</h3>
            <p className="services_description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
