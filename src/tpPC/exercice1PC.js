import './exercicePC'
import Pc1 from './photo1.jpg'
import Pc2 from './photo2.jpg'
import Pc3 from './photo3.jpg'
import Pc4 from './photo4.jpg'
export default function Pcportable1(){
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
    const Information=()=>{
        return products.map((Element,key)=>{
            return <div className='carte'>
                 <img src={Element.image} alt="" />
                 <h3>{Element.titre}</h3>
                 <p>{Element.prix}DH</p>
                 <button>Ajouter au panier</button>
            </div>
        })
    }
    return <div className='produits'>
        {Information()}
    </div>
    

}