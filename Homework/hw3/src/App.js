import React, {useReducer, useEffect, createContext} from "react";
import { useResource } from 'react-request-hook'
import TodoList from "./TodoList";
import Header from "./Header";
import UserBar from "./UserBar";
import CreatePost from "./CreatePost";
import appReducer from "./reducers";
import StateContext from "./Context";


function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] });

  const [ posts, getPosts ] = useResource(() => ({
    url: '/todos',
    method: 'get'
    }))

    useEffect(getPosts, [])

    useEffect(() => {
      if (posts && posts.data) {
        dispatch({ type: 'FETCH_POSTS', todos: posts.data })
      }
      }, [posts])
  
  // useEffect(() => {
  //   fetch('/api/posts')
  //     .then(result => result.json())
  //     .then(posts => dispatch({ type: 'FETCH_POSTS', posts }))
  //   }, [])

    // useEffect(() => {
    //   fetch('/api/todos')
    //     .then(result => result.json())
    //     .then(todos => dispatch({ type: 'FETCH_POSTS', todos }))
    //   }, [])

  useEffect(() => {
    if (state.user) {
    document.title = `${state.user}’s Blog`
    } else {
    document.title = 'Blog'
    }
    }, [state.user]
  )
  return (
    <div>
      <ThemeContext.Provider value = {{primary: 'red'}}>
        <Header text="My Blog" />
      </ThemeContext.Provider>
      <UserBar user={state.user} dispatch={dispatch}/>
      {state.user && <CreatePost dispatch={dispatch} />}
      {state.user && <TodoList todos={state.todos} dispatch={dispatch} />}
    </div>

    // <div>

    // <StateContext.Provider value={{state, dispatch}}>
    //   <UserBar></UserBar>
    //   <CreatePost></CreatePost>
    //   <TodoList></TodoList>

    // </StateContext.Provider>


    // </div>

    
    
  )

}
export const ThemeContext = createContext({primary:'blue'});
  
export default App;