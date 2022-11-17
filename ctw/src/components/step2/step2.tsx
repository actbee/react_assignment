import "./step2.css";
import React from "react";
import { useRecoilState } from "recoil";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { restaurant_name } from "../../store";

export const Step2 = () => {

    const [restaurant, setrestaurant] = useRecoilState(restaurant_name);

    const changerestaurant = (event: SelectChangeEvent) => {
        setrestaurant(event.target.value);
    }

    return(
        <div>
            <p>Please Select a Restaurant</p>

            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
            <Select
             labelId="select-restaurant"
             id="select-restaurant"
             value={restaurant}
             onChange={changerestaurant}
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
        </div>
    );
}