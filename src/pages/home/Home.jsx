import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import RecipeItem from "../../components/recipe-item/RecipeItem";

export default function Home() {
  const { recipeList, loading, error } = useContext(GlobalContext);

  if (loading) return <h1 className=" font-bold text-green-500 text-center">Loading ...</h1>;
  if (error) return <h1 className=" font-bold text-red-500 text-center">{error}</h1>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing to show .search about an item
        </p>
      )}
    </div>
  );
}
