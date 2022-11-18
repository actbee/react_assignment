import "./step3.css";
import React, {useEffect} from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {useState, useRef} from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {errormsg, meal_type, people_number, restaurant_name, orders,food_options} from "../../store";
import {order} from "../../type/order";
import disheslist from "../../data/dishes.json";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { isTemplateExpression } from "typescript";


export const Step3 = () => {

    const mealtype = useRecoilValue(meal_type);
    const peoplenum = useRecoilValue(people_number);
    const resname = useRecoilValue(restaurant_name);

    const [foodoptions, setfoodoptions] = useRecoilState(food_options);
    const [orderlist, setorderlist] = useRecoilState(orders);
    const [error, seterror] = useRecoilState(errormsg);

    const [dish, setdish] = useState("");
    const [val, setval] = useState(0);



    const changedish = (event: SelectChangeEvent) => {
          setdish(event.target.value);
          setval(1);
      };
  
    const changeval = (event: SelectChangeEvent) => {
          setval(Number(event.target.value));
      }
    
    const changeorderval = (event: SelectChangeEvent, targetid: string) => {
          const tem: order[] = [];
          orderlist.map(item => {
            if(item.id == targetid ){
                console.log("do");
                let neworder: order = {
                    id: item.id,
                    type: item.type,
                    value: Number(event.target.value), 
                    name: item.name
                  }
                tem.push(neworder);
                return;
            }
            tem.push(item);
          });
       setorderlist(tem);
       console.log(tem);
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
          const temarr: string[] = []; 
          foodoptions.map(item => {
            if(item != dish){
                temarr.push(item);
            }
          }); 
          setfoodoptions(temarr);
          setdish("");
          setval(0);
    }

    const valnum = [1,2,3,4,5,6,7,8,9,10];
    const valnumItems = valnum.map(item => (
        <MenuItem value={item}>{item}</MenuItem>
    ))

    const minus = (target:string) => {
       const tem: order[] = [];
       let temarr: string[] = foodoptions.map(item => {
          return item;
       });
       orderlist.map(item => {
            if(item.id == target ){
                temarr.push(item.name);
                return;
            }
            tem.push(item);
       });
       setorderlist(tem);
       setfoodoptions(temarr);
    }

    useEffect(()=>{
       if(orderlist.length>1){
         return;
       } 
       const tem = new Set<string>();
       disheslist.dishes.map(item => {
            if(item.restaurant == resname){
                for(var time of item.availableMeals){
                    if(time == mealtype.toLowerCase()){
                        tem.add(item.name);
                    }
                }
            }
       });
       const arr: string[] = [];
       for(var i of tem){
        arr.push(i);
       }
       setfoodoptions(arr);
       if(arr.length==0){
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
                    labelId="select-dish-number"
                    id="select-dish-number"
                    value={val.toString()}
                    onChange={changeval}
                 >
                {valnumItems}
                </Select>
                </FormControl>
                </div>
            </div>
            <div className = "data">
                <List>
                  {orderlist.map((ordervalue) =>{
                      if(Number(ordervalue.id)==0){
                        return;
                      }
                      return(
                             <ListItem
                             secondaryAction={
                               <IconButton edge="end" aria-label="delete" onClick = {()=> minus(ordervalue.id)}>
                                 <DeleteIcon />
                               </IconButton>
                             }
                           >
                             <ListItemText
                               primary={ordervalue.name}
                             />
                               <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
                                <Select
                                    labelId={"pick"+ordervalue.name}
                                    id={ordervalue.id}
                                    value={ordervalue.value.toString()}
                                    onChange={event => changeorderval(event, ordervalue.id)}
                                 >
                                {valnumItems}
                                </Select>
                                </FormControl>
                           </ListItem>
                        );
                      }
                   )}
                </List>
            </div>
        </div>
    );
}