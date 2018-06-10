import { fork, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action): SagaIterator {
}

function* triggers(): SagaIterator {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default triggers;