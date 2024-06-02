import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [error, setError] = useState("");
  const [favouritesList, setFavouritesList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const naviagte = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();

      console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        naviagte('/');
      }
    } catch (e) {
      console.log(e);
      setError("Failed to fetch receipes . Try Again Later");
      setLoading(false);
      setSearchParam("");
    }
  }
  function handleAddToFavourites(getCurrentItem){
    console.log(getCurrentItem)
    const cpyFavouritesList = [...favouritesList];
    const index = cpyFavouritesList.findIndex(item => item.id === getCurrentItem.id);
    if(index === -1){
      cpyFavouritesList.push(getCurrentItem);
    }  else{
      cpyFavouritesList.splice(index); 
    }
    setFavouritesList(cpyFavouritesList);
     naviagte("/favourites")
    console.log(favouritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        error,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavourites,
        favouritesList,
     
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
