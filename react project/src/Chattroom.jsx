import React, { useState } from "react";
import './css/chatt.css';
import ChattlogAPI from './ChattAPI.json';

const Chatt = (/*Chattlog*/) => {

  const [Chatt, setChatt] = useState(ChattlogAPI);
  const [Login, setLogin] = useState("Simon");

  console.log(ChattlogAPI.Messages[0].name);


  function renderChatt() {
    /*
        if (Login === Chatt.Messages[2].name) {
          return (
            (Chatt.Messages).map((user) => (
              <div className="bubbleLogin">
                <p>{user.name} </p>
                <p>{user.time} </p>
                <p>{user.content.text} </p>
              </div>
            )))
        } else {
          return (
            (Chatt.Messages).map((user) => (
              <div className="bubble">
                <p>{user.name} </p>
                <p>{user.time} </p>
                <p>{user.content.text} </p>
              </div>
            )))
        }
    */

    /*
        Chatt.Messages.map(function (user, i) {
    
          if (Login === user.name) {
            console.log("yes");
            console.log(user);
            console.log(i);
            return (
              <div className="bubbleLogin" key={i}>
                <p>{user.name} </p>
                <p>{user.time} </p>
                <p>{user.content.text} </p>
              </div>
            )
    
          } else {
            console.log("no");
            console.log(user);
            
            return (
              <div className="bubble">
                <p>{user.name} </p>
                <p>{user.time} </p>
                <p>{user.content.text} </p>
              </div>
            )
            
          }
    
        });
    */

      

      if (Login === Chatt.Messages[2].name) {
        return (
          (Chatt.Messages).map((user) => (
            <div className="bubbleLogin">
              <p>{user.name} </p>
              <p>{user.time} </p>
              <p>{user.content.text} </p>
            </div>
          )))
      } else {
        return (
          (Chatt.Messages).map((user) => (
            <div className="bubble">
              <p>{user.name} </p>
              <p>{user.time} </p>
              <p>{user.content.text} </p>
            </div>
          )))
      }




  }
  /*
    function checkLogin(){
      if (Login === Chatt.Messages[2].name) {
        return (
          (Chatt.Messages).map((user) => (
            <div className="bubbleLogin">
              <p>{user.name} </p>
              <p>{user.time} </p>
              <p>{user.content.text} </p>
            </div>
          )))
      } else {
        return (
          (Chatt.Messages).map((user) => (
            <div className="bubble">
              <p>{user.name} </p>
              <p>{user.time} </p>
              <p>{user.content.text} </p>
            </div>
          )))
      }
    }
  */


  return (
    <div>
      <h1>Chattroom</h1>
      <ul className="header">
        <li><a href="/">Home</a></li>
        <li><a href="/stuff">Stuff</a></li>
        <li><a href="/Chatt">Chatt</a></li>
      </ul>
      <div className="content">
        {renderChatt()}
      </div>
    </div>
  );

}

export default Chatt;