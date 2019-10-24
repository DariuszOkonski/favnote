import React, { Component } from 'react';
import './index.css';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';

const initialStateItems = [{
  image: "https://res.cloudinary.com/awesomereact/image/youtube/w_460,h_259,c_fill/dRo_egw7tBc.jpg",
  name: 'Dan Abramov',
  // description: 'Working on @reactjs. The demo guy.',
  twitterLink: 'https://twitter.com/dan_abramov',
},
{
  image: "https://www.tate.org.uk/art/images/research/2148_10.jpg",
  name: 'Ryan Florence',
  description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
  twitterLink: 'https://twitter.com/ryanflorence',
},
]

class App extends Component {
  state = {
    items: [...initialStateItems],
  }

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    }

    const items = [...this.state.items, newItem];

    this.setState({
      items,
    })

    e.target.reset();
  }

  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }

}

export default App;
