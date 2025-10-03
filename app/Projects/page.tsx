import Link from "next/link";
import React from "react";
import styles from "./todoItems.module.css"; /* spelling matters, make sure the file is named correctly module, not moduleS */

/* defining the structure of the data we expect to receive from the API 
Allowing us to get intellisense and avoid :any typing which breaks typescript type checking.*/
interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const ProjectsPage = async () => {
  const todoList = await fetch('https://jsonplaceholder.typicode.com/todos'/*dummy data provided by jsonplaceholder.com */, 
    { cache: 'no-store' });/* tells the server to not cache this request, and fetch it fresh each time. useful on a live issue tracer like this is representing
    but less useful on a static blog where data doesn't change often.
    alternate examples specific to nextJS would be something like 
    {next: {revalidate: 10}} 
    to have the system update to new data every 10 seconds*/
  const items: TodoItem[] = await todoList.json(); //type assertion to tell TypeScript what type of data to expect, allowing us to get intellisense
  return <div>
    <h1>Personal Projects</h1><br/>
    <Link href="/">Home</Link><br/><br/>
    <>
        <h2>Example Todo List from external Json last refreshed at: {new Date().toLocaleTimeString() /*shows the time the page was rendered, to demonstrate caching behavior
        caching is disabled on this page due to the fetch function not being cached at all. if we had the cache 
        revalidate every 10 second, then the date/time would only update in those timeframes presumably?*/}</h2>
        
        <ul className={styles.todoList} /* refferances the stylesheet and the padding and border
            as it is placed here, it will be applied to the whole list. as a background to our board. doing it this way contrasts tailwind, demonstrated below.*/>
            {items.map(item => (<li className="p-0.5 bg-sky-900 text-white border-2 border-fuchsia-700 hover:bg-sky-600" /* this uses the tailwind builtin CSS styler, 
            allowing us to define style behavior outside of a dedicated stylesheet! can be argued to break seperation of concerns.*/ key ={item.id}>{item.title}</li>))} 
        </ul>
    </>
    </div>
}

export default ProjectsPage;