import { faSquare, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const sidebarData = [
  {
    title: "Style",
    options: [
      {
        name: "Solid",
        number: 250,
        icon: faStar,
      },
      {
        name: "Regular",
        number: 250,
        icon: faStar,
      },
      {
        name: "Light",
        number: 250,
        icon: faStar,
      },
      {
        name: "Thin",
        number: 250,
        icon: faStar,
      },
    ],
  },
  {
    title: "Featured",
    options: [
      {
        name: "New In V6",
        number: 250,
        icon: faStar,
      },
      {
        name: "Sponsored",
        number: 250,
        icon: faStar,
      },
      {
        name: "Staff favourites",
        number: 250,
        icon: faStar,
      },
    ],
  },
  {
    title: "Categories",
    options: [
      {
        name: "Accesibilities",
        number: 250,
        icon: faStar,
      },
      {
        name: "Alert",
        number: 250,
        icon: faStar,
      },
      {
        name: "Alphabet",
        number: 250,
        icon: faStar,
      },
      {
        name: "Animals",
        number: 250,
        icon: faStar,
      },
      {
        name: "Childhood",
        number: 250,
        icon: faStar,
      },
      {
        name: "Pets",
        number: 250,
        icon: faStar,
      },
    ],
  },
];
const Sidebar = () => {
  console.log(sidebarData);
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
                  className="group flex justify-between border my-1 rounded-md border-transparent hover:border-gray-300 cursor-pointer py-1 px-4"
                >
                  <div className="text-sm flex items-center">
                    <FontAwesomeIcon
                      className="group-hover:hidden"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="hidden group-hover:flex"
                      icon={faSquare}
                    />
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
