import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Moviecard({Movie}) {
return (
    <div className='card'>
<Card >
<Card.Img variant="top" src={Movie.posterUrl} />
<Card.Body>
    <Card.Title>{Movie.title}</Card.Title>
    <Card.Text>
    {Movie.description}
    </Card.Text>
    <Button variant="primary">Play</Button>
</Card.Body>
</Card>
    </div>
)
}

export default Moviecard