<template>
      <q-collapsible group="main-menu-sub" v-if="getIsCustodian">
        <template slot="header">
          <q-item-side icon="mdi-folder-star" color="text2"/>
          <q-item-main :label="$t('default.custodian_tools')" class="text-text1"/>
        </template>
        <div class="bg-bg1">
          <q-item class="q-pl-lg" link to="/custodian/create-msigs">
            <q-item-main label="Create Msigs" class="text-text1 text-weight-thin" />
          </q-item>
          <q-item class="q-pl-lg" link to="/custodian/review-msigs">
            <q-item-main label="Vote Msigs" class="text-text1 text-weight-thin" />
          </q-item>
          <q-item class="q-pl-lg" link to="/custodian/review-worker-proposals">
            <q-item-main label="Vote Worker Proposals" class="text-text1 text-weight-thin" />
          </q-item>
          <q-item class="q-pl-lg" link to="/custodian/my-payments">
            <q-item-main label="My Payments" class="text-text1 text-weight-thin" />
          </q-item>
        </div>
      </q-collapsible>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'custodianMenu',
  data () {
    return {}
  },
  computed:{
    ...mapGetters({
      getAccountName: 'user/getAccountName',
      getIsCustodian: 'user/getIsCustodian',
    })
    
  },
}
</script>

<style>
</style>
