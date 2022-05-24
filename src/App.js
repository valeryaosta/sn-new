import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = ({ store, /*state, dispatch, */ }) => {

    // const {dialogsPage, profilePage, sidebar} = state
    // const {dialogs, messages, newMessageText} = dialogsPage
    // const {posts, newPostText} = profilePage
    const {friends} = store.getState().sidebar

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={friends}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer store={store}/>}/>
                    <Route path='/profile/*' element={<Profile store={store}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>

                    <Route path='/404' element={<h1>Something went wrong...</h1>}/>
                    <Route path='*' element={<Navigate to='/404'/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
