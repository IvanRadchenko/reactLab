import React, { useState, useEffect } from "react";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: 300,
  width: 200,
  boxSizing: "border-box",
  margin: "0 auto"
};

const MyFancyForm = () => {
  const fruitList = ["orange", "apple", "grape", "pear", "peach"];
  const [multiple, setMultiple] = useState("");
  const [commaSeperated, setCommaSeperated] = useState("");
  const [multiselected, setMultiSelected] = useState([]);

  const handleMultiple = e => {
    const val = e.target.value;
    const allVals = val
      .split(",")
      .map(v => v.trim())
      .filter(Boolean);
    setMultiple(e.target.value);
    setCommaSeperated(allVals.join("\n"));
    setMultiSelected(allVals.filter(v => fruitList.includes(v)));
  };
  // useEffect(() => {}, [multiple, setMultiple]);

  // useEffect(() => {}, [commaSeperated, setCommaSeperated]);
  const handlMultilineChange = e => {
    const val = e.target.value;
    const allVals = val
      .split("\n")
      .map(v => v.trim())
      .filter(Boolean);
    setMultiple(allVals.join(","));
    setCommaSeperated(val);
    setMultiSelected(allVals.filter(v => fruitList.includes(v)));
  };

  // useEffect(() => {}, [multiselected, setMultiSelected]);
  const handleMultiSelectedChange = e => {
    const allVals = Array.from(e.target.selectedOptions).map(o => o.value);
    setMultiSelected(allVals);
    setMultiple(allVals.join(","));
    setCommaSeperated(allVals.join("\n"));
  };

  return (
    <div style={{ ...styles }}>
      <label htmlFor="text">Input List</label>
      <input id="text" value={multiple} onChange={handleMultiple} type="text" />
      <label htmlFor="multitxt">TextArea List</label>
      <textarea
        id="multitxt"
        rows={fruitList.length}
        value={commaSeperated}
        onChange={handlMultilineChange}
      />
      <label htmlFor="multioption">Selec List</label>
      <select
        size={fruitList.length}
        multiple
        id="multioption"
        value={multiselected}
        onBlur={handleMultiSelectedChange}
        onChange={handleMultiSelectedChange}
      >
        {fruitList.map(fruit => (
          <option key={fruit} id={fruit}>
            {fruit}
          </option>
        ))}
      </select>
    </div>
  );
};

const element = () => {
  return (
    <form>
      <MyFancyForm />
    </form>
  );
};

export default element;
