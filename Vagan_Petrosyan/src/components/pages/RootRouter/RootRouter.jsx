import React from 'react';
import {Switch, Route} from "react-router-dom";
import About from "../About";
import Home from "../Home";
import Chats from "../Chats";


const RootRouter = () => {
    return (
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route path="/chats" component={Chats} />
            <Route path="/about" component={About} />
            <Route
                render={() => (
                    <div>
                        <h1>I am 404</h1>
                    </div>
                )}
            />
        </Switch>
    );
};

export default RootRouter;
