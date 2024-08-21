import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Todo.css"

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrenttask] = useState("");
  const [popupshow, setPopupshow] = useState(false);
  const [editTask, setEdittask] = useState("");
  const [editIndex, setEditindex] = useState(0);

  useEffect(() => {
    const storedItem = localStorage.getItem("lists");
    if (storedItem) {
      setTasks(JSON.parse(storedItem));
    }
  }, []);

  const addTask = () => {
    if (currentTask.trim() !== "") {
      const newTask = { text: currentTask, completed: false };
      const updatedTask = [...tasks, newTask];
      setTasks(updatedTask);
      localStorage.setItem("lists", JSON.stringify(updatedTask));
      setCurrenttask("");
    }
  };

  const removeTask = (i) => {
    const removedTasks = tasks.filter((_, index) => index !== i);
    setTasks(removedTasks);
    localStorage.setItem("lists", JSON.stringify(removedTasks));
  };

  const showThepopup = (i, item) => {
    setPopupshow(true);
    setEditindex(i);
    setEdittask(item.text);
  };

  const saveEdit = () => {
    const newEdit = tasks.map((item, index) => (
      index === editIndex ? { ...item, text: editTask } : item
    ));
    setTasks(newEdit);
    localStorage.setItem("lists", JSON.stringify(newEdit));
    setPopupshow(false);
  };

  const completeTask = (i) => {
    const updatedTasks = tasks.map((item, index) => (
      index === i ? { ...item, completed: !item.completed } : item
    ));
    setTasks(updatedTasks);
    localStorage.setItem("lists", JSON.stringify(updatedTasks));
  };

  return (
    <div className="todoappBody">
      <h1>Todo App</h1>
      <div className="inputOptions">
        <input
          type="text"
          className="mainInput"
          value={currentTask}
          onChange={(e) => setCurrenttask(e.target.value)}
        />
        <button className="taskAdd-Button" onClick={addTask}>Add</button>
      </div>
      <div className="tasklist">
        <ul>
          {tasks.map((item, index) => (
            <li key={index} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
              {item.text}
              <span className="icons">
                <input
                  className="checkedIcon"
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => completeTask(index)}
                />
                <MdDelete className="deleteIcon" onClick={() => removeTask(index)} />
                <FaEdit className="editIcon" onClick={() => showThepopup(index, item)} />
              </span>
            </li>
          ))}
        </ul>
      </div>
      {popupshow && (
        <span className="Popupcontent">
          <input
            className="editPopupinput"
            value={editTask}
            type="text"
            onChange={(e) => setEdittask(e.target.value)}
          />
          <button className="saveButton" onClick={saveEdit}>Update</button>
        </span>
      )}
    </div>
  );
}

export default Todo;
