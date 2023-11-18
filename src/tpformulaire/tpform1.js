import { type } from "@testing-library/user-event/dist/type"
import { useState } from "react"



export default function Formu(){
     const [valeurs,setValeur]=useState({})
     const [tableaux,setTab]=useState([])
     const afficher=(e)=>{
       let id=e.currentTarget.id
      let value=e.currentTarget.value
      let check=e.currentTarget.checked
       if(e.currentTarget.type=="text"){
        setValeur({...valeurs,...{
            [id]:value
     }}) 
       }else if(e.currentTarget.type=="checkbox"){
        setValeur({...valeurs,...{
            [id]:check
     }}) 
       }
           
     }
     const enregister=(e)=>{e.preventDefault()
        setTab([...tableaux,valeurs])
        console.log(tableaux)
    }


    {JSON.stringify(valeurs)}
    return <form>
        {JSON.stringify(valeurs)}
          <br />
        <label htmlFor="">nom:</label>
        <input type="text" id="nom" onChange={afficher}/>
        <br />  <br />
        <label htmlFor="">age:</label>
        <input type="text" id="age" onChange={afficher} />
        <br />  <br />
        <label htmlFor="">ville:</label>
        <input type="text" id="ville" onChange={afficher}/>
        <br />  <br />
        <input type="checkbox" id="check" onChange={afficher}/>
        <label htmlFor="check">accepter</label>
        <br />  <br />
        <input type="submit" value="submit" onClick={enregister} />
    </form>
}