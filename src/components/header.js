import React, { Component } from 'react'
import { Menu, Segment, Responsive, Dropdown } from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'Daniel Jimenez' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Responsive minWidth={501}>
          <Menu
            style={{
              backgroundColor: 'black',
              fontFamily: 'Roboto Condensed',
            }}
            inverted
            pointing
            secondary
            fixed="top"
          >
            <Menu.Item
              name="Daniel Jimenez"
              active={activeItem === 'Daniel Jimenez'}
              onClick={this.handleItemClick}
              link
              header
            />

            <Menu.Menu position="right">
              <Menu.Item
                name="About Me"
                active={activeItem === 'About Me'}
                onClick={this.handleItemClick}
                href="#about"
              />
              <Menu.Item
                name="Portfolio"
                active={activeItem === 'Portfolio'}
                onClick={this.handleItemClick}
                href="#portfolio"
              />
              <Menu.Item
                name="Contact"
                active={activeItem === 'Contact'}
                onClick={this.handleItemClick}
                href="#contact"
              />
              <Menu.Item
                name="Resume"
                active={activeItem === 'Resume'}
                onClick={this.handleItemClick}
                target="_blank"
                href="https://drive.google.com/file/d/1swKDbysEKHsd_fOtTThMMsF5L1ph1GO-/view?usp=sharing"
              />
            </Menu.Menu>
          </Menu>
        </Responsive>
        <Responsive maxWidth={500}>
          {' '}
          <Menu
            style={{
              backgroundColor: 'black',
              fontFamily: 'Roboto Condensed',
            }}
            inverted
            pointing
            secondary
            fixed="top"
          >
            <Menu.Menu position="left">
              <Dropdown item icon="bars">
                <Dropdown.Menu>
                  <Dropdown.Item
                    text="About Me"
                    active={activeItem === 'About Me'}
                    onClick={this.handleItemClick}
                    href="#about"
                  />
                  <Dropdown.Item
                    text="Portfolio"
                    active={activeItem === 'Portfolio'}
                    onClick={this.handleItemClick}
                    href="#portfolio"
                  />
                  <Dropdown.Item
                    text="Contact"
                    active={activeItem === 'Contact'}
                    onClick={this.handleItemClick}
                    href="#contact"
                  />
                  <Dropdown.Item
                    text="Resume"
                    active={activeItem === 'Resume'}
                    onClick={this.handleItemClick}
                    target="_blank"
                    href="https://drive.google.com/file/d/1swKDbysEKHsd_fOtTThMMsF5L1ph1GO-/view?usp=sharing"
                  />
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item
                position="right"
                name="Daniel - Web Developer"
                active={activeItem === 'Daniel Jimenez'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Responsive>
      </div>
    )
  }
}
