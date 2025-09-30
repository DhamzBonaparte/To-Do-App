import { useState } from "react";
import { values } from "../tasks";
import List from "../TodoList/List";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./Add.scss";

export default function Add() {
  const [task, setTask] = useState(values);
  const [now, setNow] = useState("");

  function handleChange(e) {
    setNow(e.target.value);
  }

  function handleAdd() {
    setTask((a) => [
      ...a,
      {
        id: a.length > 0 ? a[a.length - 1].id + 1 : a,
        value: now,
        edit: false,
      },
    ]);
    setNow("");
  }

  return (
    <>
      <div className="top">
        <h1 className="title">To-Do List</h1>
      </div>
      <div className="enter">
        <input
          className="task"
          type="text"
          placeholder="Your task..."
          value={now}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleAdd}><AddCircleOutlineIcon className="Add"/></button>
      </div>

      <List arr={task} setArr={setTask} />
    </>
  );
}
