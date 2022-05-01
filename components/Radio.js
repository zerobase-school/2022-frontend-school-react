import React, { useState, useEffect } from "react";
import { useRadioGroup } from "./RadioGroup";

export default function Radio({ id, name, value, label }) {
  const { updateGroupStates, ...group } = useRadioGroup();

  const [state, setState] = useState({
    id,
    name,
    value,
    selected: false,
  });

  useEffect(() => {
    if (state.selected) updateGroupStates(state);
  }, [state.selected]);

  useEffect(() => {
    setState({ ...state, selected: id === group.selectedId });
  }, [group.selectedId]);

  const handleChange = () => {
    setState({ ...state, selected: true });
  };

  return (
    <label htmlFor={id}>
      <input type="radio" name={name} value={value} onChange={handleChange} />
      {label}
    </label>
  );
}
