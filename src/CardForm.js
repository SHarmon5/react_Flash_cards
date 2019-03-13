import React from "react";
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { title: "", description: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ title: "", description: "", });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Title" 
            placeholder="Title" 
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="Description" 
            placeholder="Description" 
            name="description" 
            value={this.state.description} 
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default CardForm;
