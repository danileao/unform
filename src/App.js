import React from "react";
import { Form } from "@unform/web";

import { Checkbox } from "./components/Form/index";

function App() {
  const options = [
    { id: "node", value: "node", label: "Node" },
    { id: "react", value: "react", label: "ReactJS" }
  ];

  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Checkbox Cursos</h1>
      <Form onSubmit={handleSubmit} initialData={{ course: ["node"] }}>
        <div>
          <Checkbox name="course" options={options} />
        </div>

        <button type="submit">Enviar </button>
      </Form>
    </div>
  );
}

export default App;
