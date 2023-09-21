import React from "react";
import Button from "react-bootstrap/Button";
import Modal  from "react-bootstrap/Modal";

function ModalTodo({show, handleClose, closeButton}){

    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="form-control" placeholder="Agrega un nuevo To Do..."/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export {ModalTodo}