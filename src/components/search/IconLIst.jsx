/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import {
  faApple,
  faDiscord,
  faDribbble,
  faFacebook,
  faFigma,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faPaypal,
  faSlack,
  faTiktok,
  faTwitter,
  faWindows,
  faWordpress,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
  faDownload,
  faImage,
  faPhone,
  faBars,
  faArrowRight,
  faHeart,
  faWandMagicSparkles,
  faMusic,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconListItem from "./IconLIstItem";
import { useFilterContext } from "../../hook/useFilterContext";
import { useEffect } from "react";

const iconObjects = [
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    name: "House",
    category: "Classic",
    id: 1,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    name: "MagnifyingGlass",
    category: "Classic",
    id: 2,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    name: "User",
    category: "Classic",
    id: 3,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faDownload} />,
    name: "Download",
    category: "Classic",
    id: 4,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faImage} />,
    name: "Image",
    category: "Classic",
    id: 5,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faPhone} />,
    name: "Phone",
    category: "Classic",
    id: 6,
    type: "pro",
  },
  {
    icon: <FontAwesomeIcon icon={faBars} />,
    name: "Bars",
    category: "Classic",
    id: 7,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    name: "Envelope",
    category: "Classic",
    id: 8,
    type: "pro",
  },
  {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    name: "Location",
    category: "Classic",
    id: 9,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faMusic} />,
    name: "Music",
    category: "Classic",
    id: 10,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faWandMagicSparkles} />,
    name: "Spark",
    category: "Classic",
    id: 11,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    name: "Heart",
    category: "Classic",
    id: 12,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faArrowRight} />,
    name: "Arrow",
    category: "Classic",
    id: 13,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faFacebook} />,
    name: "Facebook",
    category: "Brand",
    id: 14,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} />,
    name: "Twitter",
    category: "Brand",
    id: 15,
    type: "pro",
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} />,
    name: "Instagram",
    category: "Brand",
    id: 16,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faTiktok} />,
    name: "TikTok",
    category: "Brand",
    id: 17,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    name: "LinkedIn",
    category: "Brand",
    id: 18,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    name: "GitHub",
    category: "Brand",
    id: 19,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faDiscord} />,
    name: "Discord",
    category: "Brand",
    id: 20,
    type: "pro",
  },
  {
    icon: <FontAwesomeIcon icon={faYoutube} />,
    name: "YouTube",
    category: "Brand",
    id: 21,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faWordpress} />,
    name: "WordPress",
    category: "Brand",
    id: 22,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faSlack} />,
    name: "Slack",
    category: "Brand",
    id: 23,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faFigma} />,
    name: "Figma",
    category: "Brand",
    id: 24,
    type: "pro",
  },
  {
    icon: <FontAwesomeIcon icon={faApple} />,
    name: "Apple",
    category: "Brand",
    id: 25,
    type: "pro",
  },
  {
    icon: <FontAwesomeIcon icon={faGoogle} />,
    name: "Google",
    category: "Brand",
    id: 26,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faWindows} />,
    name: "Windows",
    category: "Brand",
    id: 27,
    type: "free",
  },
  {
    icon: <FontAwesomeIcon icon={faPaypal} />,
    name: "PayPal",
    category: "Brand",
    id: 28,
    type: "pro",
  },
  {
    icon: <FontAwesomeIcon icon={faDribbble} />,
    name: "Dribbble",
    category: "Brand",
    id: 29,
    type: "free",
  },
];

const sortIcons = (sortBy, icons) => {
  switch (sortBy) {
    case "Featured":
      return icons.sort((a, b) => a.id - b.id);
    case "Alphabet":
      return icons.sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );

    default:
      return;
  }
};

const IconLIst = ({ setIconsCount }) => {
  const { state } = useFilterContext();
  console.log(state.sortBy);
  const filteredIcons = iconObjects
    .filter((icon) => {
      console.log(state.selectedFilters.includes(icon.category));
      if (state.selectedFilters.length == 0) {
        return true;
      } else {
        return state.selectedFilters.includes(icon.category);
      }
    })
    .filter((icon) => {
      return state.selectedFilters.includes("free")
        ? icon.type == "free"
        : true;
    });

  const sortedIconst = sortIcons(state.sortBy, filteredIcons);

  useEffect(() => {
    setIconsCount(filteredIcons.length);
  }, [filteredIcons, setIconsCount]);
  return (
    <div className="flex flex-wrap justify-between gap-5 p-4">
      {sortedIconst.map((icon) => (
        <IconListItem key={icon.id} icon={icon} />
      ))}
    </div>
  );
};

export default IconLIst;
