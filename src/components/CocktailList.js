import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return <div>CocktailList</div>;
};

export default CocktailList;
