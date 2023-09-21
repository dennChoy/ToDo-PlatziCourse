function ToDoItem(props){
    return (
        <div className={`card m-1 col-3 ${props.completed && "bg-dark"}`}>   
            <div className={`card-body p-2 row ${props.completed && "text-white"}`}>
                <div className="col-6">
                    {props.text} 
                </div>
                <div className="col-6 d-flex flex-row-reverse">
                    <button 
                        className="btn btn-danger btn-sm mr-"
                        onClick={props.onDelete}
                    >X</button>
                    {!props.completed &&
                    <button 
                        className="btn btn-success btn-sm"
                        onClick={props.onComplete}
                    >V</button>
                    }
                </div>
                
            </div>      
        </div>
    );

}
export {ToDoItem};