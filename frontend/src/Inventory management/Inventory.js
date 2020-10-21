import React from "react";
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import {Link} from "react-router-dom";
import logo from './pictures/hospital.png'
import img2 from './pictures/image2.jpg'
import img3 from './pictures/Image3.jpg'
import img4 from './pictures/Image4.png'
import img1 from './pictures/Image1.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'  
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Head from './Navbar'
const ViewInventory = () => {
  return (
    <div>
    <Head/>
    <div>
    <div  class="container">
    <div>
   <div>
    
    <h1  style={{textAlign:"center",fontSize:70 }}> Inventory </h1><br/><br/>
<div style={{justifyContent:'center', display:'flex' }}>        
<table>
<td>
<Card className="card1" style={{ width: '18rem' }}>
<Card.Img src={img2} alt='user' height='100' width='100' />
<Card.Body>
<Card.Title>Add Surgical Inventory</Card.Title>
<Card.Text>
  to add Surgical inventories
</Card.Text>
<Link to="/addsurg"><Button variant="primary">click</Button></Link>
</Card.Body>
</Card>
</td>

<td>
<Card  className="card3" style={{ width: '18rem' }}>
<Card.Img src={img1} alt='user' height='100' width='100' />
<Card.Body>
<Card.Title>View Surgical Inventory</Card.Title>
<Card.Text>
  to view surgical inventories
</Card.Text>
<Link to="/surgtable"><Button variant="primary">click</Button></Link>
</Card.Body>
</Card>
</td>



</table>
</div>
<br/><br/>
<div style={{justifyContent:'center', display:'flex' }}>
<table>
<td>
<Card className="card4" style={{ width: '18rem' }}>
<Card.Img src={img3} alt='user' height='100' width='100' />
<Card.Body>
<Card.Title>Add General inventory</Card.Title>
<Card.Text>
  to add general inventory
</Card.Text>
<Link to="/addgen"><Button variant="primary">click</Button></Link>
</Card.Body>
</Card>
</td>

<td>
<Card className="card5" style={{ width: '18rem' }}>
<Card.Img src={img4} alt='user' height='100' width='100' />
<Card.Body>
<Card.Title>View General Inventory</Card.Title>
<Card.Text>
  to view general inventories
</Card.Text>
<Link to="/gentable"><Button variant="primary">click</Button></Link>
</Card.Body>
</Card>
</td>

</table>


<br/><br/><br/><br/><br></br>
</div>

</div>
</div>
</div>
<div>
<footer
  style={{
    height: "50px",
  }}
>
  <div style={{ textAlign: "center", paddingBottom: "5px",backgroundColor:"#128b27" }}>
    <hr />
    &copy; 2020 copyright: SABH-PK.com
  </div>
</footer>
</div>
</div>
    </div>
  );
};

export default ViewInventory;
