import React, { Component } from 'react';
import AppContext from '../../context';
import PropTypes from 'prop-types';
import styles from '../css/Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note',
}

const descriptions = {
  twitter: 'favorite Twitter account',
  article: 'Article',
  note: 'Note',
}

class Form extends Component {
  state = {
    type: types.twitter,
    title: '',
    link: '',
    image: '',
    description: '',
  }

  handleRadioButtonChange = (type) => {
    this.setState({
      type: type,
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { type, title, link, image, description } = this.state;

    return (

      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[type]}</Title>

            <form
              className={styles.form__form}
              onSubmit={context.addItem}
            >

              <div className={styles.inputWrapper}>
                <label className={styles.lableRadio} htmlFor={types.twitter}>
                  Twitter
                  <input className={styles.inputRadio}
                    id={types.twitter}
                    type="radio"
                    checked={type === types.twitter}
                    onChange={() => this.handleRadioButtonChange(types.twitter)}
                  />
                </label>

                <label className={styles.lableRadio} htmlFor={types.article}>
                  Article
                  <input className={styles.inputRadio}
                    id={types.article}
                    type="radio"
                    checked={type === types.article}
                    onChange={() => this.handleRadioButtonChange(types.article)}
                  />
                </label>

                <label className={styles.lableRadio} htmlFor={types.note}>
                  Notes
                  <input className={styles.inputRadio}
                    id={types.note}
                    type="radio"
                    checked={type === types.note}
                    onChange={() => this.handleRadioButtonChange(types.note)}
                  />
                </label>
              </div>

              <Input
                onChange={this.handleInputChange}
                value={title}
                name="title"
                label={type === types.twitter ? "Twitter Name" : "Title"}
                maxLength={30}
              />

              {type !== types.note ?
                <Input
                  onChange={this.handleInputChange}
                  value={link}
                  name="link"
                  label={type === types.twitter ? "Twitter Link" : "Link"}
                /> : null
              }

              {(type === types.twitter) ?
                <Input
                  onChange={this.handleInputChange}
                  value={image}
                  name="image"
                  label="Image"
                /> : null
              }

              <Input
                onChange={this.handleInputChange}
                value={description}
                tag="textarea"
                name="description"
                label="Description"
              />

              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>

    );
  }
}

Form.propTypes = {
  submitFn: PropTypes.func,
}

export default Form;