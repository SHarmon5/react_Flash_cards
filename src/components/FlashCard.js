import React from "react";
import CardForm from './CardForm';
import { Header, Button, Card, Icon, Segment, } from "semantic-ui-react";

class FlashCard extends React.Component {
  state = {showDesc: true, editing: false, }

  toggleDesc = () => this.setState({ showDesc: !this.state.showDesc })
  toggleEdit = () => this.setState({ editing: !this.state.editing, })
  
  
  render () {
    const { id, title, description, remove, } = this.props
    const{showDesc} = this.state
    return (
      
      <Card> 
        {
          this.state.editing ?
            <CardForm { ...this.props } toggleEdit={this.toggleEdit} />
          :
            <div>
              <Header as="h3">{title}</Header>
              <p>{description}</p>
            </div>
        }
          <Card.Content header={title} textAlign="center"/>
          
            <Button.Group floated="right">
            <Button circular icon='settings'compact size="mini" basic color="green" onClick ={this.toggleEdit}>Edit</Button>
            <Button circular icon='settings'compact size="mini" basic color="red" onClick ={() => remove(id)}>Delete Card</Button>
            </Button.Group>
          <Segment basic>
         
            <Button icon color="blue" onClick={() =>this.toggleDesc()} >{showDesc ? "See Answer" : "Hide Answer" }
              <Icon name='angle double down' />
            </Button>
            <h3>{ showDesc ? [<br />] : description }</h3>
          </Segment>
        </Card>
    )
  }
}

export default FlashCard;