import React from 'react'
import './tampilan.css';
import Lukisan from './patung.jpeg';

class Karya extends React.Component {
    render() {
        return(
            <div>
            <div class="tittle">
               <h1>Karya</h1>
            </div>
            <center><br></br>
            <div class="product-image">
            <img src={Lukisan}></img>
            </div></center>
            </div>
        )
    }
}

export default Karya;
