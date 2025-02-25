import React from "react";
import Task from "./Task";
import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
   const {tasks} = useTaskStore();
   
   return (
      <>
         <div className="flex justify-between mb-2">
            <h3 className="text-xl font-serif font-bold">Task List</h3>
            <div>
               {tasks.filter((el) => el.isDone).length}/{tasks.length}
            </div>
         </div>
         <div className="h-[300px] md:h-[310px] xl:h-[320px] overflow-scroll hsb">
            <div className="hidden last:block w-max text-gray-300 mx-auto">There is no list</div>
            {tasks.map((el) => (
               <Task key={el.id} job={el} />
            ))}
         </div>
      </>
   );
};

export default TaskList;
