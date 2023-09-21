function ToDoCounter({total, completed}){
    return(
        <h1>
            {completed === total && "No hay mas todos"}
            {completed < total }
            Has completado <span>{completed}</span> de <span>{total}</span> TODOS's
        </h1>
    );
}

export {ToDoCounter};