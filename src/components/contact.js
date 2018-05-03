import React from 'react'
import {
  Container,
  Segment,
  Icon,
  Header,
  Grid,
  Popup,
  Responsive,
} from 'semantic-ui-react'
import arrow from '../images/arrow.jpg'
const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${arrow})`,
        backgroundSize: '100% 100%',
        paddingTop: '25px',
      }}
    >
      <Container>
        <Header
          style={{
            fontSize: '35px',
            paddingTop: '35px',
            fontFamily: 'Roboto Condensed',
          }}
          textAlign="center"
          size="huge"
          content="Contact"
        />
        <Responsive minWidth={801}>
          <Grid
            style={{ padding: '125px', paddingBottom: '155px' }}
            columns={3}
          >
            <Grid.Row>
              <Grid.Column />
              <Grid.Column />
              <Grid.Column>
                <a href="mailto:daj757@gmail.com" target="_top">
                  <Popup
                    trigger={
                      <Icon
                        className="logo"
                        size="massive"
                        link
                        name="mail outline"
                      />
                    }
                    content="Email me: daj757@gmail.com"
                    position="top left"
                    inverted
                  />
                </a>
                <a href="https://github.com/daj757" target="_blank">
                  <Popup
                    trigger={
                      <Icon
                        size="massive"
                        link
                        name="github"
                        className="logo"
                      />
                    }
                    content="Check out some of my code."
                    position="top left"
                    inverted
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-jimenez-7a56b24b/"
                  target="_blank"
                >
                  <Popup
                    trigger={
                      <Icon
                        size="massive"
                        link
                        name="linkedin"
                        className="logo"
                      />
                    }
                    content="Connect with me."
                    position="top left"
                    inverted
                  />
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive maxWidth={800}>
          <Grid
            style={{ padding: '125px', paddingBottom: '155px' }}
            columns={3}
          >
            <Grid.Row>
              <Grid.Column />
              <Grid.Column />
              <Grid.Column>
                <a href="mailto:daj757@gmail.com" target="_top">
                  <Popup
                    trigger={
                      <Icon
                        style={{ marginBottom: '20px' }}
                        size="huge"
                        link
                        name="mail outline"
                        className="logo"
                      />
                    }
                    content="Email me: daj757@gmail.com"
                    position="top left"
                    inverted
                  />
                </a>
                <a href="https://github.com/daj757" target="_blank">
                  <Popup
                    trigger={
                      <Icon
                        style={{ marginBottom: '20px' }}
                        size="huge"
                        link
                        name="github"
                        className="logo"
                      />
                    }
                    content="Check out some of my code."
                    position="left center"
                    inverted
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-jimenez-7a56b24b/"
                  target="_blank"
                >
                  <Popup
                    trigger={
                      <Icon size="huge" link name="linkedin" className="logo" />
                    }
                    content="Connect with me."
                    position="bottom right"
                    inverted
                  />
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    </div>
  )
}

export default Contact
{
  /* <Segment padded={'very'} textAlign={'center'}>
<a href="mailto:daj757@gmail.com" target="_top">
  <Icon size={'huge'} centered link name="mail outline" />
</a>
<a href="https://github.com/daj757" target="_blank">
  <Icon size={'huge'} link name="github" />
</a>
<a
  href="https://www.linkedin.com/in/daniel-jimenez-7a56b24b/"
  target="_blank"
>
  <Icon size={'huge'} link name="linkedin" />
</a>
</Segment> */
}
