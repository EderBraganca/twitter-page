import React from 'react';
import Header from '../../components/Header/Header.js';
import SideBarLeft from '../../components/SideBarLeft/SideBarLeft.js';
import SideBarRight from '../../components/SideBarRight/SideBarRight.js';
import Feed from '../../components/Feed/Feed.js';

import './Home.css';

class Home extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <SideBarLeft />
          <SideBarRight />
          <Feed />
        </div>
    );
    }
}

//
export default Home;
