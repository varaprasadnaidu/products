import React, { Component } from 'react'
import {Table, Button} from 'semantic-ui-react'
import PhoneDetails from './PhoneDetails'

export default class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            "phone":
            [
                {
                    "id":1,
                    "phone_number":"9980788632",
                    "customer_name":"Raja",
                    "date":"19-june-2018"
                }
                
            ],
            selectedData: null
        }
    }
    showDetails = (selectedPhone) => {
        console.log(selectedPhone)
        this.setState({
            selectedData: selectedPhone
        })
    }
  render() {
    return (
      <div>
        <Table>
            <Table.Body>
            {this.state.phone.map(data => {
                return (
                    <Table.Row key={data.id}>
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>{data.phone_number}</Table.Cell>
                    <Table.Cell>{data.customer_name}</Table.Cell>
                    <Table.Cell>{data.date}</Table.Cell>
                    
                    </Table.Row>
                    
                )
            })}

            </Table.Body>
            </Table>
            <Button ClassName="ui primary" onClick={() => this.showDetails()}>Show Details</Button>
            <div>
                {this.state.selectedData && <PhoneDetails phn={this.state.selectedData}/>}
                </div>
      </div>
    )
  }
}
