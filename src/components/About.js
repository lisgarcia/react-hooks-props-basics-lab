import React from "react";
import user from "../data/user";
import Links from "./Links";

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null }
      {/* //{console.log(user)} */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
      
    </div>
  );
}


export default About;
