/* eslint-disable react/prop-types */
const IconListItem = ({ icon }) => {
  return (
    <div className="">
      <div className=" relative  h-48 w-48 flex flex-col  items-center justify-center rounded-md bg-white cursor-pointer transition-all  hover:bg-yellow-400">
        <div className="text-4xl mb-6">{icon.icon}</div>
        <span className=" text-gray-800 font-medium">{icon.name}</span>
        {icon.type === "pro" && (
          <div className="absolute top-0 text-center   bg-yellow-500 px-3  rounded-md ">
            Pro
          </div>
        )}
      </div>
    </div>
  );
};

export default IconListItem;
