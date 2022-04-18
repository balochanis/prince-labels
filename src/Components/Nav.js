import React,{useState} from 'react'
import { Container,Nav } from 'react-bootstrap';

const styles = 
{
    nav:
    {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0.75rem 1rem',

    },
    base: {
        color: '#fff',
      },
    
}

function Navigation() {

  return (
    <Container style={styles.nav}>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>

        
        
    </Container>
  )
}

export default Navigation