import React, { useState, useEffect } from "react";
import CreateNote from "../modals/CreateNote";
import Card from "./Card";

const MainPage = () => {
  const [modal, setModal] = useState(false);
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("noteList");
    if (arr) {
      let obj = JSON.parse(arr);
      setNoteList(obj);
    }
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const saveNote = (taskObj) => {
    let tempList = noteList;
    tempList.push(taskObj);
    localStorage.setItem("noteList", JSON.stringify(tempList));
    setModal(false);
    setNoteList(noteList);
  };

  const deleteTask = (index) => {
    let tempList = noteList;
    tempList.splice(index, 1);
    localStorage.setItem("noteList", JSON.stringify(tempList));
    setNoteList(tempList);
    window.location.reload();
  };

  const updateNoteArray = (obj, index) => {
    let tempList = noteList;
    tempList[index] = obj;
    localStorage.setItem("noteList", JSON.stringify(tempList));
    setNoteList(tempList);
    window.location.reload();
  };

  const updateNoteDone = (obj, index) => {
    let tempList = noteList;
    tempList[index] = obj;
    localStorage.setItem("noteList", JSON.stringify(tempList));
    setNoteList(tempList);
    window.location.reload();
  };

  return (
    <body>
      <div className="content">
        <h1 className="content--title">Todo List</h1>
        <button
          className="button main"
          onClick={() => {
            setModal(true);
          }}
        >
          Create Note
        </button>
        <CreateNote toggle={toggle} modal={modal} save={saveNote}></CreateNote>
        <div className="cards">
          {noteList.map((obj, index) => (
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateNoteArray={updateNoteArray}
              updateNoteDone={updateNoteDone}
            />
          ))}
        </div>
      </div>
    </body>
  );
};

export default MainPage;
