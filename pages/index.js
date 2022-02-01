import styles from "../styles/Home.module.css";
import { init } from "../Components/utils/initDroneLayer";
import React, { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="bg-tranparent ">
      <div clasName="Hero bg-transparent">
        <div className="p-5 bg-transparent">
          <h1 className="py-4 mb-1 text-primary text-3xl font-semibold">
            ThreeJS
          </h1>
          <p className="text-xl mb-2  w-5/12 leading-7 h-auto text-gray-200">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for.
          </p>
          <p className=" ">
            <button className="bg-secondary text-white py-1 px-5 rounded-md text-xl mt-1 border-0 mr-2 uppercase font-medium hover:bg-primary transition-all ">
              Lorem
            </button>
            <button className="bg-secondary text-white py-1 px-5 rounded-md text-xl mt-1 border-0 uppercase font-medium hover:bg-primary transition-all ">
              Ipsum
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
