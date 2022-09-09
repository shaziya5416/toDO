import React from 'react';
import { useState } from 'react';

const ToDo = () => {
  const [data, setData] = useState('');
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!data) {
    } else {
      setItems([...items, data]);
      setData('');
    }
  };
  const deleteItem=(id)=>{
    const updatedItem=items.filter((elm,ind)=>{
      return ind!==id;
    })
    setItems(updatedItem);
  }

  const removeAll=()=>{
    setItems([]);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1>Enter your list here!</h1>
          <input
            type="text"
            name="todo"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button onClick={addItem}>Add</button>
          <div className="showItem">
            {items.map((elm, ind) => {
              return (
                <>
                  <h3>{elm}</h3>
                  <button onClick={()=>{deleteItem(ind)}}>REmove elements</button>
                </>
              );
            })}
          </div>
          <button onClick={removeAll}>Remove All</button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
