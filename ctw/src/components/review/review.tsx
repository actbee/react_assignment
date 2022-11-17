import "./review.css";
import React from "react";
import { restaurant_name, meal_type, people_number } from "../../store";
import { useRecoilValue } from "recoil";

export const Review = () => {

    const restaurant = useRecoilValue(restaurant_name);
    const mealtype = useRecoilValue(meal_type);
    const peoplenumber = useRecoilValue(people_number);

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
        </div>
    );
}