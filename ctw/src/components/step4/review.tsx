import "./review.css";
import React from "react";
import { restaurant_name, meal_type, people_number, orders } from "../../store";
import { useRecoilState, useRecoilValue } from "recoil";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const Review = () => {

    const restaurant = useRecoilValue(restaurant_name);
    const mealtype = useRecoilValue(meal_type);
    const peoplenumber = useRecoilValue(people_number);
    const [orderlist, setorderlist] = useRecoilState(orders);

    return(
        <div>
            <div className = "block">
                <div className = "left">
                <p><b>Meal:</b></p>
                </div>
                <p>{mealtype}</p>
            </div>
            <div className = "block">
                <div className = "left">
                <p><b>No. of. People:</b></p>
                </div>
                <p>{peoplenumber}</p>
            </div>
            <div className = "block">
                <div className = "left">
                <p><b>Restaurant:</b></p>
                </div>
                <p>{restaurant}</p>
            </div>
            <div className = "blocktable">
                <div className = "left">
                <p className = "top"><b>Dishes:</b></p>
                </div>
                <div className = "table">
                <List>
                  {orderlist.map((ordervalue) =>{
                      if(Number(ordervalue.id)==0){
                        return;
                      }
                      return(
                             <ListItem>
                             <ListItemText
                               primary={ordervalue.name}/> 
                            <ListItemText
                               primary={"--------"+ordervalue.value}/>   
                            </ListItem>
                        );
                      }
                   )}
                </List>
                </div>
            </div>
        </div>
    );
}