import React from "react";

export default function NewTask({newTask, handleOnChange, handleOnSubmit}) {

  return(
    <form onSubmit={handleOnSubmit}>
      <input name="title" placeholder="New Task" value={newTask.title || ""} onChange={handleOnChange}/>
      {!newTask.title ? null : (
        <>
        <textarea name="description" placeholder="Details..." value={newTask.description || ""} onChange={handleOnChange}/>
        <button type="submit">Add Task</button>
        </>
      )}
    </form>
  );
}