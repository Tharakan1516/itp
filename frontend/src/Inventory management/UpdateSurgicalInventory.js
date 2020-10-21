
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'
import {Link} from "react-router-dom"
import React, { Component } from 'react'
import Head from './Navbar'

export default class AddSurInventory extends Component {
    constructor(props) {
      super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this); 
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeBalance = this.onChangeBalance.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
      name: "",
      quantity: "",
      from:"",
      balance:"",
      date: "",
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/surgicalinventory/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          quantity: response.data.quantity,
          from: response.data.from,
          balance: response.data.balance,
          date: response.data.date,
        })   
    })
      .catch(function (error) {
        console.log(error);
      })
    }

  
  
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  
  
  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }
  
  
  onChangeFrom(e) {
    this.setState({
      from: e.target.value
    })
  }
  
  onChangeBalance(e) {
    this.setState({
      balance: e.target.value
    })
  }
  
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault();
  
    const surgical = {
      name: this.state.name,
      quantity: this.state.quantity,
      from: this.state.from,
      balance: this.state.balance,
      date: this.state.date,
    }

   console.log(surgical);

   axios.post('http://localhost:5000/api/surgicalinventory/update/' + this.props.match.params.id, surgical).then(res => {console.log(res.data)} );


  }
  
  render() {
    
    return (
      <div>
      <Head/><br/>
      <div className ="updateinventory">
      <h1 className="form" style={{justifyContent: 'center',display:'flex'}}> Update Surgical Inventory </h1><br/><br/>
    
    
        <Form onSubmit={this.onSubmit}>
      
    
        <Form.Group controlId="formBasicName">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" onChange={this.onChangeName}  value={this.state.name} />
      </Form.Group>
    
      <Form.Group controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" onChange={this.onChangeQuantity} value={this.state.quantity}/>
      </Form.Group>
    
      <Form.Group controlId="formBasicFrom">
      <Form.Label>From</Form.Label>
      <Form.Control type="text" onChange={this.onChangeFrom} value={this.state.from} />
    </Form.Group>
    
    <Form.Group controlId="formBasicBalance">
    <Form.Label>Balance</Form.Label>
    <Form.Control type="text" onChange={this.onChangeBalance} value={this.state.balance} />
    </Form.Group>
    
    <Form.Group controlId="formBasicDate">
    <Form.Label> Date</Form.Label>
    <Form.Control type="text" onChange={this.onChangeDate} value={this.state.date} />
    </Form.Group>
    
    
  <Button style={{justifyContent:'center', display:'flex'}}  variant="primary" type="submit" >
  UPDATE
</Button>
  
    </Form>
     </div>
      </div>
    )
  }
  }