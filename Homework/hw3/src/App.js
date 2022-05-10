import React, {useReducer} from "react";
import TodoList from "./TodoList";
import UserBar from "./UserBar";
import CreatePost from "./CreatePost";
import appReducer from "./reducers";


function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] });
  
  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch}/>
      {state.user && <CreatePost dispatch={dispatch} />}
      {state.user && <TodoList todos={state.todos} dispatch={dispatch} />}
    </div>
    
  )

}
  
export default App;