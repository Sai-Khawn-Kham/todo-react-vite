import React from "react";
import Task from "./Task";
import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
   const {tasks} = useTaskStore();
   
   return (
      <>
         <div className="flex justify-between">
            <h3 className="text-lg font-serif font-semibold">Task List</h3>
            <div>
               {tasks.filter((el) => el.isDone).length}/{tasks.length}
            </div>
         </div>
         <div className="flex flex-col  gap-2 h-[450px] md:h-[630px] lg:h-[360px] overflow-auto hsb">
            <div className="hidden last:block w-max text-gray-300 mx-auto">There is no list</div>
            {tasks.map((el) => (
               <Task key={el.id} job={el} />
            ))}
         </div>
      </>
   );
};

export default TaskList;
