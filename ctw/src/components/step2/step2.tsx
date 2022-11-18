import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { restaurant_name, restaurant_list, orders } from "../../store";
import {order} from "../../type/order";

export const Step2 = () => {

    const [restaurant, setrestaurant] = useRecoilState(restaurant_name);
    const [orderlist, setorderlist] = useRecoilState(orders);
    const reslist = useRecoilValue(restaurant_list);

    const changerestaurant = (event: SelectChangeEvent) => {
        setrestaurant(event.target.value);
        const tem:order[] = [];
        tem.push(orderlist[0]);
        setorderlist(tem);
    }

    const menuItems = reslist.map(item => (
        <MenuItem value={item}>{item}</MenuItem>
    ))

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
            {menuItems}
            </Select>
           </FormControl>
        </div>
    );
}