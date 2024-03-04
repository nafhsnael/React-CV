import React from 'react'
import './tampilan.css';
import CV from './CV.jpg';


class TentangSaya extends React.Component {
    render() {
        return(
            <div>
            <div class="tittle">
               <h1>My Profile</h1>
            </div>
            <center><div class="product-image">
            <img src={CV}></img>
            </div></center>
            </div>
        )
    }
}

export default TentangSaya;
