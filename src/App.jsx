import React from "react";
import Heading from "./components/Heading";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const App = () => {
   return (
      <div className="relative overflow-hidden p-3 md:p-10 lg:p-5 min-h-screen">
         <div className="absolute blur-3xl w-[400px] h-[400px] md:w-[900px] md:h-[900px] bg-rose-500 top-0 md:-top-96 md:-left-72 lg:-top-10 lg:left-52"></div>
         <div className="absolute blur-3xl w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-yellow-500 bottom-0 md:-bottom-72 -left-10 md:-left-96"></div>
         <div className="absolute blur-3xl w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-cyan-500 bottom-0 md:top-32 -right-52 md:-right-96"></div>
         <div className="lg:w-[700px] lg:mx-auto relative bg-slate-50/20 shadow-lg shadow-slate-950/50 border border-slate-300/50 rounded-lg overflow-hidden">
            <div className="absolute rounded-lg shadow-2xl border border-slate-300/50 border-r-slate-300/20 border-b-slate-300/20 bg-slate-50/20 animate-y top-0 left-0 md:-top-10 md:-left-10 w-24 h-24"></div>
            <div className="absolute rounded-lg shadow-2xl border border-slate-300/50 border-r-slate-300/20 border-b-slate-300/20 bg-slate-50/20 animate-y animate-delay-1000 top-0 right-0 md:right-10 w-24 h-24"></div>
            <div className="absolute rounded-lg shadow-2xl border border-slate-300/50 border-r-slate-300/20 border-b-slate-300/20 bg-slate-50/20 animate-y animate-delay-2000 top-5 left-44 md:top-32 w-10 h-10"></div>
            <div className="absolute rounded-lg shadow-2xl border border-slate-300/50 border-r-slate-300/20 border-b-slate-300/20 bg-slate-50/20 animate-y animate-delay-3000 bottom-44 right-24 w-10 h-10 md:w-24 md:h-24"></div>
            <div className="absolute rounded-lg shadow-2xl border border-slate-300/50 border-r-slate-300/20 border-b-slate-300/20 bg-slate-50/20 animate-y animate-delay-4000 bottom-36 md:bottom-10 left-20 w-10 h-10 md:w-24 md:h-24"></div>
            <div className="relative flex flex-col gap-3 w-full h-full p-3">
               <Link to={"https://khawn-portfolio.netlify.app"} className="w-max">
                  <BiLeftArrowAlt className="size-6" />
               </Link>
               <Heading />
               <TaskCreate />
               <TaskList />
            </div>
         </div>
      </div>
   );
};

export default App;
