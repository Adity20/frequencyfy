import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AuthComponent from './pages/Auth';
import Landing from './components/Landing';
import DashboardPage from './components/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/auth' element={<AuthComponent />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/Dashboard' element={<DashboardPage />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
