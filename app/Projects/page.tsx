import Link from "next/link";
import React from "react";

interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const ProjectsPage = async () => {
  const todoList = await fetch('https://jsonplaceholder.typicode.com/todos');
  const items: TodoItem[] = await todoList.json();
  return <div>
    <h1>Personal Projects</h1><br/>
    <Link href="/">Home</Link><br/><br/>
    <>
        <h2>Example Todo List from external Json</h2><br/>
        <ul>
            {items.map(item  => (<li key ={item.id}>{item.title}</li>))} 
        </ul>
    </>
    </div>
}

export default ProjectsPage;