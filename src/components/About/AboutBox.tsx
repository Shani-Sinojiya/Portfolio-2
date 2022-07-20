const AboutBox = () => {
  const AboutBoxes = [
    {
      title: 198,
      subtitle: "Project completed",
      icon: "icon-fire",
    },
    {
      title: 5670,
      subtitle: "Cup of coffee",
      icon: "icon-cup",
    },
    {
      title: 427,
      subtitle: "Satisfied clients",
      icon: "icon-people",
    },
    {
      title: 35,
      subtitle: "Nominees winner",
      icon: "icon-badge",
    },
  ];

  return (
    <div className="about_boxes grid">
      {AboutBoxes.map((Box) => (
        <div className="about_box" key={Box.title}>
          <i className={`about_icon ${Box.icon}`}></i>
          <div>
            <h3 className="about_title">{Box.title}</h3>
            <span className="about_subtitle">{Box.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutBox;
