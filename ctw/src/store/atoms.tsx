import {atom, selector} from "recoil";
import {order} from "../type/order";


export const errormsg = atom<string>({
    key: "errormessage",
    default: "",
})


export const meal_type = atom<string>({
    key: "mealtype",
    default: "",
})

export const people_number = atom<number>({
    key: "peoplenumber",
    default: 1,
})

export const restaurant_name = atom<string>({
    key: "restaurantname",
    default: "",
})

export const restaurant_list = atom<string[]>({
    key: "resturantlist",
    default: [],
})

export const orders = atom<order[]>({
    key: "orders",
    default: [{
        id: "0",
        type: "order",
        value: 0,
        name: "",
    }]
})

export const sumorders = selector({
    key: "sumorders",
    get: ({get}) => {
        const os = get(orders);
        var sum = 0;
        for(let i = 0; i<os.length; i++){
            sum+=os[i].value;
        }
        return sum;
    }
})

