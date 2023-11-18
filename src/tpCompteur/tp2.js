import React ,{ useState } from "react"

export default function Calcule(props){
    const [valeur,setValeur]=useState(props.i)
  const plus=()=>{
    return setValeur((prevValeur)=>{
        return prevValeur+props.f
    })
  }
  const moins=()=>{
    return setValeur((prevValeur)=>{
        return prevValeur-props.f
    })
  }
  return <>
  <p>varier ce nombre {valeur}</p>   
  <button onClick={plus}>Augmentation</button>
   <button onClick={moins}>dévaluation</button> 
    </>
};