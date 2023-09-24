import { faGoogleWallet } from "@fortawesome/free-brands-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { faCompactDisc, faShapes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFilterContext } from "../../hook/useFilterContext";

const FiltersBar = () => {
  const { state, dispatch } = useFilterContext();

  const activeClassFor = (filter) =>
    state.selectedFilters.includes(filter)
      ? `border-b-blue-600 text-blue-800`
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
  return (
    <div className="container pt-7 flex justify-between">
      <ul className="flex w-3/5 justify-between">
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
          onClick={() => handleToggle("Brands")}
          className={`filter_list_item   ${activeClassFor("Brands")}`}
        >
          <FontAwesomeIcon className="text-4xl " icon={faFlag} />
          <span className="py-3 text-sm">Brands</span>
        </li>
        <li
          onClick={() => handleToggle("Free")}
          className={`filter_list_item   ${activeClassFor("Free")}`}
        >
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
