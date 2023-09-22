import { faFlag } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="container py-7 flex justify-between">
      <ul className="flex justify-between w-4/6 text-gray-600">
        <li className="text-2xl text-blue-600 cursor-pointer">
          <FontAwesomeIcon icon={faFlag} />
        </li>
        <li className="nav_links">start</li>
        <li className="text-gray-900 cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </li>
        <li className="nav_links">Icons</li>
        <li className="nav_links">Docs</li>
        <li className="nav_links">Plans</li>
        <li className="nav_links">Support</li>
        <li className="nav_links">Pdcast</li>
      </ul>
      <div className="nav_links text-2xl">
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
    </div>
  );
};

export default Navbar;
