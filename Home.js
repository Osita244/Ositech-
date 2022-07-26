import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import  "../components/styles/Home.css";



function Home() {
    return (

        <div className="home">
            <div className ="about">
                <h2> Hi, My Name is Ositech</h2>
                <div className="prompt">
                    <p>A software Engineer with passion for learning and creating</p>.
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
                </div>
                </div>
        <div className ="skills"> 
        <h1>Skills</h1>
        <ol className="list">
            <li className="item">
            <h2>Front-End</h2>
            <span>
                ReactJS,Angular, Bootstrap,CSS,Npm,HTML,Redux,MaterialUI,React Native, Flutter,
                Ionic,Yarn,TailWindCSS,StyledComponents.
                </span> 
            </li>

            <li className="item">
            <h2>Back-End</h2>
            <span>
                NodeJS, .Net,AWS S3, GraphQL,ExpressJS,Java Spring, DynamoDB,DigitalOcean,
                MS SQL.
                </span> 
            </li>

            <li className="item">
            <h2>Languages</h2>
            <span>
                Javascript,C,C#,C++,Python, Go, TypeScript.</span> 
            </li>
        </ol>
        </div>
         </div>
    );
}

export default Home;

