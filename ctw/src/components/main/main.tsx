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
import { restaurant_name, meal_type, people_number } from "../../store";
import { useRecoilValue } from "recoil";
import { finished } from "stream";


const Main = () => { 

    const restaurant = useRecoilValue(restaurant_name);
    const mealtype = useRecoilValue(meal_type);
    const peoplenumber = useRecoilValue(people_number);

    const [step, setstep] = useState(1);
    const [moststep, setmoststep] = useState(1);
    const [error, seterror] = useState("");

    const changestep = (num:number) =>{
        setstep(num);
    }

    const finished = (curstep:number) =>{
        if(curstep==1){
            if(mealtype!=""){
                return true;
            }
            else{
                seterror("Please select your meal first!");
            }
        }
        else if(curstep==2){
            if(restaurant!=""){
                return true;
            }
            else{
                seterror("Please select your restaurant frist!");
            }
        }
        return false;
    }

    const gonext = () =>{
        if(finished(step)){
            seterror("");
            setstep(step+1);
            if(moststep<step+1){
                setmoststep(step+1);
            }
        }
    }

    const goprevious = () =>{
       seterror("");
       setstep(step-1);
    }

    return(
        <div className = "main">
            <div className = "tab">
                <Button 
                    className = "tablinks" 
                    id = "s1"
                    onClick={() => changestep(1)}
                    style={ step == 1? {
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
                    style={ step == 2? {
                        backgroundColor: "grey",
                        color: "white"
                    }: {
                        backgroundColor: "white"
                    }}
                   disabled = {moststep<2}
                >
                    Step2
                </Button>
                <Button 
                    className = "tablinks" 
                    id = "s3"
                    onClick={() => changestep(3)}
                    style={ step == 3? {
                        backgroundColor: "grey",
                        color: "white"
                    }: {
                        backgroundColor: "white"
                    }}
                    disabled = {moststep<3}
                >
                    Step3
                </Button>
                <Button 
                    className = "tablinks" 
                    id = "s4"
                    onClick={() => changestep(4)}
                    style={ step == 4? {
                        backgroundColor: "grey",
                        color: "white"
                    }: {
                        backgroundColor: "white"
                    }}
                    disabled = {moststep<4}
                >
                    Review
                </Button>
            </div>
            <div className = "content">
                {
                  step == 1 && 
                  <Step1/>
                }
                {
                  step == 2 &&
                  <Step2/>
                }
                {
                  step == 3 &&
                  <Step3/>
                }
                {
                  step == 4 &&
                  <Review/>
                }
            </div>
            <div className = "errormes">
                    <p className = "alert">{error}</p>
            </div>
            <div className = "downbar">
                <div>
                {
                    step>1 &&
                    <Button 
                       style = {{width: '100px', height: '40px', background: "#4B98E5"}} 
                       variant="contained" 
                       onClick = {()=>goprevious()}
                    >
                       Previous
                    </Button>
                }
                </div>
                <div className = "rightdownbar">
                {
                    step<4&&
                    <Button 
                       style = {{width: '100px', height: '40px', background: "#4B98E5"}} 
                       variant="contained"
                       onClick = {()=>gonext()}
                    >
                       Next
                    </Button>
                }
                {
                    step == 4&&
                    <Button 
                       style = {{width: '100px', height: '40px', background: "#4B98E5"}} 
                       variant="contained"
                    >
                       Submit
                    </Button>
                }
                </div>
            </div>
        </div>
    );
}


export default Main;