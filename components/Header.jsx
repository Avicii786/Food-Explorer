"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Header() {
   const pathname = usePathname().split("/");
   const currentArea = pathname[2];
   const recipeId = pathname[3];
   return (
      <div className="py-5 bg-slate-300 flex items-center justify-between px-2">
         <div>
            <Link href="/">
               <h1 className="text-blue-700 font-bold text-5xl text-center">
                  Foodie
               </h1>
            </Link>
         </div>
         <div className="flex flex-wrap justify-end items-center md:justify-evenly gap-2">
            {pathname.join("/") !== "/" ? (
               <Link
                  className="bg-blue-500 text-white p-4 md:mb-0  md:mr-4 min-w-[180px] text-xs text-center rounded font-bold sm:mr-4"
                  href="/"
               >
                  Back to Home
               </Link>
            ) : (
               ""
            )}
            {pathname && currentArea && (
               <Link
                  className={`bg-blue-500 text-center text-white min-w-[180px] p-4 text-xs rounded font-bold`}
                  href={recipeId ? `/types/${currentArea}` : "/types"}
               >
                  Back to {recipeId ? `${currentArea} Recipes` : "Recipe Type"}
               </Link>
            )}
         </div>
      </div>
   );
}

export default Header;
