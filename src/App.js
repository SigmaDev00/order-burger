import logo from './logo.svg';
import './App.css';
import {React,useState} from 'react'
import Upper from './assets/Upper.png'
import Lower from './assets/Lower.png'
import Tomato from './assets/Tomato.png'
import Lettuce from './assets/Lettuce.png'
import Chicken from './assets/Chicken.png'
import Logo from './assets/Logo.png'


function App() {
  const [tomato,setTomato]=useState(0);
  const [lettuce,setLettuce]=useState(0);
  const [chicken,setChicken]=useState(0);

  const[ingredients,setIngredients] = useState([]);

  return (
    <div className="app">

      <div className='menu'>

        <img src={Logo} style={{width:'100px'}}/>

      <h2 style={{padding:'10px' ,display:"flex",flexDirection:'column'}}>
          <div>      Tomato
      <button onClick={()=>{tomato > 0 ? setTomato(tomato-1):<></> ;let temp=ingredients;temp.pop();setIngredients(temp)}}>-</button>
        <button>{tomato}</button>
        <button onClick={()=>{setTomato(tomato+1) ;let temp=ingredients;temp.push(<img src={Tomato} style={{width:'50%'}} />);setIngredients(temp)}}>+</button>
        </div>
        <button style={{backgroundColor:'gray',borderColor:"gray",color:"white",borderRadius:"10px"}}>$ {tomato*5}</button>
        </h2>

        <h2 style={{padding:'10px' ,display:"flex",flexDirection:'column'}}>
          <div>        Lettuce
        <button onClick={()=>{lettuce > 0 ? setLettuce(lettuce-1):<></>;let temp=ingredients;temp.pop();setIngredients(temp)}}>-</button>
        <button>{lettuce}</button>
        <button onClick={()=>{setLettuce(lettuce+1);let temp=ingredients;temp.push(<img src={Lettuce} style={{width:'50%'}} />);setIngredients(temp)}}>+</button>
        </div>
        <button style={{backgroundColor:'gray',borderColor:"gray",color:"white",borderRadius:"10px"}}>$ {lettuce*5}</button>
        </h2>
        
        <h2 style={{padding:'10px' ,display:"flex",flexDirection:'column'}}>
          <div> 
            chicken
        <button onClick={()=>{chicken > 0 ? setChicken(chicken-1):<></>;let temp=ingredients;temp.pop();setIngredients(temp)}}>-</button>
        <button>{chicken}</button>
        <button onClick={()=>{setChicken(chicken+1);let temp=ingredients;temp.push(<img src={Chicken} style={{width:'50%'}} />);setIngredients(temp)}}>+</button>
        </div>
        <button style={{backgroundColor:'gray',borderColor:"gray",color:"white",borderRadius:"10px"}}>$ {chicken*20}</button>
        </h2>

        <h2 style={{padding:'10px',display:'flex',justifyContent:"center",alignItems:'center',width:"90"}}>Total
        <button style={{backgroundColor:'gray',borderColor:"gray",color:"white",borderRadius:"10px",flexGrow:'1'}}>$ {(chicken*20)+(lettuce*5)+(tomato*5)}</button>
        </h2>

        </div>

        <div className='burger'>

          <img src={Upper} style={{height:'50px',width:'50%'}} />
          {
            (ingredients.length===0) ? <h2> No Ingredients</h2>
            :
            ingredients.map((ingredient)=>{return(<div style={{display:"flex",justifyContent:"center"}}>{ingredient}</div>)})
         }
          <img src={Lower} style={{height:'50px',width:'50%'}} />
        </div>
    </div>
  );
}

export default App;
