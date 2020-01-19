import React, { useState } from "react";

import { Button, Form, Input } from "antd";

export default function AddTodos(props: {
  elms: string[];
  setElms: (tar: string[]) => void;
}) {
  const [value, setValue] = useState("");

  function handleTodos() {
    const newTodos = Object.assign([], props.elms);
    newTodos.push(value);
    setValue("");
    props.setElms(newTodos);
  }

  return (
    <div>
      <Form.Item label="content">
        <Input
          type="text"
          value={value}
          onChange={e => {
            console.log(e);
            setValue(e.target.value);
          }}
        />
      </Form.Item>
      <Button onClick={() => handleTodos()}>追加</Button>
    </div>
  );
}
