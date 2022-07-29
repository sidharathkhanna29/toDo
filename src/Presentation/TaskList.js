import React from "react";

export default function TaskList({ allTask, handleOnDelete}) {

  return(
    <div>
      <ul>
        {allTask.map(({title, description, id}) => (
          <li key={id}>
            <div>
              <h2>{title}</h2>
              <button onClick={() => handleOnDelete(id)}>Delete Task</button>
            </div>
            {!description ? <p></p> : <p>{description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
