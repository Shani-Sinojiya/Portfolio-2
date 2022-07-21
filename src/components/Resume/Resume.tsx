import Card from "./Card";
import Data from "./Data";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume section container" id="resume">
      <h2 className="section_title">Experience</h2>

      <div className="resume_container grid">
        <div className="timeline grid">
          {/* eslint-disable-next-line */}
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  title={val.title}
                  icon={val.icon}
                  desc={val.desc}
                  year={val.year}
                />
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {/* eslint-disable-next-line */}
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  title={val.title}
                  icon={val.icon}
                  desc={val.desc}
                  year={val.year}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
