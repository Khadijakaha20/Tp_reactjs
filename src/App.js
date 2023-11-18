
import React,{ useState } from "react"

export default function Forme(){
  const [compteur,setCounter]=useState(0)// read only
   const click_plus=()=>{
    return setCounter((prevValue)=>{
      return prevValue+1
    })
   }
   const click_moins=()=>{
    return setCounter((prevValue)=>{
      return prevValue-1
    })
   }
  const valeurinitial=()=>{
    return setCounter((prevValue)=>{
      return prevValue=0
     
  })
}
  return <>
  <p>il y a {compteur} sc</p>
  <button onClick={click_plus}> +++++ </button>
  <button onClick={click_moins}> ------ </button>
  <button onClick={valeurinitial} >valeur premier</button>
  
  </>
}

