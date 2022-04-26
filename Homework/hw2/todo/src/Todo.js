import React, {useState} from "react";

export default function Todo({ title, content, author }) {

  const date = new Date().toLocaleDateString()
  
  const createdDate = date
  const completeDate = date
  
  const [ checked, setChecked ] = useState(false)
  function handleOnChange(evt) {
      setChecked(evt.target.checked)
      
  }

  return (
      <div>
          <h3>{title}</h3>
          <div>{content}</div>
          <div>{`Date Created: ` + createdDate}</div>
          <br />
          <label htmlFor="complete">Complete Task:</label>
          <input type="checkbox" name="complete" value={checked} onChange={handleOnChange}/>
          <div><i>Date Completed: </i> {checked === true ? completeDate : ""}</div>
          <i>
        Task For: <b>{author}</b>
          </i>
      </div>
  )
}