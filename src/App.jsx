import React from "react";
import Heading from "./components/Heading";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

const App = () => {
   const styles = {
      container: {
         background: "rgba(255,255,255,0.1)",
         boxShadow: "0 25px 45px rgba(0,0,0,0.1)",
         border: "1px solid rgba(255,255,255,0.5)",
         borderRight: "1px solid rgba(255,255,255,0.2)",
         borderBottom: "1px solid rgba(255,255,255,0.2)",
      }
   };
   return (
      <div className="px-5 py-5 md:py-10">
         <div className="absolute blur-[100px] w-[400px] h-[400px] md:w-[800px] md:h-[800px] -top-10 md:-top-96 xl:left-36 bg-rose-500"></div>
         <div className="absolute blur-[100px] w-[200px] h-[400px] md:w-[500px] md:h-[500px] bottom-10 md:bottom-72 xl:bottom-0 left-0 xl:left-24 bg-yellow-500"></div>
         <div className="absolute blur-[100px] w-[200px] h-[400px] md:w-[550px] md:h-[550px] -bottom-10 right-0 xl:right-56 bg-cyan-500"></div>
         <div className="relative">
            <div className="squareA squareAA absolute backdrop:blur-sm rounded-lg -top-12 -right-5 xl:right-72 w-24 h-24"></div>
            <div className="squareA squareAB absolute backdrop:blur-sm rounded-lg top-36 -left-10 xl:left-56 w-28 h-28 z-10"></div>
            <div className="squareA squareAC absolute backdrop:blur-sm rounded-lg bottom-12 xl:bottom-60 -right-10 xl:right-44 w-20 h-20 z-10"></div>
            <div className="squareA squareAD absolute backdrop:blur-sm rounded-lg bottom-10 xl:bottom-24 left-24 xl:left-96 w-12 h-12"></div>
            <div className="squareA squareAE absolute backdrop:blur-sm rounded-lg -top-20 xl:top-10 left-36 xl:left-[550px] w-14 h-14"></div>
            <div
               style={styles.container}
               className="container md:w-[500px] mx-auto relative rounded-xl flex justify-center items-center backdrop:blur-sm"
            >
               <div className="relative w-full h-full p-5 md:p-10">
                  <Heading />
                  <TaskCreate />
                  <TaskList />
               </div>
            </div>
         </div>
      </div>
   );
};

export default App;
