import React from "react";
import Image from "next/image";
import Link from "next/link";
const getRecipeDetails = async (id) => {
   const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
   );
   return res.json();
};

async function page({ params }) {
   const recipeDetails = await getRecipeDetails(params.id);
   const details = recipeDetails.meals[0];
   const ingredients = Object.keys(details)
      .filter((key) => key.indexOf("Ingredient") > 0)
      .map((ingkey) => details[ingkey])
      .filter(Boolean);
   return (
      <div className="grid grid-cols-1 md:grid-cols-2">
         <div>
            <Image
               src={details.strMealThumb}
               alt="Meal Image"
               width={500}
               height={500}
               className="w-full h-[90%] shadow-lg p-2 rounded"
            />
         </div>
         <div className="p-5">
            <h1>
               Recipe Name:{" "}
               <span className="font-bold text-2xl">{details.strMeal}</span>
            </h1>
            <div className="tags mt-3">
               <p>Ingredients List:</p>
               {ingredients.map((ing, index) => (
                  <span
                     className="bg-blue-500 text-white px-2 py-1 rounded inline-block mr-2 mb-2"
                     key={index}
                  >
                     {ing}
                  </span>
               ))}
            </div>
            {details.strYoutube && (
               <div className="mt-3">
                  <p>Video Link:</p>
                  <Link
                     className="text-blue-500 hover:border-b-4 hover:border-blue-600"
                     target="_blank"
                     rel="noreferrer"
                     href={details.strYoutube}
                  >
                     How to Make {details.strMeal}
                  </Link>
               </div>
            )}
         </div>
      </div>
   );
}

export default page;
