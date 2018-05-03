import React from 'react'
import snow from '../images/snow.jpg'
import me from '../images/me.jpg'
import { Header, Image, Responsive, Grid, Container } from 'semantic-ui-react'
const About = () => {
  return (
    <div
      id="about"
      style={{
        backgroundImage: `url(${snow})`,
        backgroundSize: '100% 125%',

        paddingBottom: '45px',
      }}
    >
      <Container>
        <Responsive minWidth={801}>
          <Grid verticalAlign="middle" columns={2}>
            <Grid.Column>
              <Image
                style={{ paddingTop: '85px' }}
                size="medium"
                centered
                rounded
                src={me}
              />

              <Header.Subheader style={{ padding: '30px' }}>
                Colorado native and an adept and curious junior developer
                passionate about emerging technologies. I strive to learn
                something new everyday and believe in leveraging technology in
                creative ways to solve difficult problems. An Elon Musk admirer
                with a strong interest in blockchain and artificial
                intelligence.
              </Header.Subheader>
            </Grid.Column>
            <Grid.Column>
              <Header
                style={{
                  paddingBottom: '45px',
                  fontSize: '35px',
                  fontFamily: 'Roboto Condensed',
                }}
                textAlign="center"
                size="huge"
                content="Skills"
              />
              <Grid style={{ textAlign: 'center' }} columns={4} divided>
                <Grid.Row>
                  <Grid.Column>Javascript</Grid.Column>
                  <Grid.Column>Blockchain</Grid.Column>
                  <Grid.Column>Node</Grid.Column>
                  <Grid.Column>HTML</Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>CSS</Grid.Column>
                  <Grid.Column>Solidity</Grid.Column>
                  <Grid.Column>Python</Grid.Column>
                  <Grid.Column>React</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>GIT</Grid.Column>
                  <Grid.Column>Microsoft Office</Grid.Column>
                  <Grid.Column>Adobe Suite</Grid.Column>
                  <Grid.Column>Mongo/MySQL</Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive maxWidth={800}>
          <div style={{ paddingTop: '75px' }}>
            <Image size="small" centered circular src={me} />
          </div>
          <Header.Subheader style={{ padding: '30px' }}>
            Colorado native and an adept and curious junior developer passionate
            about emerging technologies. I strive to learn something new
            everyday and believe in leveraging technology in creative ways to
            solve difficult problems. An Elon Musk admirer with a strong
            interest in blockchain and artificial intelligence.
          </Header.Subheader>

          <Header
            style={{
              padding: '45px',
              fontSize: '35px',
              marginBottom: '20px',
            }}
            textAlign="center"
            size="huge"
            content="Skills"
          />
          <Grid
            style={{ textAlign: 'center', marginBottom: '65px' }}
            columns={2}
            divided
          >
            <Grid.Row>
              <Grid.Column>Javascript</Grid.Column>
              <Grid.Column>Blockchain</Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>Node</Grid.Column>
              <Grid.Column>HTML</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>CSS</Grid.Column>
              <Grid.Column>Solidity</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>Python</Grid.Column>
              <Grid.Column>React</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>GIT</Grid.Column>
              <Grid.Column>Microsoft Office</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>Adobe Suite</Grid.Column>
              <Grid.Column>Mongo/MySQL</Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    </div>
  )
}

export default About
