import {all, takeEvery} from 'redux-saga/effects';
import API from '../services/Api';
import {
  signIn,
  updatePalylist,
  getSpotifyList
} from './usersaga';

//import {changeform, changescreen} from './screentrackersaga';

const api = API.create();
export default function* root() {
  yield all([
  //  takeEvery('ChangeScreenCalled', changescreen, api),
  //  takeEvery('ChangeFormCalled', changeform, api),
    takeEvery('signIncalled', signIn, api),
    takeEvery('updatePlailistCalled', updatePalylist, api),
    takeEvery('getSpotifyListCalled',getSpotifyList,api)
  ]);
}
