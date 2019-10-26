import React from 'react';
import AppContext from '../../context';
import List from '../../components/ListWrapper/ListWrapper';

const ArticlesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <List items={context.article} />
      )}
    </AppContext.Consumer>
  );
}

export default ArticlesView;