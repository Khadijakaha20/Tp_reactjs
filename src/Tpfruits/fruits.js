export default function Fruits(props){
    let listefruits=props.nbr
    const affichage =()=>{
        return listefruits.map((Element,key)=>{
            return <li key={key}>{Element}</li>
        })
    }
    let nombre=props.letre
    const afficher=()=>{
        return nombre.map((Element,key)=>{
            return <ol key={key}>{Element}</ol>
        })
    }

    return <><h1> nom:{props.nom}</h1>
             <br></br>
           <h1>prenom:{props.prenom}</h1>
           <br></br>
           <h1>premier element:{props.nbr[0]}</h1>
           <br></br>
           <ul>{affichage()}</ul>
           <ul>{afficher()}</ul>
          </>
}