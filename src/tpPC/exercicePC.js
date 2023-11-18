//import Photo from "./tpphoto";
import Pc1 from './photo1.jpg'
import Pc2 from './photo2.jpg'
import Pc3 from './photo3.jpg'
import Pc4 from './photo4.jpg'
export default function Pcportable(){
    //return <Photo/>
    const products = [
        {id:1,
            titre:"PC Portable Gamer HP VICTUS",
            prix:6490,
            image:Pc1
        },
      {id:2,
        titre:"PC Portable Gamer HP VICTUS",
        prix:2190,
        image:Pc2
    },
      {id:3,
        titre:"Pc Portable Chromebook Acer",
        prix:3640,
        image:Pc3},
      {id:4,
        titre:"PC Portable - HUAWEI",
        prix:1270,
        image:Pc4
    }];
    const Pc=()=>{
        return products.map((Element,key)=>{
            return <tr>
                <td key={key}>{Element.id}</td>
                <td key={key}>{Element.titre}</td>
                <td key={key}>{Element.prix}</td>
                <td key={key}><img src={Element.image} alt="" /></td>
            </tr>
        })
    }
    return <table border={1}>
        <tr> 
        <th>id</th>
        <th>titre</th>
        <th>prix</th>
        <th>image</th>
        </tr>
      {Pc()}
    </table>

}