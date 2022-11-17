import "./step1.css";
import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useState, useRef} from "react";
import {meal_type, people_number} from "../../store"
import { useRecoilState } from "recoil";


export const Step1 = () => {
    const [mealtype, setmealtype] = useRecoilState(meal_type);
    const [peoplenumber, setpeoplenumber] = useRecoilState(people_number);

    const changemealtype = (event: SelectChangeEvent) => {
      setmealtype(event.target.value);
    };

    const changepeoplenumber = (event: SelectChangeEvent) => {
        setpeoplenumber(Number(event.target.value));
    }



    return(
       <div>
           <p>Please Select a meal</p>

           <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
            <Select
             labelId="select-mealtype"
             id="select-mealtype"
             value={mealtype}
             onChange={changemealtype}
             >
           
            <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
            <MenuItem value={"Lunch"}>Lunch</MenuItem>
            <MenuItem value={"Dinner"}>Dinner</MenuItem>
            </Select>
           </FormControl>


           <p>Please Enter Number of people</p>
           
           <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
            <Select
             labelId="select-people-number"
             id="select-people-number"
             value={peoplenumber.toString()}
             onChange={changepeoplenumber}
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
    );
}