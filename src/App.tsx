import './styles/App.css';
import { PhotoOfTheDay } from './views/public/photoOfTheDay.view';
import { Routes, Route, Link } from 'react-router-dom'
import { Button, Icon, Menu } from 'semantic-ui-react';
import { SearchPage } from './views/public/search.view';
import { HomePage } from './views/public/home.view';
import { EpicPhotoSearch } from './views/public/EPIC.view';
import { LoginView } from './views/public/login.view';
import { SearchRover } from './views/public/searchRover.view';
import { SignUp } from './views/public/signUp.view';
import { useState, useContext, createContext, useEffect, useReducer } from 'react';

import UserContext from "./components/user-context";
import { getAuth } from 'firebase/auth';
import { SavedImages } from './views/private/saved.view';

function App() {
  const auth = getAuth()
  const [user, setUser] = useState(auth.currentUser?.uid);
  useEffect(() => {
    const test = window.localStorage.getItem('space-name')
    setUser(String(test))
  })

  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      <div>
        <header>
          <Menu>
            <Menu.Menu position='left'>
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/search">Search</Link>
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
              <Menu.Item>
                <Link to="/saved">Saved Images</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/sign-up">Account</Link>
              </Menu.Item>
              <Menu.Item>
                <span>Welcome: {user}</span>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/rover' element={<SearchRover />} />
          <Route path='/epic' element={<EpicPhotoSearch />} />
          <Route path='/photo-of-the-day' element={<PhotoOfTheDay />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/saved" element={<SavedImages />} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App;
