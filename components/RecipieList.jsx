import React from "react";
import Image from "next/image";
import Link from "next/link";

function RecipieList({ recipes, type }) {
   console.log(recipes);
   return (
      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden">
         {recipes.map((recipe, index) => {
            return (
               <div key={index} className="rounded bg-slate-300 flex flex-col">
                  <Image
                     alt="Recipie Image"
                     src={recipe.strMealThumb}
                     width={500}
                     height={500}
                  />
                  <div className="p-5 flex-1 flex flex-col justify-between text-center">
                     <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
                     <Link
                        className="text-white bg-blue-500 rounded py-3 px-3 mt-5 block hover:bg-blue-600 text-center"
                        href={`/types/${type}/${recipe.idMeal}`}
                     >
                        Get Recipe Details
                     </Link>
                  </div>
               </div>
            );
         })}
      </div>
   );
}

export default RecipieList;
