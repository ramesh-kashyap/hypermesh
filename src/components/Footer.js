import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (

    <div class="uni-body pages-index-index">

      <uni-app class="uni-app--showtabbar uni-app--maxwidth">


        <uni-tabbar
          class="uni-tabbar-bottom" >
          <div class="uni-tabbar" style={{ backgroundColor: 'rgb(68, 67, 70)', backdropFilter: 'none',width: '100%' }}>
            <div class="uni-tabbar-border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}></div>
            <div class="uni-tabbar__item">
            <Link to="/dashboard"style={{ textDecoration: "none", color: "inherit",cursor: "none"  }}>
                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}><img
                    src="/static/tabbar/home.png" /></div>
                  <div  className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/dashboard' ? 'rgb(53, 247, 231)' : 'rgba(255, 255, 255, 0.5)',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    Home </div>
                </div>
              </Link>
            </div>
            <div class="uni-tabbar__item">
            <Link to="/trade"style={{ textDecoration: "none", color: "inherit",cursor: "none" }}>

                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}><img
                    src=" /static/tabbar/trade.png" /></div>
                  <div  className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/trade' ? 'rgb(53, 247, 231)' : 'rgba(255, 255, 255, 0.5)',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    Trade </div>
                </div>
                </Link>
            </div>
            <div class="uni-tabbar__item">
            <Link to="/assets"style={{ textDecoration: "none", color: "inherit", cursor: "none" }}>

                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}><img
                    src=" /static/tabbar/assets.png" /></div>
                  <div  className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/assets' ? 'rgb(53, 247, 231)' : 'rgba(255, 255, 255, 0.5)',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    Assets </div>
                </div>
              </Link>
            </div>
            <div class="uni-tabbar__item">
            <Link to="/server"style={{ textDecoration: "none", color: "inherit",cursor: "none" }}>

                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}><img
                    src=" /static/tabbar/server.png" /></div>
                  <div className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/server' ? 'rgb(53, 247, 231)' : 'rgba(255, 255, 255, 0.5)',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    Server </div>
                </div>
              </Link>
            </div>
          </div>  
          <div class="uni-placeholder" style={{ height: '65px' }}></div>
        </uni-tabbar>
      </uni-app>
    </div>  
  );
}