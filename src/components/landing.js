import React from 'react'
import { Container, Image, Responsive, Header } from 'semantic-ui-react'
import desktop from '../images/desktop.jpg'
import mobile from '../images/mobile.jpg'

const Landing = () => {
  return (
    <div id="landing" style={{ position: 'relative' }}>
      <Responsive minWidth={501}>
        <Image src={desktop} />
        <Header
          size="huge"
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            textTransform: 'uppercase',
            transform: 'translate(-50%, -50%)',
            color: 'black',
            opacity: '0.65',
            textAlign: 'center',
            fontSize: '100px',
            fontFamily: 'Roboto Condensed',
          }}
        >
          Web Developer
        </Header>
      </Responsive>
      <Responsive maxWidth={500}>
        <Image src={mobile} />
      </Responsive>
    </div>
  )
}

export default Landing
