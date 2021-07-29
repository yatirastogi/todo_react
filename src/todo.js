

import React, {Component} from 'react';
  
// Bootstrap for react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';




class Todo extends Component  {


    constructor(props) {
      super(props);
    
      // Setting up state
      this.state = {
        userItem : "",
        listitem:[]
      }
    }
    
    // Set a user input value
    updateInput(value){
      this.setState({
        userItem: value,
      });
    }
    
    // Add item if user input in not empty
    addItem(){
      if(this.state.userItem !== '' ){
        const user= {
    
          // Add a random id which is used to delete
          id :  Math.random(),
    
          // Add a user value to list
          value : this.state.userItem
        };
    
        // Update list
        const listitem = this.state.listitem;
        listitem.push(user);
    
        // reset state
        this.setState({
          listitem,
          userItem:""
        });
      }
    }
    
    // Function to delete item from list use id to delete
    deleteItem(key){
      const listitem = this.state.listitem;
    
      // Filter values and leave value which we need to delete
      const updateList = listitem.filter(item => item.id !== key);
    
      // Update list in state
      this.setState({
        listitem:updateList,
      });
    
    }
    
    render(){
      return(<Container>
    
            <Row style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: '3rem',
                    fontWeight: 'bolder',
                  }}
                  >TODO LIST
              </Row>
    
             <hr/>
            <Row>
            <Col md={{ span: 5, offset: 4 }}>
    
            <InputGroup className="mb-3">
            <FormControl
              placeholder="add item . . . "
              size="lg"
              value = {this.state.userItem}
              onChange = {e => this.updateInput(e.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button
                variant="dark"
                size="lg"
                onClick = {()=>this.addItem()}
                >
                ADD
              </Button>
            </InputGroup.Append>
          </InputGroup>
    
       </Col>
     </Row>
     <Row>
       <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {/* map over and print items */}
           {this.state.listitem.map(item => {return(
    
              <ListGroup.Item variant="dark" action 
                onClick = { () => this.deleteItem(item.id) }>
                {item.value}
              </ListGroup.Item>
    
           )})}
          </ListGroup>
       </Col>
     </Row>
       </Container>
      );
    }
  }
    
    
  export default Todo;
