/*this button is rendered on the client side, so it can handle clicks and update state,
it is held seperate so that only it and any children of it are sent to the client for rendering, we want as 
much of the site to be rendered serverside as possible. once use client is called that object and any
child objects will be rendered on the client side.*/
'use client'
import React from "react";
const ClickCountButton = () => {
  return <div>
    <button className = 'btn btn-primary'/*this uses Daisy UI's predefined tailwind css styles.*/
      onClick={() => alert("You clicked the button! this should increase the count but i dont know how to rep that yet!!\n\nONLY THE BUTTON AND THIS ALERT IS RENDERED CLIENT SIDE")}> Click Me!</button>
    </div>
}

export default ClickCountButton;