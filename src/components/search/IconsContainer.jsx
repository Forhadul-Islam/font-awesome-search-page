import { useState } from "react";
import IconLIst from "./IconLIst";
import Sidebar from "./Sidebar";

const IconsContainer = () => {
  const [iconsCount, setIconsCount] = useState("0");
  return (
    <div className="bg-zinc-200/50">
      <div className="px-20 py-5 grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9 ">
          <h3 className="pl-4 text-xl font-semibold text-blue-950">
            {iconsCount} Icons
          </h3>
          <IconLIst setIconsCount={setIconsCount} />
        </div>
      </div>
    </div>
  );
};

export default IconsContainer;
