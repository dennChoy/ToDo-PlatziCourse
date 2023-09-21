
function ToDoList({children}){
    return(
        <div className="row d-flex justify-content-around" id="general-card">
            {children}
        </div>
    );
}

export {ToDoList}