import { useState } from "react";

function AddTodo({ newhandleAdd }) {
  const [newItem, setNewItem] = useState("");
  const [newDate, setNewDate] = useState("");
  const onhandleItem = (event) => {
    let Item = event.target.value;
    setNewItem(Item);
  };
  const onhandleDate = (event) => {
    let Date = event.target.value;
    setNewDate(Date);
  };
  const onhandleAdd = () => {
    newhandleAdd(newItem, newDate);
    setNewItem("");
    setNewDate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={newItem}
            placeholder="Enter Todo Here"
            onChange={onhandleItem}
          />
        </div>
        <div className="col-4">
          <input type="date" value={newDate} onChange={onhandleDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={onhandleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
