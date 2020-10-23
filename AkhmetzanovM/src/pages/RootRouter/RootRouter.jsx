import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import { fetchProfile } from '../../reducers/profileReducer';
import { getIsProfileFetching } from '../../selectors/profileSelectors';
import About from '../About';
import Chats from '../Chats';
import Home from '../Home';
import Profile from '../Profile';

const RootRouter = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsProfileFetching);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <>
      <Preloader open={isFetching} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/chat/:id" component={Chats}></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default RootRouter;
