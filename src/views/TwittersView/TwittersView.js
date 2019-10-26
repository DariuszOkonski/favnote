import React from 'react';
import List from '../../components/ListWrapper/ListWrapper';
import AppContext from '../../context';

const TwittersView = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <List items={context.twitter} />
      )}
    </AppContext.Consumer>
  );
}

export default TwittersView;