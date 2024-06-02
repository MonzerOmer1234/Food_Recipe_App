import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalState, { GlobalContext } from "../../store/GlobalState";

export default function NavaBar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  console.log(searchParam);
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? " text-black" : undefined)}
        style={{ fontWeight: "bold", letterSpacing: "3px" }}
      >
        Food Recipe
      </NavLink>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className={`text-black hover:text-gray-700 duration-300 ${({
              isActive
            }) => (isActive ? "active" : undefined)} `}
         
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className={`text-black hover:text-gray-700 duration-300 ${({
              isActive,
            }) => (isActive ? "active" : undefined)} `}
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
