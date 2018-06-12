import { flatten } from 'lodash';
import Landing from '../landing/store/landing.sagas';

export default function* root() {
  yield flatten([
    Landing
  ]);
}