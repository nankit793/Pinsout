import React from "react";
import ButtonPrimary from "../inputs/ButtonPrimary";
function Explore() {
  return (
    <>
      <div className="flex items-center justify-between w-full my-40">
        <div>
          <p className="text-3xl font-bold text-white">
            Get Valuable <br /> Industry Experience
          </p>
          <p>
            work on industry projects gain employibility <br /> and explore
            internshis and jobs
          </p>
          <div className="flex">
            <ButtonPrimary
              classes="bg-white text-primary my-3 rounded"
              text="Explore"
            />
          </div>
        </div>
        <div className="px-5">
          <p className="text-3xl font-bold text-white">Illustrated image</p>
        </div>
      </div>
    </>
  );
}

export default Explore;
