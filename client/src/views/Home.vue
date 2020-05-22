<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Projects />
      </v-flex>

      <v-flex xs7 offset-xs1>
        <Panel title="Tasks">
          <h1>Test</h1>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Projects from "@/components/Projects.vue";
import { mapGetters } from 'vuex';
import router from '../router';

export default {
  name: "Home",
  components: {
    Projects
  },
  mounted(){
    if(!this.isLoggedIn){
      return router.push('/login')
    }
  },
  computed:{
    ...mapGetters('authentication', ['isLoggedIn'])
  }
};
</script>
