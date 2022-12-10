import React, {useEffect, useState} from 'react';
import {Store} from './redux/store';
import {Provider} from 'react-redux';
import AssignmentRouter from './router';

const App = () => {
  return (
    <Provider store={Store}>
      <AssignmentRouter />
    </Provider>
  );
};

export default App;
