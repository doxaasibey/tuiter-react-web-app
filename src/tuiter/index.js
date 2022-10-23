import React from "react";
import ExploreComponent from "./Explore";
import NavigationSidebar from "./NavigationSideBar";
import WhoToFollowList from "./WhoToFollowList";
import {Routes, Route} from "react-router";
import HomeComponent from "./Home";
import Nav from "../nav";

function Tuiter() {
    return (
        <>
            <Nav />
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    );
}

export default Tuiter

