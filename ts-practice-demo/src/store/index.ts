import { createStore } from 'vuex'
import User from "@/views/class/User";

interface IState{
  userList: User[]
}

export default createStore<IState>({
  state: {
    userList: []
  },
  getters: {
    getUserList (state): User[] {
      return state.userList
    }
  },
  mutations: {
    addUser (state, user: User) {
      state.userList.push(user)
    },
    uploadUserList (state, userList: User[]) {
      state.userList = userList
    }
  },
  actions: {
    addUser ({commit}, user: User) {
      commit('addUser', user)
    },
    uploadUserList ({commit}, userList: User[]) {
      commit('uploadUserList', userList)
    }
  },
  modules: {
  }
})
