import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Form,Nav,FormControl } from 'react-bootstrap'
import Head from './Navbar'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Surgical = props => (
    <tr>
      <td>{props.Surgical.name}</td>
      <td>{props.Surgical.quantity}</td>
      <td>{props.Surgical.from}</td>
      <td>{props.Surgical.balance}</td>
      <td>{props.Surgical.date}</td>
      <td>
        <Link to={"/updateSurgical/"+props.Surgical._id}>update</Link> | <a href="#" onClick={() => { props.deleteSurgical(props.Surgical._id) }}>delete</a>
      </td>
    </tr>
  )
 
export default class viewSurgicalInventory extends Component {
    
    constructor(props) {
        super(props);
    
        this.deleteSurgical = this.deleteSurgical.bind(this)
    
        this.state = {Surgical: []};
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/api/surgicalinventory/')
          .then(response => {
            this.setState({ Surgical: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deleteSurgical(id) {
        axios.delete('http://localhost:5000/api/surgicalinventory/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          Surgical: this.state.Surgical.filter(el => el._id !== id)
        })
      }
    
      SurgicalList() {
        return this.state.Surgical.map(currentSurgical => {
          return <Surgical Surgical={currentSurgical} deleteSurgical={this.deleteSurgical} key={currentSurgical._id}/>;
        })
      }
    
    render() {
          return (
            <div>
            <Head/><br/>

              
          <br />

          <h3> Surgical Inventory Details</h3><br/>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>From</th>
                <th>Balance</th>
                <th>date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.SurgicalList() }
            </tbody>
          </table>
          
        </div>
        
        )
    }
}

/* //    <Nav.Link href="#home">Logout</Nav.Link> */