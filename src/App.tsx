import './styles/App.css';
import { PhotoOfTheDay } from './views/public/photoOfTheDay.view';
import { Routes, Route, Link } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react';
import { SearchPage } from './views/public/search.view';
import { HomePage } from './views/public/home.view';
import { EpicPhotoSearch } from './views/public/EPIC.view';
import { LoginView } from './views/public/login.view';
import { SearchRover } from './views/public/searchRover.view';
import { SignUp } from './views/public/signUp.view';


function App() {
  return (
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
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sign-up">Sign Up</Link>
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
      </Routes>
    </div>
  )
}

export default App;
