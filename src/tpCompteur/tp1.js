import React, { useState } from "react"
export default function Counter(){
    const [compteur,setCounter]=useState(0)
    const v_plus=()=>{
        return setCounter((pValue)=>{
            return pValue+1
        })
    }
    const v_moins=()=>{
        return setCounter((pValue)=>{
            return pValue-1
        })
    }
    const v_initiale=()=>{
        return setCounter((pValue)=>{
            return pValue=0
        })
    }
    return <>
        <h1>On va augmenter ou bien diminuez ce nombre {compteur}</h1>
        <button onClick={v_plus}>augmenter +</button>
        <button onClick={v_moins}>diminuez -</button>
        <button onClick={v_initiale}>Valeur initiale</button>
      </>
}