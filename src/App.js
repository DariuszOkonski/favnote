import React, { Component } from 'react';
import './index.css';
import ListWrapper from './components/ListWrapper/ListWrapper';

const initialStateItems = [{
  image: "https://www.tate.org.uk/art/images/research/2148_10.jpg",
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
{
  image: "https://www.tate.org.uk/art/images/research/2148_10.jpg",
  name: 'Michael Jackson',
  description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
  twitterLink: 'https://twitter.com/mjackson',
},
{
  image: "https://www.tate.org.uk/art/images/research/2148_10.jpg",
  name: 'Kent C. Dodds',
  description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
  twitterLink: 'https://twitter.com/kentcdodds',
},
]

class App extends Component {
  state = {
    items: [...initialStateItems],
  }

  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
      </div>
    );
  }

}

export default App;
