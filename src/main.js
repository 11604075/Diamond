import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './main.css'
import axios from 'axios'

import { Card} from 'react-bootstrap';

function Main( ) {
    const [nameList,setNameList] = useState([])
    const [nameList1,setNameList1] = useState([])
    const [nameList2,setNameList2] = useState([])
    const [nameList3,setNameList3] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:3000/data.json')
        .then(response => {
            console.log(response.data)
            setNameList(response.data)
        })
    })

    
 
    



    return (
        <div>
        <div className="filter">
        <h4>Shape</h4>
        <select onChange={e => setNameList1(e.target.value)} >
                <option value="Round">Round</option>
               <option value="Princess">Princess</option>
              <option value="Cushion">Cushion</option>
               <option value="Emerald">Emerald</option>
               <option value="Oval">Oval</option>
              <option value="Radiant">Radiant</option>
               <option value="Heart">Heart</option>
        </select>

        
       <h4>color</h4>
       <select onChange={e => setNameList2(e.target.value)} >
                <option value="D">D</option>
               <option value="L">L</option>
              <option value="M">M</option>
               <option value="F">F</option>
               <option value="D">D</option>
              <option value="J">J</option>
               <option value="K">K</option>
        </select>



        <h4>Cut</h4>
        <select onChange={e => setNameList3(e.target.value)} >
                <option value="Very Good">Very Good</option>
               <option value="Good">Good</option>
              <option value="Excellent">Excellent</option>
               
        </select>
        </div>


             
        <div className="head"> 
           
            {
                nameList.map(details=>{
                   if(nameList1 === details.shape && nameList2 === details.color && nameList3 === details.cut){
                   return (
                   <div>
                    <Card style={{ width: '18rem' }} className="card" >
                    <Card.Img variant="top" className="image" src={details.image} />
                        <Card.Body>
                            <Card.Title>{details.name} {details.shape} {details.cut}</Card.Title>
                            
                        </Card.Body>
                    </Card>
                   </div>
                   )}
                   
                })
            

                
            }
        </div>
        </div>
    )
}

export default Main



// function selectName(e){
//   console.log(e.target.value)
//   if(e.target.value==)
//   }


//<select onChange={selectName}>
 //               <option value="Round">Round</option>
 //               <option value="Princess">Princess</option>
  //              <option value="Cushion">Cushion</option>
 //               <option value="Cushion">Cushion</option>
 //               <option value="Oval">Oval</option>
//                <option value="Radiant">Radiant</option>
 //               <option value="Heart">Heart</option>
//            </select>

