import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="  flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="  h-50 flex flex-col justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe-item"
          className="block w-full h-40"
        />
        <span className="text-sm my-2 text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className=" text-center my-2 font-bold text-black">{item?.title}</h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm my-2 p-3 px-8 rounded-lg uppercase font-medium inline-block tracking-wider shadow-md bg-black text-white"
        >Recipe Details</Link>
      </div>
    </div>
  );
}
