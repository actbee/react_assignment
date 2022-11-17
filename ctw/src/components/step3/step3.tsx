import "./step3.css";
import React, {useEffect} from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {useState, useRef} from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import {errormsg, meal_type, people_number, restaurant_name, orders, sumorders} from "../../store";
import {order} from "../../type/order";
import disheslist from "../../data/dishes.json";


export const Step3 = () => {

    const mealtype = useRecoilValue(meal_type);
    const peoplenum = useRecoilValue(people_number);
    const resname = useRecoilValue(restaurant_name);

    const [dish, setdish] = useState("");
    const [val, setval] = useState(0);
    const [orderlist, setorderlist] = useRecoilState(orders);
    const [error, seterror] = useRecoilState(errormsg);
    const [foodoptions, setfoodoptions] = useState([""]);

    const changedish = (event: SelectChangeEvent) => {
          setdish(event.target.value);
      };
  
    const changeval = (event: SelectChangeEvent) => {
          setval(Number(event.target.value));
      }
  
    const add = () => {
          seterror("");
          if(val==0 || dish == ""){
            seterror("Please pick your dish and set the number first!");
            return;
          }
          let temlist: order[] = orderlist.map(item =>{
               return item;
          });
          const newid = temlist.length;
          let neworder: order = {
            id: newid.toString(),
            type: "order",
            value: val, 
            name: dish
          }
          temlist.push(neworder);
          setorderlist(temlist);     
    }


    useEffect(()=>{
       const tem:string[] = [];
       disheslist.dishes.map(item => {
            if(item.restaurant == resname){
                for(var time of item.availableMeals){
                    if(time == mealtype.toLowerCase()){
                        tem.push(item.name);
                    }
                }
            }
       });
       setfoodoptions(tem);
       if(tem.length==0){
        seterror("No dish provided based on selected resturant and time! ");
       }
    },[]);

   
    return(
        <div>
             <div className = "block">
                <div className = "left">
                <p>Please Select a Dish</p>
                </div>
                <div className = "right">
                <p>Please enter no. of servings</p>
                </div>
            </div>
            <div className = "block">
                <div className = "left">
                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                <Select
                    labelId="select-dish"
                    id="select-dish"
                    value={dish}
                    onChange={changedish}
                 >
                {foodoptions.map(item => (
                    <MenuItem value={item}>{item}</MenuItem>
                ))}
                </Select>
                </FormControl>
                <IconButton color="primary" aria-label="upload picture" component="label" onClick = {()=> add()}>
                     <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
                </IconButton>
                </div>
                <div className = "right">
                <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
                <Select
                    labelId="select-people-number"
                    id="select-people-number"
                    value={val.toString()}
                    onChange={changeval}
                 >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
                </FormControl>
                </div>
            </div>
            <div className = "data">
                 
            </div>
        </div>
    );
}