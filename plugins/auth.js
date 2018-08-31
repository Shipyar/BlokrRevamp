import { auth } from '@/plugins/firebase';
import store from '@/store/index';

import { SET_PROFILE, LOGOUT } from '@/store/user/mutations';

auth.onAuthStateChanged((user) => {
  if (user) {
    store.commit(`user/${SET_PROFILE}`, user);
  } else {
    store.commit(`user/${LOGOUT}`);
  }
});