import './styles/App.css';
import { PhotoOfTheDay } from './views/public/photoOfTheDay.view';
import { Routes, Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import { HomePage } from './views/public/home.view';
import { EpicPhotoSearch } from './views/public/EPIC.view';
import { SearchRover } from './views/public/searchRover.view';
import { useState, useEffect } from 'react';

import UserContext from "./components/user-context";
import { getAuth } from 'firebase/auth';
import { SavedImages } from './views/private/saved.view';
import { Account } from './components/account.com';
import { NotFound } from './views/public/404.view';

function App() {
  const auth = getAuth();
  const [user, setUser] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    setSignedIn(false)
    const name = window.localStorage.getItem('space-name')
    if (name) {
      setSignedIn(true)
    }
    setUser(String(name))
  })

  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      <div>
        <header>
          <Menu stackable inverted>
            <Menu.Menu position='left'>
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/photo-of-the-day">Photo of the day</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/epic">EPIC</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/rover">Rovers</Link>
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
              {signedIn ?
                <Menu.Item>
                  <Link to="/saved">Saved Images</Link>
                </Menu.Item>
                : null}
              <Menu.Item>
                <Link to="/account">Account</Link>
              </Menu.Item>
              {signedIn ?
                <Menu.Item>
                  <span>Welcome: {user}</span>
                </Menu.Item>
                : null}

            </Menu.Menu>
          </Menu>
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/rover' element={<SearchRover />} />
          <Route path='/epic' element={<EpicPhotoSearch />} />
          <Route path='/photo-of-the-day' element={<PhotoOfTheDay />} />
          <Route path="/account" element={<Account />} />
          <Route path="/saved" element={<SavedImages />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App;
