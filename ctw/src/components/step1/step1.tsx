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

    const peoplenum = [1,2,3,4,5,6,7,8,9,10];
    const mealtypelist = ["Breakfast", "Lunch", "Dinner"];

    const mealtypeItems = mealtypelist.map(item => (
        <MenuItem value={item}>{item}</MenuItem>
    ))

    const peoplenumItems = peoplenum.map(item => (
        <MenuItem value={item}>{item}</MenuItem>
    ))

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
            {mealtypeItems}
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
            {peoplenumItems}
            </Select>
           </FormControl>

       </div>
    );
}