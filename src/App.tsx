import React from 'react';

import Navigation from './components/Navigation';
import Content from './components/Content';

interface IState {
  close: boolean
}
class App extends React.Component<{}, IState> {
  state: IState = {
    close: false
  }

  handleClick = (): void => {
    this.setState({ close: !this.state.close })
  }
  render() {
    const { close } = this.state;
    return (
      <React.Fragment>
        <Navigation close={close} handleClick={this.handleClick} />
        <Content close={close} />
      </React.Fragment>
    )
  }
}
export default App;