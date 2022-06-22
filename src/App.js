import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {withRouter} from "./components/Profile/ProfileContainer";
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./hoc/WithSuspense";
import Error from "./components/Error/Error";

const Login = withSuspense(React.lazy(() => import('../src/components/Login/Login')));
const DialogsContainer = withSuspense(React.lazy(() => import('./components/Dialogs/DialogsContainer')));
const ProfileContainer = withSuspense(React.lazy(() => import('./components/Profile/ProfileContainer')));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some error occurred')
        console.error('promiseRejectionEvent', promiseRejectionEvent)
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/" element={<Navigate to='/login'/>}/>
                        <Route path='/profile/' element={<ProfileContainer/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>

                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>

                        <Route path='/login' element={<Login/>}/>

                        <Route path='/404' element={<Error/>}/>
                        <Route path='*' element={<Navigate to='/404'/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
