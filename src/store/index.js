import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import global from './global';
import user from './user';
import dac from './dac';
import ui from './ui';


Vue.use(Vuex);

  const store = new Vuex.Store({
    modules: {
      global,
      user,
      dac,
      ui

    },
    plugins: [
      createPersistedState({
        key: 'global',
        paths: [
          'global.active_network',
          'global.dapp_version'
        ]
      }),
      createPersistedState({
        key: 'user',
        paths: [
          'user.settings',
          'user.language',
          'user.msigIsSeenCache'
        ]
      }),
      createPersistedState({
        key: 'ui',
        paths: [
          'ui.activeTheme',
        ]
      })
    ]
  })

  export default store;

