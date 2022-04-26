import React from "react";
import Todo from "./Todo";

export default function TodoList({ posts = [] }) {
  return (
    <div>
      {posts.map((p, i) => (
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
        <Todo {...p} key={"post-" + i} />
      ))}
    </div>
  );
}