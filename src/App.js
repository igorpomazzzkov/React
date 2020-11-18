import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
              <Route 
                path="/profile" 
                render={() => <Profile
                    dispatch={props.dispatch}
                    profilePage={props.state.profilePage}/>}
              />
              <Route 
                path="/dialogs" 
                render={() => <Dialogs data={props.state.messagesPage} dispatch={props.dispatch} />}/>
            </div>
            <Footer className="footer"/>
        </div>
    </BrowserRouter>
  )
}

export default App;
