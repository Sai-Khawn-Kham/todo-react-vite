import React from "react";
import Task from "./Task";
import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
   const {tasks} = useTaskStore();
   
   return (
      <div>
         <div className="flex justify-between mb-2">
            <h3 className="text-xl font-serif font-bold">Task List</h3>
            <div>
               {tasks.filter((el) => el.isDone).length}/{tasks.length}
            </div>
         </div>
         <div className="h-[620px] md:h-[910px] xl:h-[520px] overflow-scroll hsb">
            {tasks.map((el) => (
               <Task key={el.id} job={el} />
            ))}
         </div>
      </div>
   );
};

export default TaskList;
