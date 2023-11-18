export default function Affichage(props){
    return <div>

       {props.liste}
    </div>
}
/*
export default function Remplissage(props){
    //const fruits=["banane","monge","frise","ananas"]
    const remplir=()=>{
        return props.liste.map(
            (value)=>{
                return <li>{value}</li>
            }
        )
    }
    return <ul>{remplir()}</ul>
}
*/