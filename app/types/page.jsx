import Link from "next/link";

const fetchRecipesAreas = async () => {
   const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
   );
   const response = await res.json();
   //    console.log(response.meals.map((a) => a.strArea));
   return response.meals.map((a) => a.strArea);
};

export default async function page() {
   const areas = await fetchRecipesAreas();
   return (
      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         {areas.map((a, index) => (
            <Link
               className="shadow-gray-500 text-center bg-gray-300 text-2xl py-10 font-bold rounded hover:bg-blue-500 hover:text-white "
               href={`/types/${a}`}
               key={index}
            >
               {a}
            </Link>
         ))}
      </div>
   );
}
