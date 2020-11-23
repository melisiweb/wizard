import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@app/pages/Home';
import Items from '@app/pages/Items';
import ItemDetails from '@app/pages/ItemDetails';
import Reviews from '@app/pages/Reviews';
import ReviewDetails from '@app/pages/ReviewDetails';
import NotFound from '@app/pages/NotFound';
import ReviewCreate from '@app/pages/ReviewCreate';
import { globals } from './styles';
import Header from '@app/components/Header';

const App = () => {
  return (
    <div className={globals}>
      <Header />
      <Switch>
        <Route path='/' exact><Home /></Route>

        <Route path='/items/:itemId/reviews/create/:stepId?'><ReviewCreate /></Route>
        <Route path='/items/:itemId/reviews/:reviewId'><ReviewDetails /></Route>
        <Route path='/items/:itemId/reviews'><Reviews /></Route>
        <Route path='/items/:itemId/'><ItemDetails /></Route>
        <Route path='/items/'><Items /></Route>

        <Route path='*'><NotFound /></Route>
      </Switch>
    </div>
  );
};

export default App;
