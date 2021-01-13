import React, { useEffect } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { setConfigDetails } from './configslice';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from './rootReducer';
// import { consts } from '../utils'
import Blog from '../view/Demo_Blog/BlogMain'
function App() {
  return(
    <Blog />
  )
  // const dispatch = useDispatch();

  // if (window.innerWidth <= 575) {
  //   dispatch(setConfigDetails({ isMobile: true }));
  // } else {
  //   dispatch(setConfigDetails({ isMobile: false }));
  // }
  // const isMobile = useSelector((state: RootState) => state.config.isMobile);

  // Configure subdomain based routing
  // const hostname = window.location.hostname;
  // let subdomainType: 'BLOG' | '' = '';
  // const domainParts = hostname.split('.');
  // if (domainParts.length > 1) {
  //   const subdomain = domainParts[0];
  //   if (subdomain.indexOf('blog') >= 0) {
  //     subdomainType = 'BLOG';
  //     dispatch(setConfigDetails({ subdomainType }));
  //   dispatch(setConfigDetails({ subdomainType }));
  // }

  // if (!subdomainType)
  //   return (
  //     <>
  //       <Switch>
  //         <Route path={consts.BLOG_HOME_PATH}>
  //           <Blog />
  //         </Route>
  //       </Switch>
  //     </>
  //   );
  // }
}

export default App;
