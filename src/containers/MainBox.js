import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'
import { cocktails } from '../data.js'

class MainBox extends React.Component {

  state = {
    page: 'profile'
  }

  pageSelect = (event) => {
    this.setState({
      page: event.target.id
    })
  }

  renderPageSelection = () => {
    switch (this.state.page) {
    case 'profile':
      return <Profile />
      break;
    case 'photo':
      return <Photos />
      break;
    case 'cocktail':
      return <Cocktails />
      break;
    case 'pokemon':
        return <Pokemon />
      break;
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar onPageSelect={this.pageSelect} />
        {this.renderPageSelection()}
      </div>
    )
  }

}

export default MainBox
