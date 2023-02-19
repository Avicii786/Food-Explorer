import React from "react";
import RecipieList from "@/components/RecipieList";

const getRecipies = async (type) => {
   const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
   );
   const response = await res.json();
   return response;
};

async function page({ params }) {
   const recipes = await getRecipies(params.type);
   return <RecipieList recipes={recipes.meals} type={params.type} />;
}

export default page;
