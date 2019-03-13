import React from "react";
import { Button, Card, Icon, Segment, } from "semantic-ui-react";

class FlashCard extends React.Component {
  state = {showDesc: true }

  toggleDesc = () => this.setState({ showDesc: !this.state.showDesc })

  render () {
    const { id, title, description, remove, update } = this.props
    const{showDesc} = this.state
    return (

      <Card>
          <Card.Content header={title} textAlign="center"/>
          
            <Button.Group floated="right">
            <Button circular icon='settings'compact size="mini" basic color="green">Edit</Button>
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