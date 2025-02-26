import React from "react";
import Heading from "./components/Heading";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

const App = () => {
   return (
      <div className="relative overflow-x-hidden min-h-screen hsb p-5 md:p-10">
         <div className="relative md:max-w-[768px] bg-customOne shadow-customOne border border-customOne mx-auto rounded-xl">
            <div className="absolute blur-3xl w-96 h-96 top-0 left-10 bg-rose-500"></div>
            <div className="absolute blur-3xl w-96 h-96 -bottom-52 -left-52 bg-yellow-500"></div>
            <div className="absolute blur-3xl w-96 h-96 -bottom-52 -right-52 bg-cyan-500"></div>
            <div className="absolute rounded-lg shadow-2xl border border-customOne border-r-customOne border-b-customOne bg-customOne animate-upDown animate-delay-4000 -top-10 -left-2 w-24 h-24"></div>
            <div className="absolute rounded-lg shadow-2xl border border-customOne border-r-customOne border-b-customOne bg-customOne animate-upDown animate-delay-2000 -top-5 -right-12 w-24 h-24"></div>
            <div className="absolute rounded-lg shadow-2xl border border-customOne border-r-customOne border-b-customOne bg-customOne animate-upDown top-5 left-64 w-10 h-10"></div>
            <div className="absolute rounded-lg shadow-2xl border border-customOne border-r-customOne border-b-customOne bg-customOne animate-upDown animate-delay-3000 bottom-32 right-24 w-24 h-24"></div>
            <div className="absolute rounded-lg shadow-2xl border border-customOne border-r-customOne border-b-customOne bg-customOne animate-upDown animate-delay-1000 bottom-10 left-24 w-24 h-24"></div>
            <div className="relative w-full h-full p-5 md:p-10">
               <Heading />
               <TaskCreate />
               <TaskList />
            </div>
         </div>
      </div>
   );
};

export default App;
