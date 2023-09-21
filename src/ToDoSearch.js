import React from "react";

function ToDoSearch({searchValue, setSearchValue}){
    return(
        <div className="m-5">
            <input onChange={(event) => {
                        setSearchValue(event.target.value);
                    }} 
                    value={searchValue} 
                    className="form-control" 
                    placeholder="Buscar To Do"
            />
        </div>
    );
}

export {ToDoSearch};