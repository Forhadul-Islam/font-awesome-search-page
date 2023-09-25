/* eslint-disable react/jsx-no-duplicate-props */
import { faGoogleWallet } from "@fortawesome/free-brands-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faBorderNone,
  faCompactDisc,
  faShapes,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFilterContext } from "../../hook/useFilterContext";
import { useState } from "react";

const FiltersBar = () => {
  const [sortOption, setSortOption] = useState("Featured");
  const { state, dispatch } = useFilterContext();

  const activeClassFor = (filter) =>
    state.selectedFilters.includes(filter)
      ? `border-b-blue-600 text-blue-600`
      : `text-blue-950 border-b-transparent`;

  //handle toggle filter
  const handleToggle = (filter) => {
    const isActiveFilter = state.selectedFilters.includes(filter);
    if (isActiveFilter) {
      dispatch({ type: "REMOVE_FILTER", payload: filter });
    } else {
      dispatch({ type: "ADD_FILTER", payload: filter });
    }
  };

  const handleChangeSort = (e) => {
    let value = e.target.value;
    setSortOption(value);
    dispatch({ type: "CHANGE_SORTBY", payload: value });
  };
  return (
    <div className="container pt-7 flex items-center justify-between">
      <ul className="flex w-3/6 justify-between">
        <li
          onClick={() => handleToggle("Classic")}
          className={`filter_list_item   ${activeClassFor("Classic")}`}
        >
          <FontAwesomeIcon className="text-4xl" icon={faCompactDisc} />
          <span className="py-3 text-sm">Classic</span>
        </li>
        <li
          onClick={() => handleToggle("Sharp")}
          className={`filter_list_item   ${activeClassFor("Sharp")}`}
        >
          <FontAwesomeIcon className="text-4xl " icon={faShapes} />
          <span className="py-3 text-sm">Sharp</span>
        </li>
        <li
          onClick={() => handleToggle("Brand")}
          className={`filter_list_item   ${activeClassFor("Brand")}`}
        >
          <FontAwesomeIcon className="text-4xl " icon={faFlag} />
          <span className="py-3 text-sm">Brands</span>
        </li>
        <li
          onClick={() => handleToggle("free")}
          className={`filter_list_item   ${activeClassFor("free")}`}
        >
          <FontAwesomeIcon className="text-4xl " icon={faGoogleWallet} />
          <span className="py-3 text-sm">Free</span>
        </li>
      </ul>
      <div className="w-48 flex items-center justify-evenly text-3xl">
        <FontAwesomeIcon
          className="cursor-pointer hover:text-blue-500"
          icon={faTableCellsLarge}
        />
        <FontAwesomeIcon
          className="cursor-pointer hover:text-blue-500"
          icon={faBars}
        />
        <FontAwesomeIcon
          className="cursor-pointer hover:text-blue-500"
          icon={faBorderNone}
        />
      </div>
      <select
        value="fooo"
        onChange={(e) => handleChangeSort(e)}
        value={sortOption}
        className="h-14 w-52 rounded-2xl px-4  flex border-2 focus:outline-none ring-2 ring-gray-200 border-gray-400 "
      >
        <option value="Featured">Feature</option>
        <option value="Alphabet">Alphabet</option>
      </select>
    </div>
  );
};

export default FiltersBar;
