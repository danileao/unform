import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Checkbox({ name, options, ...rest }) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    console.log("default", defaultValue);
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      path: "value",
      getValue: refs => {
        const results = refs.filter(rf => rf.checked).map(r => r.value);
        return results;
      }
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <div>
      {options.map((opt, index) => (
        <div key={opt.id}>
          <input
            defaultChecked={defaultValue.find(d => d === opt.id)}
            ref={curr => (inputRefs.current[index] = curr)}
            value={opt.value}
            {...rest}
            type="checkbox"
          />
          <label>{opt.label}</label>
        </div>
      ))}
    </div>
  );
}
