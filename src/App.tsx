import React from 'react';
import WebAppContainer from './WebAppContainer';
import { ContainerRoute, DesignConfig } from './WebAppContainer/models';

const About = () => {

  return (
      <div>
          About
      </div>

  )
}

const Users = () => {

  return (
      <div>
          Users
      </div>

  )
}


const Home = () => {

  return (
      <div>
          Home
      </div>

  )
}


const Routes : ContainerRoute[] = [
  {
      path: '/',
      key :'Home',
      label :'Home',      
      component : <Home />        
  },
  {
      path: '/users',
      key :'Users',
      label :'Users',
      component : <Users />        
  },
  {
      path: '/about',
      key : 'About',
      label :'About',
      component : <About />
  }
]

const designConfig : DesignConfig ={
  sideBarMenu : [
    {
      label :'Home',
      routeKey :'Home'
    },
    {
      label : 'Users',
      routeKey : 'Users',
      onClick : () => {
        console.log("usersClick");
      }
    }
  ],
  sideBarHeaderContent : (<div>
    Test
  </div>)
}


function App() {
  return (
    <div>
      <WebAppContainer 
        designConfig = {designConfig}
        routes={Routes}>
        test
      </WebAppContainer>
    </div>
  );
}

export default App;
