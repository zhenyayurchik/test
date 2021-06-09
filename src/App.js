import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROOT_PATH, WELCOME_PATH } from 'constants/paths';
import { WelcomePage, HomePage } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROOT_PATH} component={HomePage} />
        <Route path={WELCOME_PATH} component={WelcomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
