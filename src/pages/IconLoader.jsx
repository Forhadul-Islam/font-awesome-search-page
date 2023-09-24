/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconLoader({ iconName }) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    import(`@fortawesome/free-solid-svg-icons/${iconName}`)
      .then((module) => {
        // Dynamically add the imported icon to the library
        library.add(module[iconName]);
        setIcon(<FontAwesomeIcon icon={iconName} />);
      })
      .catch((error) => {
        console.error("Error loading Font Awesome icon:", error);
      });
  }, [iconName]);

  return <div>{icon}</div>;
}

export default IconLoader;
