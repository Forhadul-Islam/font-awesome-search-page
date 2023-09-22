import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className="container py-7">
      <div className="w-[85%] mx-auto border-2 border-zinc-800 ring-2 ring-inset ring-blue-200 h-16 rounded-full flex  px-4 py-2 items-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          className="flex-1 mx-3 placeholder-black font-bold focus:outline-none px-2"
          type="text"
          name="search"
          id="search"
          placeholder="search"
        />
        <FontAwesomeIcon
          className="bg-gray-300 h-4 w-4 p-1 rounded-full cursor-pointer hover:bg-pink-400"
          icon={faXmark}
        />
      </div>
    </div>
  );
};

export default SearchBar;
