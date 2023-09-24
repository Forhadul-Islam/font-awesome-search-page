/* eslint-disable react/jsx-key */
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconListItem = () => {
  return (
    <div className="text-4xl h-48 w-48 flex  items-center justify-center rounded-md bg-white cursor-pointer transition-all  hover:bg-yellow-400">
      <FontAwesomeIcon icon={faHouse} />
    </div>
  );
};

const IconLIst = () => {
  return (
    <div className="flex flex-wrap justify-between gap-5 p-4">
      {Array(20)
        .fill(0)
        .map((icon, i) => (
          <IconListItem key={i} />
        ))}
    </div>
  );
};

export default IconLIst;
