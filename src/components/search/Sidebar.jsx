import {
  faSquareCheck,
  faCircle,
  faCircleHalfStroke,
  faStarHalfStroke,
  faPersonSnowboarding,
  faStaffAesculapius,
  faCakeCandles,
  faLaughBeam,
  faAppleAlt,
  faCat,
  faPlane,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircle as faRegCircle,
  faCircleRight,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useFilterContext } from "../../hook/useFilterContext";
const sidebarData = [
  {
    title: "Style",
    options: [
      {
        name: "Solid",
        number: 250,
        icon: faCircle,
      },
      {
        name: "Regular",
        number: 250,
        icon: faRegCircle,
      },
      {
        name: "Light",
        number: 250,
        icon: faCircleRight,
      },
      {
        name: "Thin",
        number: 250,
        icon: faCircleHalfStroke,
      },
    ],
  },
  {
    title: "Featured",
    options: [
      {
        name: "New In V6",
        number: 250,
        icon: faStarHalfStroke,
      },
      {
        name: "Sponsored",
        number: 250,
        icon: faPersonSnowboarding,
      },
      {
        name: "Staff favourites",
        number: 250,
        icon: faStaffAesculapius,
      },
    ],
  },
  {
    title: "Categories",
    options: [
      {
        name: "Accesibilities",
        number: 250,
        icon: faCakeCandles,
      },
      {
        name: "Alert",
        number: 250,
        icon: faLaughBeam,
      },
      {
        name: "Alphabet",
        number: 250,
        icon: faAppleAlt,
      },
      {
        name: "Animals",
        number: 250,
        icon: faDog,
      },
      {
        name: "Childhood",
        number: 250,
        icon: faPlane,
      },
      {
        name: "Pets",
        number: 250,
        icon: faCat,
      },
    ],
  },
];
const Sidebar = () => {
  const { state, dispatch } = useFilterContext();

  //is active tab
  const isActive = (filter) => state.selectedStyles.includes(filter);

  // active styles
  const activeClassFor = (filter) =>
    state.selectedStyles.includes(filter)
      ? `border-1  border-blue-600 text-white bg-blue-600`
      : `text-gray-600 `;

  //toggle
  const toggleSidebarFilter = (filter) => {
    const isActiveFilter = state.selectedStyles.includes(filter);
    if (isActiveFilter) {
      dispatch({ type: "REMOVE_STYLE", payload: filter });
    } else {
      dispatch({ type: "ADD_STYLE", payload: filter });
    }
  };
  return (
    <>
      <div className="mb-6">
        {sidebarData.map((item) => (
          <React.Fragment key={item.title}>
            <strong className="uppercase text-gray-600 text-sm">
              {item.title}
            </strong>
            <ul className="ml-3 w-5/6 pt-2 text-gray-600">
              {item.options.map((icon) => (
                <li
                  key={icon}
                  onClick={() => toggleSidebarFilter(icon.name)}
                  className={`group ${activeClassFor(
                    icon.name
                  )} flex justify-between border my-1 rounded-md border-transparent hover:border-gray-300 cursor-pointer py-1 px-4`}
                >
                  <div className="text-sm flex items-center">
                    {!isActive(icon.name) ? (
                      <>
                        <FontAwesomeIcon
                          className="group-hover:hidden"
                          icon={icon.icon}
                        />
                        <FontAwesomeIcon
                          className="hidden group-hover:flex"
                          icon={faSquare}
                        />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faSquareCheck} />
                      </>
                    )}
                    <span className="px-3 font-semibold text-[13px]">
                      {icon.name}
                    </span>
                  </div>
                  <span>512</span>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
