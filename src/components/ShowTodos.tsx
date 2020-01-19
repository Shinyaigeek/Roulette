import React from "react";

export default function ShowTodos(props: { elms: string[] }) {
  console.log(props);
  return (
    <div>
      {props.elms.map((elm, index) => {
        return (
          <div>
            {index}:{elm}
          </div>
        );
      })}
    </div>
  );
}
