import React, { useState } from "react";
import EditNote from "../modals/EditNote";

const Card = ({ taskObj, index, deleteTask, updateNoteArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const update = (obj) => {
    updateNoteArray(obj, index);
  };

  return (
    <div className="card_content">
      <div className="card_content--checkbox">
        <input
          className="checkbox"
          name="checkbox-done"
          type="checkbox"
        ></input>
      </div>
      <div className="card_content--head">
        <h2 className="card_content--title">{taskObj.Title}</h2>
      </div>
      <p className="card_content--description">{taskObj.Description}</p>
      <div className="card_content--time">
        <p className="card_content--time-text">{taskObj.Time}</p>
      </div>
      <div className="card_content--buttons">
        <i className="far fa-edit" onClick={() => setModal(true)}></i>
        <i className="fas fa-trash-alt" onClick={handleDelete}></i>
      </div>
      <EditNote
        modal={modal}
        toggle={toggle}
        update={update}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
