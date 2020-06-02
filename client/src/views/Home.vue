<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Projects />
      </v-flex>

      <v-flex xs7 offset-xs1 v-if='currentProject'>
        
          <Tasks />
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Projects from "@/components/Projects";
import Tasks from "@/components/Tasks";
import { mapGetters, mapState } from 'vuex';
import router from '../router';

export default {
  name: "Home",
  components: {
    Projects,
    Tasks
  },
  mounted(){
    if(!this.isLoggedIn){
      return router.push('/about')
    }
  },
  computed:{
    ...mapState('projects',['currentProject',]),
    ...mapGetters('authentication', ['isLoggedIn'])
  }
};
</script>
