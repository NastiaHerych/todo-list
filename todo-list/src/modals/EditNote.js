import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditNote = ({ modal, toggle, update, taskObj }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTitle(taskObj.Title);
    setDescription(taskObj.Description);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Title"] = title;
    tempObj["Description"] = description;
    tempObj["Time"] = new Date().toLocaleString();
    console.log(taskObj);
    update(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Note</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={handleChange}
              name="title"
            />
          </div>
          <div className="form-group mt-2">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="dark" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="danger" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditNote;
