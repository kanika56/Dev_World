import {combineReducers} from "redux";
import * as developerReducer from './developer.reducer';
import * as userReducer from './user.reducer';
import * as alertReducer from './alert.reducer';
import * as profileReducer from './profile.reducer';
import * as postReducer from './post.reducer';

export const rootReducer = combineReducers({
    [developerReducer.developerFeatureKey] : developerReducer.reducer,
    [userReducer.usersFeatureKey] : userReducer.reducer,
    [alertReducer.alertFeatureKey] : alertReducer.reducer,
    [profileReducer.profileFeatureKey] : profileReducer.reducer,
    [postReducer.postsFeatureKey] : postReducer.reducer
});
