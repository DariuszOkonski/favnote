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
    twitter: [],
    article: [],
    note: [],
    isModalOpen: false,
  }

  addItem = (e, newItem) => {
    e.preventDefault();

    const list = [...this.state[newItem.type]];
    list.push(newItem);

    this.setState({
      [newItem.type]: list,
    });

    this.closeModal();
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
