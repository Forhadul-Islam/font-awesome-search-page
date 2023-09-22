import { faGoogleWallet } from "@fortawesome/free-brands-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { faCompactDisc, faShapes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FiltersBar = () => {
  return (
    <div className="container pt-7 flex justify-between">
      <ul className="flex w-3/5 justify-between">
        <li className="filter_list_item">
          <FontAwesomeIcon className="text-4xl" icon={faCompactDisc} />
          <span className="py-3 text-sm">Classic</span>
        </li>
        <li className="filter_list_item">
          <FontAwesomeIcon className="text-4xl " icon={faShapes} />
          <span className="py-3 text-sm">Sharp</span>
        </li>
        <li className="filter_list_item">
          <FontAwesomeIcon className="text-4xl " icon={faFlag} />
          <span className="py-3 text-sm">Brands</span>
        </li>
        <li className="filter_list_item">
          <FontAwesomeIcon className="text-4xl " icon={faGoogleWallet} />
          <span className="py-3 text-sm">Free</span>
        </li>
      </ul>
      <select
        value="fooo"
        className="h-14 w-52 rounded-2xl px-4  flex border-2 focus:outline-none ring-2 ring-gray-200 border-gray-400 "
      >
        <option selected value="Feature">
          booo
        </option>
        <option value="barr">Feature</option>
      </select>
    </div>
  );
};

export default FiltersBar;
