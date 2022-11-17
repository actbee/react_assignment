import "./main.css";
import React from "react";
import Button from '@mui/material/Button';
import { setTokenSourceMapRange } from "typescript";
import {useState, useRef} from "react";
import { StylesContext } from "@material-ui/styles";
import { Step1 } from "../step1/step1";
import { Step2 } from "../step2/step2";
import { Step3 } from "../step3/step3";
import {Review} from "../review/review";


const Main = () => { 
    const [selected, setselected] = useState(1);

    const changestep = (num:number) =>{
        setselected(num);
    }

    return(
        <div className = "main">
            <div className = "tab">
                <Button 
                    className = "tablinks" 
                    id = "s1"
                    onClick={() => changestep(1)}
                    style={ selected == 1? {
                        backgroundColor: "grey",
                        color: "white"
                    }: {
                        backgroundColor: "white"
                    }}
                >
                    Step1
                </Button>
                <Button 
                    className = "tablinks" 
                    id = "s2"
                    onClick={() => changestep(2)}
                    style={ selected == 2? {
                        backgroundColor: "grey",
                        color: "white"
                    }: {
                        backgroundColor: "white"
                    }}
                >
                    Step2
                </Button>
                <Button 
                    className = "tablinks" 
                    id = "s3"
                    onClick={() => changestep(3)}
                    style={ selected == 3? {
                        backgroundColor: "grey",
                        color: "white"
                    }: {
                        backgroundColor: "white"
                    }}
                >
                    Step3
                </Button>
                <Button 
                    className = "tablinks" 
                    id = "s4"
                    onClick={() => changestep(4)}
                    style={ selected == 4? {
                        backgroundColor: "grey",
                        color: "white"
                    }: {
                        backgroundColor: "white"
                    }}
                >
                    Review
                </Button>
            </div>
            <div className = "content">
                {
                  selected == 1 && 
                  <Step1/>
                }
                {
                  selected == 2 &&
                  <Step2/>
                }
                {
                  selected == 3 &&
                  <Step3/>
                }
                {
                  selected == 4 &&
                  <Review/>
                }
            </div>
            <div className = "downbar">
                <div>
                {
                    selected>1 &&
                    <Button style = {{width: '100px', height: '40px', background: "#4B98E5"}} variant="contained">
                       Previous
                    </Button>
                }
                </div>
                <div className = "rightdownbar">
                {
                    selected<4&&
                    <Button style = {{width: '100px', height: '40px', background: "#4B98E5"}} variant="contained">
                       Next
                    </Button>
                }
                {
                    selected == 4&&
                    <Button style = {{width: '100px', height: '40px', background: "#4B98E5"}} variant="contained">
                       Submit
                    </Button>
                }
                </div>
            </div>
        </div>
    );
}


export default Main;