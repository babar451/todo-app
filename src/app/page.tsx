"use client"

import { useState } from "react"

export default function Home() {

  // deaclaring states
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  function addTasks() {
    if (task !== "") {
      setTasks([...tasks, task])
      setTask("");
    }
  }

  const deleteTasks = (index: any) => {
    const updatedList = [...tasks];
    updatedList.splice(index, 1);
    setTasks(updatedList);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold italic tracking-wide text-slate-500 text-4xl m-8">Todo App</h1>
      <div>
        <input
          className="bg-slate-200 p-3 m-3 rounded-md"
          placeholder="Create a New Todo"
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
          }}
          /* Adding "Enter" command code */
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTasks();
            }
          }}
        />




        <button onClick={addTasks} className="bg-green-500 text-white p-3 m-3 rounded-md hover:bg-green-600">
          Add Task
        </button>
      </div>

      <div>
        {
          tasks?.length > 0 ? (
            <ul>
              {
                tasks.map((task, index) => (
                  <div className="flex bg-slate-100 m-4 pl-12 py-4 pr-4 rounded-md" key={index}>
                    <li className="self-center font-semibold pr-10 mr-6 grow">
                      {task}
                    </li>

                    <div className="bg-gray-400 w-px h-6 self-center mx-4"></div>

                    <button onClick={() => { deleteTasks(index) }} className="bg-yellow-500 text-white p-2 mx-1 rounded-md hover:bg-yellow-600">
                      Delete
                    </button>
                  </div>
                ))
              }
            </ul>
          ) : (
            <div>
              <p>No Tasks Found</p>
            </div>
          )
        }
      </div>

    </div>
  )
}