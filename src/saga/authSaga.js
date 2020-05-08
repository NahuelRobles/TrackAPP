import {call, put, takeLatest, select} from 'redux-saga/effects';
import {actors, LoginSuccess, LoginError} from '../redux/reducers/user';
import {signIn, userData, searchProject} from '../config/firebaseClient'

function* LoginSaga({email,password}) {
  try {
    const response = yield call(signIn,email, password);
    if (response.uid){
      const user = yield call(userData,response.uid);
      yield call(searchProject, response.uid)
      yield put(LoginSuccess({uid: response.uid, user}));
    }else{
      yield put(LoginError(response));
    }
  } catch (error) {
    console.log("ErrorSagaLogin", error)
  }
}

function* mainSaga() {
  console.log('into Saga');
  try {
    yield takeLatest(actors.LoginSuccess.type, LoginSaga);
  } catch (err) {
    console.log('ERRO', err);
  }
}

export default mainSaga;
