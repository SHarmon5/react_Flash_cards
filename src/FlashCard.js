import React from "react";
import { Button, Card, Icon, Segment, } from "semantic-ui-react";




const FlashCard = ({ id, title, description, remove, update }) => (

<Card>
    <Card.Content header={title} textAlign="center"/>
    
    <Button.Group floated="right">
    <Button circular icon='settings'compact size="mini" basic color="green">Edit</Button>
    <Button circular icon='settings'compact size="mini" basic color="red" onClick ={() => remove(id)}>Delete Card</Button>
    </Button.Group>
    <Segment basic>
    <Button icon color="blue" onClick={description}>
      <Icon name='angle double down' />
    </Button>
    

    <Card.Content description={description}/>
    <Button compact size="mini" basic color="green">Edit</Button>
    </Segment>
  </Card>

)


export default FlashCard;