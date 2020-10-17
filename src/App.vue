<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar
      app
      class="blue"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Cloud Drive
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src=user.photoURL></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ user.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { dom } from '@fortawesome/fontawesome-svg-core';

export default {
  mounted() {
    dom.watch();
    this.$store.state.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.$router.push('/');
        this.$store.commit('setUser', user);
      } else {
        this.$router.push('/login');
      }
    });
  },

  data() {
    return {
      user: null,
      drawer: false,
    };
  },

  methods: {
    logout() {
      this.$store.state.auth().signOut();
    },
  },

};
</script>>
