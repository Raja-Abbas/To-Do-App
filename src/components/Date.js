import React, { useState, useEffect } from "react";

function SectionOne() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update the current date every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Format the current date as "December 1, 2021" style
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="">
      <div className="flex">
        <h1 className="text-[32px] font-bold">{formattedDate}</h1>
      </div>
    </div>
  );
}

export default SectionOne;
