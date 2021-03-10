// @flow
import React,{useRef} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import "../components/Home.css"
import {Link} from 'react-router-dom';
import Arrow from './SvgComponents/Arrow';
import UpBtn from './SvgComponents/UpBtn';

const Home = () => {
  return (
      <div className="home">
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Scene pin>
          <div className="panel main">
              <span style={{fontSize:"1.8rem", fontWeight:800}}>Have a Good trip</span>
              <span style={{fontSize:"0.9rem", fontWeight:500}}>Travel makes one modest. You see what a tiny place you occupy in the world.</span>
              <Link to="/store" style={{marginTop:"1rem"}}><span className="fontborder" style={{fontSize:"1.2rem", fontWeight:500}}>NEW IN</span></Link>
              <Arrow width="2rem" height="2rem" color="white"></Arrow>
              
          </div>
        </Scene>
        <Scene pin>
          <div className="panel sub1"><span>Panel2</span>
          <UpBtn width="2.5rem" height="2.5rem" circleColor="#bbdefb" pathColor="white"></UpBtn>
          </div>

        </Scene>
        <Scene pin>
          <div className="panel sub2"><span>Panel3</span>
          <UpBtn width="2.5rem" height="2.5rem" circleColor="#bbdefb" pathColor="white"></UpBtn>
          </div>

        </Scene>
        <Scene pin>
          <div className="panel sub3"><span>Panel4</span>
          <UpBtn width="2.5rem" height="2.5rem" circleColor="#bbdefb" pathColor="white"></UpBtn>
          </div>
        </Scene>
      </Controller>
    </div>
  )

};

export default Home;