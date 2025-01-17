import "./main.css";
import React,{useEffect} from "react";
import Button from '@mui/material/Button';
import { setTokenSourceMapRange } from "typescript";
import {useState, useRef} from "react";
import { StylesContext } from "@material-ui/styles";
import { Step1 } from "../step1/step1";
import { Step2 } from "../step2/step2";
import { Step3 } from "../step3/step3";
import {Review} from "../review/review";
import { errormsg, restaurant_name, restaurant_list, meal_type, people_number, sum_orders } from "../../store";
import { useRecoilValue, useRecoilState } from "recoil";
import { finished } from "stream";
import disheslist from "../../data/dishes.json";


const Main = () => { 

    const restaurant = useRecoilValue(restaurant_name);
    const mealtype = useRecoilValue(meal_type);
    const peoplenumber = useRecoilValue(people_number);
    const sumorders = useRecoilValue(sum_orders);

    const [reslist, setreslist] = useRecoilState(restaurant_list);
    const [error, seterror] = useRecoilState(errormsg);

    const [step, setstep] = useState(1);
    const [moststep, setmoststep] = useState(1);


    const changestep = (num:number) =>{
        setstep(num);
        seterror("");
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
        else if(curstep==3){
            if(peoplenumber<=sumorders && sumorders<=10){
                return true;
            }
            if(sumorders>10){
                seterror("Total number of dishes can't be greater than 10!");
            }
            else if(sumorders<peoplenumber){
                seterror("Total number of dishes can't be less than the number of people ("+peoplenumber.toString()+") !");
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

    const submit = () =>{
        window.alert("Submitted!");
    }

    useEffect(()=>{
        const temset = new Set<string>();
         disheslist.dishes.map((value,index)=>{
            temset.add(value.restaurant);
        });
        const temarr : string[] = [];
        for(const item of temset){
            temarr.push(item);
        }
         setreslist(temarr);
    },[]);

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
                    disabled
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
                       onClick = {()=>submit()}
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