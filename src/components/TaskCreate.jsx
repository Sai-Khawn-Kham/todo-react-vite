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
      <div className="flex mb-5">
         <input
            type="text"
            value={job}
            onChange={handleOnChange}
            className="flex-grow border-2 border-slate-300 rounded-l-lg p-1"
         />
         <button
            onClick={handleAddTaskBtn}
            className="border-2 border-slate-300 rounded-r-lg py-1 px-2 bg-slate-300"
         >
            Add Task
         </button>
      </div>
   );
};

export default TaskCreate;
