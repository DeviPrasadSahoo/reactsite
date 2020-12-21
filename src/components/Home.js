import React from "react";
import TopHeader from "./Topheader";
import Contact from "./Contact";
import AllSkills from "./Allskills";
import Error from "./Pagenotfound";
import { Route, Router, Switch } from "react-router-dom";
import Portfolio from "./Portfolio";
import Myhome from "./Myhome";

const Home = () => {
    return(
        <div className="main_page">
            <TopHeader />
            <Switch>
                <Route exact path="/" component={Myhome}></Route>
                <Route exact path="/portfolio" component={Portfolio}></Route>
                <Route exact path="/skills" component={AllSkills}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route component={Error}></Route>
            </Switch>
        </div>
    );
};

export default Home;