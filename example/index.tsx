import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KEButton, KECard, Thing } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <KEButton text={'Example Button'}></KEButton>
      <KECard text={'Example Card'}></KECard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
