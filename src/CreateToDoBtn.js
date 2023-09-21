function CreateToDoBtn({handleShow}){
    return(
        <button className="btn btn-primary" onClick={handleShow}> Add To Do </button>
    );
}

export { CreateToDoBtn}