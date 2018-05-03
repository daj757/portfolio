import React from 'react'
import { Container, Header, Card, Image } from 'semantic-ui-react'
import blockchain from '../images/blockchain.jpg'
import sea from '../images/restaurant.png'
import sign from '../images/sign.jpg'
import hamburger from '../images/hb.png'
import groupie from '../images/groupie.png'
import mine from '../images/jewel.png'
import code from '../images/code.jpg'

const Portfolio = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${code})`,
        backgroundSize: '100% 100%',
        paddingBottom: '55px',
      }}
      id="portfolio"
    >
      <Container>
        <Header
          inverted
          style={{
            padding: '45px',
            fontSize: '35px',
            marginBottom: '20px',
          }}
          textAlign="center"
          size="huge"
          content="Portfolio"
        />
        <Card.Group stackable={true} itemsPerRow={3}>
          <Card raised={true}>
            <Image
              href="https://github.com/daj757/ERC20Exchange"
              target="_blank"
              centered
              src={sign}
            />
            <Card.Content>
              <Card.Header>Decentralized Crypto Exchange</Card.Header>
              <Card.Meta>Blockchain application</Card.Meta>
              <Card.Description>
                An exchange built on the ethereum platform. Built using truffle,
                ganache-cli and metamask.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised={true}>
            <Image
              href="https://nameless-beyond-12107.herokuapp.com/"
              target="_blank"
              centered
              src={blockchain}
            />
            <Card.Content>
              <Card.Header>Decentralized Crowd Funding Site</Card.Header>
              <Card.Meta>Blockchain Application</Card.Meta>
              <Card.Description>
                A kickstarter like web application built on the ethereum
                platform using smart contracts. Built using Web3, react,
                ganache-cli, Ethereum blockchain and metamask.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised={true}>
            <Image
              target="_blank"
              href="https://hamburgerbuilder.firebaseapp.com/"
              src={hamburger}
            />
            <Card.Content>
              <Card.Header>Burger Builder</Card.Header>
              <Card.Meta>Web application</Card.Meta>
              <Card.Description>
                Interactive web application that allows you to build and see the
                burger you are about to order. Built using react, react-router,
                firebase, javascript.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised={true}>
            <Image
              src={sea}
              href="https://daj757.github.io/seaFood/"
              target="_blank"
            />
            <Card.Content>
              <Card.Header>SeaCrest Restaurant</Card.Header>
              <Card.Meta>Web application</Card.Meta>
              <Card.Description>
                A beautiful site used to display the best what this restaurant
                has to offer. Built using html, javascript, css.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised={true}>
            <Image
              src={groupie}
              href="https://daj757.github.io/groupieApp/"
              target="_blank"
            />
            <Card.Content>
              <Card.Header>Groupie</Card.Header>
              <Card.Meta>Web application</Card.Meta>
              <Card.Description>
                A one stop search site for concert goers. Built using a variety
                of API integrations, html, javascript, css.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised={true}>
            <Image
              src={mine}
              href="https://daj757.github.io/week-4-game/"
              target="_blank"
            />
            <Card.Content>
              <Card.Header>Jewel Collectors Game</Card.Header>
              <Card.Meta>Web application</Card.Meta>
              <Card.Description>
                A fun math game. Try to match the jewels' value to the given
                number. Built using javascript, html and css.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </div>
  )
}

export default Portfolio
