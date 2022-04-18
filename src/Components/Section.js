import React from 'react'
import { Container } from 'react-bootstrap'
import Card from './Card';
import Stickers from './Stickers';
const styles = {
  container:
  {
    padding : '2rem 0'
  }
}

function Section(props) {
  return (
    <Container style={styles.container}>
      <section>
        <header className="section-header">
        <div className="section-text">
          <h2>{props.secTitle}</h2>
        </div>
        </header>
        <Stickers/>
        
      </section>
    </Container>
   
  )
}

export default Section