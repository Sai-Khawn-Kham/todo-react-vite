import React from "react";
import Swal from "sweetalert2";
import useTaskStore from "../store/useTaskStore";

const Task = ({ job: { id, isDone, task } }) => {
   const {removeTask, doneTask} = useTaskStore();

   const handleDeleteBtn = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            removeTask(id);
         }
      });
   };

   const handleOnChange = () => {
      doneTask(id);
   };

   return (
      <div className="flex justify-between items-center border border-slate-300 px-2 py-1 rounded-lg">
         <div className="flex items-center gap-2">
            <input
               type="checkbox"
               checked={isDone}
               onChange={handleOnChange}
               className="size-5"
            />
            <p className={isDone?"line-through opacity-70":""}>{task}</p>
         </div>
         <button
            onClick={handleDeleteBtn}
            className="bg-red-100 text-red-500 text-sm px-2 py-1 rounded-lg"
         >
            Delete
         </button>
      </div>
   );
};

export default Task;
