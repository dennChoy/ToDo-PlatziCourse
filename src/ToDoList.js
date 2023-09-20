
function ToDoList({children}){
    return(
        <div class="row d-flex justify-content-around" id="general-card">
            {children}
        </div>
    );
}

export {ToDoList}