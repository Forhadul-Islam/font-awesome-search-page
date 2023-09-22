import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <>
      <div className="mb-6">
        <strong className="text-gray-600 text-sm">STYLE</strong>
        <ul className="ml-3 pt-2 text-gray-600">
          {Array(5)
            .fill(1)
            .map((item) => (
              <li key={item} className="flex justify-between py-1 px-4">
                <div className="text-sm">
                  <FontAwesomeIcon icon={faStar} />
                  <span className="px-3">Accessibility</span>
                </div>
                <span>512</span>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <strong className="text-gray-600 text-sm">CATAGORIES</strong>
        <ul className="ml-3 pt-2 text-gray-600">
          {Array(5)
            .fill(1)
            .map((item) => (
              <li key={item} className="flex justify-between py-1 px-4">
                <div className="text-sm">
                  <FontAwesomeIcon icon={faStar} />
                  <span className="px-3">Accessibility</span>
                </div>
                <span>512</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
