import React from "react";
import SectionOne from "./Date";
import IncompleteItem from "./Added-Item";

function Main() {
    return ( 
        <div className="bg-white w-[375px] flex flex-col gap-4 py-4 shadow-2xl mx-auto mt-10 pl-3 mb-10">
        <SectionOne/>
        <IncompleteItem/>
        </div>
     );
}

export default Main;