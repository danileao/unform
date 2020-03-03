import React from "react";
import { Form } from "@unform/web";

import { Checkbox, Select } from "./components/Form/index";

function App() {
  const options = [
    { id: "node", value: "node", label: "Node" },
    { id: "react", value: "react", label: "ReactJS" }
  ];

  const optionsSelect = [
    { id: "node", value: "node", label: "Node" },
    { id: "react", value: "react", label: "ReactJS" }
  ];

  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Checkbox Cursos</h1>
      <Form
        onSubmit={handleSubmit}
        initialData={{ course: ["node"], selectExample: optionsSelect[0] }}
      >
        <div>
          <h1>Checkbox</h1>
          <Checkbox name="course" options={options} />
        </div>

        <div>
          <h1>Select</h1>
          <Select name="selectExample" options={optionsSelect} />
        </div>

        <button type="submit">Enviar </button>
      </Form>
    </div>
  );
}

export default App;
