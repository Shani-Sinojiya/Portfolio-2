import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HeaderSocial = () => {
  const Items = [
    {
      name: "instagram",
      icon: faInstagram,
      link: "https://www.instagram.com/shani_sinojiya/",
    },
    {
      name: "twitter",
      icon: faTwitter,
      link: "https://twitter.com/ShaniSinojiya",
    },
    {
      name: "facebook",
      icon: faFacebook,
      link: "https://www.facebook.com/shani.sinojiya/",
    },
    {
      name: "github",
      icon: faGithub,
      link: "https://github.com/Shani-Sinojiya",
    },
    {
      name: "pinterest",
      icon: faPinterest,
      link: "https://pin.it/19i7GIb",
    },
  ];
  return (
    <div className="home_socials">
      {Items.map((item) => {
        return (
          <a
            href={item.link}
            className="home_social-link"
            target={"_blank"}
            rel="noreferrer"
            key={item.name}
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        );
      })}
    </div>
  );
};

export default HeaderSocial;
