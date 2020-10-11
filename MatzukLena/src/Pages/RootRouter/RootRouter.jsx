import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Preloader from '../../Components/Preloader';
import { asyncGetProfile } from '../../reducers/profileReducer';
import { getIsProfileFetching } from '../../selectors/profileSelectors';
import About from '../About';
import Chats from '../Chats';
import Home from '../Home';

const RootRouter = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector(getIsProfileFetching);
  
    useEffect(() => {
      dispatch(asyncGetProfile());
    }, [dispatch]);

    return (
        <>
        <Preloader open={isFetching} />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/chats/:id" component={Chats} />
            <Route path="/about">
                <About />
            </Route>
            <Route
                render={() => (
                    <div>
                        <h1>I am 404</h1>
                    </div>
                )}
            />
        </Switch>
        </>
    );
};

export default RootRouter;