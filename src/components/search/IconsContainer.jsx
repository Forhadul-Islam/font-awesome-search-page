import IconLIst from "./IconLIst";
import Sidebar from "./Sidebar";

const IconsContainer = () => {
  return (
    <div className="bg-zinc-200/80">
      <div className="container py-5 grid grid-cols-12">
        <div className="col-span-3  ">
          <Sidebar />
        </div>
        <div className="col-span-9 ">
          <h3 className="pl-4 text-xl font-semibold text-blue-950">
            25,603 Icons
          </h3>
          <IconLIst />
        </div>
      </div>
    </div>
  );
};

export default IconsContainer;
