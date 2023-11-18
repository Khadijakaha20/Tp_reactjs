import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './tpPC/tpPCpere';
import reportWebVitals from './reportWebVitals';
import Forme from './App';
import Photo from './tpPC/tpphoto'
import Fruits from './Tpfruits/fruits';
import Remplissage from './Tpfruits/tp2';
import Affichage from './Tpfruits/tp2';
import Counter from './tpCompteur/tp1'
import Calcule from './tpCompteur/tp2'
import Formu from './tpformulaire/tpform2';
const letre=[1,2,3,4,5]
const fruits=["banane","monge","frise","ananas"]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/*<App />*/}
    {/*<Photo/>*/}
    {/*<Fruits  nom="kahalalayoun" prenom="khadija" nbr={fruits}  letre={letre} />*/}
    {/*<Remplissage liste={fruits}/>*/}
    {/*<Affichage liste={letre}/>*/}
    {/*<Forme />*/}
    {/*<Counter />*/}
    {/*<Calcule  i={16} f={2}/>*/}
    <Formu />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
