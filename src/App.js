import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({state, addPost, updateNewPostText, addMessage, updateMessage, dispatch}) => {

    const {dialogsPage, profilePage, sidebar} = state
    const {dialogs, messages, newMessageText} = dialogsPage
    const {posts, newPostText} = profilePage
    const {friends} = sidebar

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={friends}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<Dialogs dialogs={dialogs}
                                                               messages={messages}
                                                               newMessageText={newMessageText}
                                                               addMessage={addMessage}
                                                               updateMessage={updateMessage}
                    />}
                    />
                    <Route path='/profile/*' element={<Profile posts={posts}
                                                               newPostText={newPostText}
                                                               // addPost={addPost}
                                                               // updateNewPostText={updateNewPostText}
                                                               dispatch={dispatch}
                    />}
                    />
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
