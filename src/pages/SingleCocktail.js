import React from "react";
import Loading from "../components/Loading";
import { Link, useParams } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SingleCocktail = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default SingleCocktail;
