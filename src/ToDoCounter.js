function ToDoCounter({total, completed}){
    return(
        <h1>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOS's
        </h1>
    );
}

export {ToDoCounter};