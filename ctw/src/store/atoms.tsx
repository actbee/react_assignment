import {atom, selector} from "recoil";

export const meal_type = atom({
    key: "meal-type",
    default: "",
})

export const people_number = atom({
    key: "people-number",
    default: 1,
})

export const restaurant_name = atom({
    key: "restaurant-name",
    default: "",
})