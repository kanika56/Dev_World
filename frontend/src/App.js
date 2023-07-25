import React , {useEffect}from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Navbar from "./layouts/navbar";
import Home from "./layouts/home";
import DeveloperList from "./modules/developerList";
import UserRegister from "./modules/users/userRegister";
import UserLogin from "./modules/users/userLogin";
import DeveloperDetails from "./modules/developerDetails";
import Alert from "./layouts/alert";
import Dashboard from "./modules/profiles/dashboard";
import * as userActions from './redux/user.actions';
import {useDispatch} from "react-redux";
import EditProfile from "./modules/profiles/editProfile";
import CreateProfile from "./modules/profiles/createProfile";
import AddExperience from "./modules/profiles/addExperience";
import AddEducation from "./modules/profiles/addEducation";
import PostList from "./modules/postList";
import PostDetails from "./modules/postDetails";
import PrivateRoute from "./util/privateRoute";
import Error from './layouts/error'
let App = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getUserInfo());
    }, []);

  return (
    <React.Fragment>
      <Router>
          <Navbar/>
          <Alert/>
          <Routes>
            
              <Route exact path="/" component={Home}/> 
              <Route exact path="/profiles/dashboard" element={<PrivateRoute component={Dashboard} />}/>
              <Route exact path="/developers" component={DeveloperList}/>
              <Route exact path="/developers/:developerId" component={DeveloperDetails}/>
              <Route exact path="/users/register" component={UserRegister}/>
              <Route exact path="/users/login" component={UserLogin}/>
              <Route exact path="/profiles/edit-profile" element={<PrivateRoute component={EditProfile} />}/>
              <Route exact path="/profiles/create-profile" element={<PrivateRoute component={CreateProfile} />}/>
              <Route exact path="/profiles/add-experience" element={<PrivateRoute component={AddExperience} />}/>
              <Route exact path="/profiles/add-education" element={<PrivateRoute component={AddEducation} />}/>
              <Route exact path="/posts/list" element={<PrivateRoute component={PostList} />}/>
              <Route exact path="/posts/:postId" element={<PrivateRoute component={PostDetails} />}/>
              <Route component={Error}/>
          </Routes>
      </Router>

    </React.Fragment>
  );
}
export default App;
