import * as types from './types'
import vue from 'vue'

export const state = {
    notas: []
}

export const mutations = {
  [types.SYNC_NOTAS] (state, params) {
      state.notas.push(params)
  },
  [types.INSERT_TRADE] (state, params) {
      state.dashboard.trades.push(params)
  },
  [types.UPDATE_TRADE] (state, params) {
    vue.set(state.dashboard.trades, params.index, params)
  },
  [types.REMOVE_TRADE] (state, params) {
    vue.delete(state.dashboard.trades, params)
  },
  [types.REMOVE_ALL_TRADES] (state) {
    vue.set(state.dashboard, 'trades', [])
  },
  [types.INSERT_SESSION] (state, params) {
    let data = state.dashboard.sessions
    data.push(params)

    vue.set(state.dashboard, 'sessions', data)
  },
  [types.REMOVE_ALL_SESSION] (state) {
    vue.set(state.dashboard, 'sessions', [])
  }
}
