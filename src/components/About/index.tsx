import "./About.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  const Skills = [
    {
      name: "HTML/CSS/JS",
      percentage: 90,
      classForBar: "hcj",
    },
    {
      name: "ExpressJS",
      percentage: 75,
      classForBar: "Expressjs",
    },
    {
      name: "NextJS",
      percentage: 90,
      classForBar: "nextjs",
    },
    {
      name: "PHP",
      percentage: 55,
      classForBar: "php",
    },
    {
      name: "Wordpress",
      percentage: 60,
      classForBar: "wp",
    },
  ];
  return (
    <section className="about section container" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Image} alt="about" className="about_img" />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am Shani Sinojiya, web developer from Gujarat, India. I have
              rich experience in web site design and building and customization,
              also I am good at WordPress.
            </p>
            <a
              href="CV.pdf"
              className="btn"
              download={"CV.pdf"}
              target={"_blank"}
            >
              Download CV
            </a>
          </div>

          <div className="about_skills grid">
            {Skills.map((Skills) => (
              <div className="skills_data" key={Skills.name}>
                <div className="skills_titles">
                  <h3 className="skills_name">{Skills.name}</h3>
                  <span className="skills_number">{Skills.percentage}%</span>
                </div>
                <div className="skills_bar">
                  <span
                    className={`skills_percentage ${Skills.classForBar}`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
