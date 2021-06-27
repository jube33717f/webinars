import { all } from 'redux-saga/effects';
import loginSaga from './moduleUser/saga'

export default function* rootSaga(): Generator {
    try {
        yield all(
            loginSaga
        );
    } catch (err) {
        // This is where error monitoring should go
        console.error('error caught in rootsaga::', err);
    }
}