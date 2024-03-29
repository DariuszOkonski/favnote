import React from 'react';
import List from '../../components/ListWrapper/ListWrapper';
import AppContext from '../../context';

const NotesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <List items={context.note} />
      )}
    </AppContext.Consumer>
  );
}

export default NotesView;