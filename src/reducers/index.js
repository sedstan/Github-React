import { combineReducers } from 'redux';

import profile from './profile';
import repos from './repos';

export default combineReducers({ profile, repos });
