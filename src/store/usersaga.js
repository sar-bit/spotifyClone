import { call, put } from "redux-saga/effects";
import {
    signInSuccess,
    palylistSucces,
    spotifySucces
} from "./userredux";
import Api from "../services/ApiCaller";

export function* updatePalylist(api, {payload = {}}) {
    try {
      yield put(palylistSucces(payload));
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  export function* getSpotifyList(api, {payload = {}}) {
    const token = 'token';
    try {
      const result = yield call(Api.callServer, api.getSpotifyList, {token}, true);
      yield put(spotifySucces(result));
    } catch (e) {
      console.log(e, 'errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    } finally {
    }
  }

  export function* signIn(api, {payload = {}}){
    try {
        const result = yield call(Api.callServer, api.signIn,{payload},true)
        yield put(signInSuccess(result));
      } catch (error) {
        console.log(error);
      } finally {
      }
  }