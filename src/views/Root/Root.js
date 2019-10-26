import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../context';
import './index.css';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

class Root extends Component {
  state = {
    items: {
      twitters: [],
      articles: [],
      notes: [],
    },
    isModalOpen: false,
    name: 'Dariusz',
    sureName: 'Okonski',
  }

  addItem = (e) => {
    e.preventDefault();
    console.log('It works!!!');


    // const newItem = {
    //   name: e.target[0].value,
    //   twitterLink: e.target[1].value,
    //   image: e.target[2].value,
    //   description: e.target[3].value,
    // }

    // const items = [...this.state.items, newItem];

    // this.setState({
    //   items,
    // })

    // e.target.reset();
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    }

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />

          <h1>Hello world</h1>

          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>

          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }

}

export default Root;
