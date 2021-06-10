import React,{useContext,Suspense } from 'react'
import {GlobalStyle} from './styles/GlobalStyles'
import { Router,Redirect } from '@reach/router'
import Logo from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/Navbar'
//import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import {Context} from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(()=>import('./pages/Favs'))

  
const App = () => {  
  const {isAuth} = useContext(Context)
    return (
        <Suspense fallback={<div/>}>
        <Logo/>
        <GlobalStyle />
        <Router>
            <NotFound default />
            <Home path='/' />
            <Home path='/pet/:categoryId' />
            <Detail path='/detail/:detailId' />
            { !isAuth && <NotRegisteredUser path='/login' />}
            { !isAuth && <Redirect from='/favs' to='/login' />}
            { !isAuth && <Redirect from='/user' to='/login' />}
            { isAuth && <Redirect from='/login' to='/' />}
            <Favs path='/favs' />
            <User path='/user' />
        </Router>
        <NavBar />
        </Suspense >
    )
}

export default App
