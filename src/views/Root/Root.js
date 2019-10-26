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
    twitter: [{
      image: 'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/square_480/oapgW_Fp_400x400.jpg',
      title: 'Dan Abramov',
      description: 'Working on @reactjs. The demo guy.',
      link: 'https://twitter.com/dan_abramov',
    },
    {
      image: 'https://pbs.twimg.com/profile_images/1166030195834273794/pBb6hjVb_400x400.jpg',
      title: 'Ryan Florence',
      description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
      link: 'https://twitter.com/ryanflorence',
    },
    {
      image: 'https://miro.medium.com/max/2400/1*2ysGC1u4jayrk3Uu3VG6Zg.jpeg',
      title: 'Michael Jackson',
      description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
      link: 'https://twitter.com/mjackson',
    },
    {
      image: 'https://pbs.twimg.com/profile_images/1097518581250613249/4poDd0IC_400x400.png',
      title: 'Kent C. Dodds',
      description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
      link: 'https://twitter.com/kentcdodds',
    },],
    article: [{
      title: 'Dan Abramov',
      description: 'Working on @reactjs. The demo guy.',
      link: 'https://twitter.com/dan_abramov',
    },
    {
      title: 'Ryan Florence',
      description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
      link: 'https://twitter.com/ryanflorence',
    }],
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
