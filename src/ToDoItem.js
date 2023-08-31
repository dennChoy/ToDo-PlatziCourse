function ToDoItem(props){
    return (
        <div className="card m-3">   
            <div className="card-body p-2">
                {props.text} 
                <button className="btn btn-danger btn-sm">X</button>
            </div>      
        </div>
    );

}
export {ToDoItem};