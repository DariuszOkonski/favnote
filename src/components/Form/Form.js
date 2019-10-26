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
    activeOption: types.twitter,
  }

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    })
  }

  render() {
    const { activeOption } = this.state;

    return (

      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[activeOption]}</Title>

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
                    checked={activeOption === types.twitter}
                    onChange={() => this.handleRadioButtonChange(types.twitter)}
                  />
                </label>

                <label className={styles.lableRadio} htmlFor={types.article}>
                  Article
              <input className={styles.inputRadio}
                    id={types.article}
                    type="radio"
                    checked={activeOption === types.article}
                    onChange={() => this.handleRadioButtonChange(types.article)}
                  />
                </label>

                <label className={styles.lableRadio} htmlFor={types.note}>
                  Notes
              <input className={styles.inputRadio}
                    id={types.note}
                    type="radio"
                    checked={activeOption === types.note}
                    onChange={() => this.handleRadioButtonChange(types.note)}
                  />
                </label>
              </div>

              <Input
                name="name"
                label={activeOption === types.twitter ? "Twitter Name" : "Title"}
                maxLength={30}
              />

              {activeOption !== types.note ?
                <Input
                  name="link"
                  label={activeOption === types.twitter ? "Twitter Link" : "Link"}
                /> : null
              }

              {(activeOption === types.twitter) ?
                <Input
                  name="image"
                  label="Image"
                /> : null
              }

              <Input
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