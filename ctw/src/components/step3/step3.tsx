import "./step3.css";
import React from "react";
import { useRecoilState } from "recoil";
import {useState, useRef} from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { restaurant_name } from "../../store";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import {orders, sumorders} from "../../store"


export const Step3 = () => {

    const [dish, setdish] = useState("");
    const [val, setval] = useState(0);
    const [orderlist, setorderlist] = useRecoilState(orders);

    const changedish = (event: SelectChangeEvent) => {
          setdish(event.target.value);
      };
  
    const changeval = (event: SelectChangeEvent) => {
          setval(Number(event.target.value));
      }
  
    const add = () => {
          
    }
   

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
                    <MenuItem value={"Mc Donalds"}>Mc Donalds</MenuItem>
                    <MenuItem value={"Taco Bell"}>Taco Bell</MenuItem>
                    <MenuItem value={"BBQ Hut"}>BBQ Hut</MenuItem>
                    <MenuItem value={"Vege Deli"}>Vege Deli</MenuItem>
                    <MenuItem value={"Pizzeria"}>Pizzeria</MenuItem>
                    <MenuItem value={"Panda Express"}>Panda Express</MenuItem>
                    <MenuItem value={"Olive Garden"}>Olive Garden</MenuItem>
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