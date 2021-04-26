import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Port(){
    return(
        <div>
            <p>Port</p>
            <div class="w-full bg-gray-200">
                <p class="text-2xl">My projects</p>
                <p class="text-base">description</p>
            </div>
            <div class="flex flex-row">
                        <a href="/port/project1"><div class="w-20 h-12 bg-green-100">
                            <p class="text-base">1</p></div></a>
                        <a href="/port/project2"><div class="w-20 h-12 bg-green-100">
                            <p class="text-base">2</p></div></a>
                        <a href="/port/project3"><div class="w-20 h-12 bg-green-100">
                            <p class="text-base">3</p></div></a>
            </div>
            <Router>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                    <Route path="/port/project1">
                        <Project1/>
                    </Route>
                    <Route path="/port/project2">
                        <Project2/>
                    </Route>
                    <Route path="/port/project3">
                        <Project3/>
                    </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
function Project1() {
    return (
        <div>
            <div class="flex flex-row flex-wrap">
                <div class="w-1/2 h-96 bg-red-200">
                    <p class="text-2xl">Project 1</p>
                    <p class="text-2xl">UX designer</p>
                    <p class="text-2xl">I'm study....</p>
                </div>
                <div class="w-1/2 h-96 bg-red-400">
                    <img src="https://via.placeholder.com/300x300" className=""></img>
                </div>
            </div>
        </div>
    );
}
function Project2() {
    return (
        <div>
            <div class="flex flex-row flex-wrap">
                <div class="w-1/2 h-96 bg-red-200">
                    <p class="text-2xl">Project 2</p>
                    <p class="text-2xl">UX designer</p>
                    <p class="text-2xl">I'm study....</p>
                </div>
                <div class="w-1/2 h-96 bg-red-400">
                    <img src="https://via.placeholder.com/300x300" className=""></img>
                </div>
            </div>
        </div>
    );
}
function Project3() {
    return (
        <div>
            <div class="flex flex-row flex-wrap">
                <div class="w-1/2 h-96 bg-red-200">
                    <p class="text-2xl">Project 3</p>
                    <p class="text-2xl">UX designer</p>
                    <p class="text-2xl">I'm study....</p>
                </div>
                <div class="w-1/2 h-96 bg-red-400">
                    <img src="https://via.placeholder.com/300x300" className=""></img>
                </div>
            </div>
        </div>
    );
}

export default Port;