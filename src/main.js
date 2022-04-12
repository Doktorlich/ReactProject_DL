import react from "react";
import React from "react";
import reactDom from "react-dom";


reactDom.render(
    <div className="some">
    <h2>Hello world</h2>
    <hr/>
    
    <div>text</div>,
    <UserCard name="Dmitry" text="hi there"/>
    <UserCard name="Igor" text="hi"/>
    <UserCard name="Vuasy" text="hello"/>
    
</div>, 
    document.querySelector(".app"),
)


function UserCard({name,text}){
    return   <div className="card"> 
        <h3>{ name }</h3>
        <hr/>
        
        <div>{ text }</div>
    </div>
   
}


// function UserCard(props){
//     return   <div className="card"> 
//         <h3>{props.name}</h3>
//         <hr/>
        
//         <div>{props.text}</div>
//     </div>
   
// }

