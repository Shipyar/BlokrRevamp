import { auth } from '@/plugins/firebase';

import { SET_PROFILE, LOGOUT } from '@/store/user/mutations';

export default ({store}) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      store.commit(`user/${SET_PROFILE}`, user)
    } else {
      store.commit(`user/${LOGOUT}`)
    }
  })
}
