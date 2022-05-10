import React, {useState} from "react";

export default function CreatePost({ dispatch}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function handleTitle (evt) {setTitle(evt.target.value)}
    function handleDesc (evt) {setDesc(evt.target.value)}
    function handleCreate(evt){
        //const newTodo = {title, desc,dateCreated: Date(Date.now()), dateCompleted: null,complete: false};
        dispatch({type:'CREATE_TODO', title, desc, dateCreated: Date(Date.now()), dateCompleted: null, complete: false});
    }

    return (
        <>
        <h1>Create a new To-Do</h1>
        <form onSubmit={(e) => {e.preventDefault(); handleCreate(e)}}>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
                <br></br>
                <label htmlFor="create-desc">Description:</label>
                <input type="text" value={desc} onChange={handleDesc} name="create-desc" id="create-desc"/>
                <input type="submit" value="Create" disabled={title.length === 0}/>
            </div>
        </form>
        </>
    );
}