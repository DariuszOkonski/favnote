import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';

const initialStateItems = [{
  image: "https://res.cloudinary.com/awesomereact/image/youtube/w_460,h_259,c_fill/dRo_egw7tBc.jpg",
  name: 'Dan Abramov',
  description: 'Working on @reactjs. The demo guy.',
  twitterLink: 'https://twitter.com/dan_abramov',
},
]

class Root extends Component {
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
      <BrowserRouter>
        <>
          <h1>Hello world</h1>

          <Route exact path="/" component={TwittersView} />
          <Route path="/articles" component={ArticlesView} />
          <Route path="/notes" component={NotesView} />
        </>
      </BrowserRouter>
    );
  }

}

export default Root;
