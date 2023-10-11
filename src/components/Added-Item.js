import React, { useState } from "react";

function ChecklistItem({ text, defaultChecked, onToggle, onDelete, isComplete }) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
    onToggle(text, !isChecked);
  };

  const handleDeleteClick = () => {
    onDelete(text);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxToggle} />
        <p className={`text-[#575767] text-[18px] ${!isComplete}`}>{text}</p>
      </div>
      {isComplete && (
        <button className="text-red-500 mr-2" onClick={handleDeleteClick}>
          Delete
        </button>
      )}
    </div>
  );
}

function CompleteItems() {
  const [incompleteItems, setIncompleteItems] = useState([
    "Upload 1099-R to TurboTax",
    "Submit 2019 tax return",
    "Print parking passes",
    "Sign contract, send back",
    "Hand sanitizer",
  ]);
  const [completeItems, setCompleteItems] = useState([
    "Check on FedEx Order",
    "Look at new plugins",
    "Respond to catering company",
    "Reschedule morning coffee",
    "Check the latest on Community",
  ]);

  const [newItem, setNewItem] = useState("");

  const handleItemToggle = (text, isChecked) => {
    if (isChecked) {
      setCompleteItems((prevItems) => [...prevItems, text]);
      setIncompleteItems((prevItems) => prevItems.filter((item) => item !== text));
    } else {
      setIncompleteItems((prevItems) => [...prevItems, text]);
      setCompleteItems((prevItems) => prevItems.filter((item) => item !== text));
    }
  };

  const handleDeleteItem = (text) => {
    setCompleteItems((prevItems) => prevItems.filter((item) => item !== text));
  };

  const handleAddItem = () => {
    if (newItem) {
      setIncompleteItems((prevItems) => [...prevItems, newItem]);
      setNewItem("");
    }
  };

  const inputStyle = {
    border: "1px solid grey",
    minWidth: "310px",
    minHeight: "65px",
    borderRadius: "10px",
    paddingLeft: "10px",
  };

  return (
    <div>
      <div className="flex items-center gap-1">
        <input
          type="text"
          style={inputStyle}
          placeholder="Add an item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="bg-blue-500 h-10 w-10 text-white hover:bg-blue-800 rounded-lg" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <div className="mt-8">
        <div className="flex flex-col">
          <h4 className="text-[#575767] text-[18px] font-bold">Incomplete</h4>
          <div className="flex flex-col gap-3 mt-4">
            {incompleteItems.map((item, index) => (
              <ChecklistItem
                key={index}
                text={item}
                defaultChecked={false}
                onToggle={handleItemToggle}
                onDelete={handleDeleteItem}
                isComplete={false}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h4 className="text-[#575767] text-[18px] font-bold">Complete</h4>
          <div className="flex flex-col gap-3 mt-4">
            {completeItems.map((item, index) => (
              <ChecklistItem
                key={index}
                text={item}
                defaultChecked={true}
                onToggle={handleItemToggle}
                onDelete={handleDeleteItem}
                isComplete={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteItems;
