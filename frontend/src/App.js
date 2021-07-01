import { React, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Entry  from './Components/Entry/Entry'
import Welcome from './Components/Page/Welcome';
import Restaurants from './Components/Page/Restaurants/Restaurants';
import Bookings from './Components/Page/Bookings';
import Profile from './Components/Page/Profile';
import NavBar from './Components/Page/NavBar';
import './App.css';


const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const [posting, setPosting] = useState();
  const [token, setToken] = useState()

  if (!token) {
    return (
      <main className='main'>
        <BrowserRouter>
          <Switch>
            <Route path='/'>
              <Entry setToken={setToken} setAccessToken={setAccessToken} />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    )
  }

  return (
    <main  className="App">
      <BrowserRouter>
        
          <Switch>
            <Route exact path='/'>
              <Welcome />
            </Route>
            <Route exact path='/restaurants'>
              <Restaurants accessToken={accessToken}
              setPost={setPosting} posting={posting}/>
            </Route>
            <Route exact path='/bookings'>
              <Bookings accessToken={accessToken}
              setPost={setPosting} posting={posting}/>
            </Route>
            <Route exact path='/profile'>
              <Profile accessToken={accessToken}/>
            </Route>
          </Switch>
          <NavBar/>
        </BrowserRouter>
    </main>
  );
}

export default App;
