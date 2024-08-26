import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="wallpaperflare.com_wallpaper.jpg"
      alt="ironman"
    />
  );
}
function Intro() {
  return (
    <div className="data">
      <h2> Tony Stark </h2>
      <p>
        Full-Stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="✌️" color="orangered" />
      <Skill skill="Web Design" emoji="✌️" color="red" />
      <Skill skill="Git and Github" emoji="✌️" color="green" />
      <Skill skill="React" emoji="✌️" color="purple" />
      <Skill skill="Svelet" emoji="🤐" color="skyblue" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
    // <div className="skill">HTML+CSS ✌️</div>
    // <div className="skill">JavaScript ✌️</div>
    // <div className="skill">Web Design ✌️</div>
    // <div className="skill">Git and Github ✌️</div>
    // <div className="skill">React ✌️</div>
    // <div className="skill">Svelet ✌️</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
