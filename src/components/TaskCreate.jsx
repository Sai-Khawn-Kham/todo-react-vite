import React, { useState } from "react";
import useTaskStore from "../store/useTaskStore";

const TaskCreate = () => {
   const [job, setJob] = useState("");
   const {addTask} = useTaskStore();

   const handleOnChange = (event) => {
      setJob(event.target.value);
   };

   const handleAddTaskBtn = () => {
      if(job!==""){
         const newTask = {
            id: Date.now(),
            task: job,
            isDone: false,
         };
         addTask(newTask);
         setJob("");
      }
   };

   return (
      <div className="flex">
         <input
            type="text"
            value={job}
            onChange={handleOnChange}
            className="border border-slate-300 rounded-l-md py-1 pl-1 bg-slate-100 focus:outline-none grow"
         />
         <button
            onClick={handleAddTaskBtn}
            className="border border-slate-300 rounded-r-md py-1 px-2 bg-slate-300 focus:outline-none"
         >
            Enter
         </button>
      </div>
   );
};

export default TaskCreate;
