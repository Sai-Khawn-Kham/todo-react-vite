import React from "react";
import Heading from "./components/Heading";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

const App = () => {
   return (
      <div className="p-5">
         <Heading />
         <TaskCreate />
         <TaskList />
      </div>
   );
};

export default App;
