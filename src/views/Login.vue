<template>
  <v-row>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-container>
          <v-row class="fullheight" justify="center" align="center">
            <v-col
              cols="12"
              md="6"
              class="text-center"
            >
              <v-img
                src="@/assets/login.png"
              >
              </v-img>
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="text-center"
            >
              <h1 class="text-h1 font-weight-bold">
                Cloud Drive
              </h1>
              <div id="firebaseui-auth-container"></div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import * as firebaseui from 'firebaseui';

@Component({
  components: {
  },
})
export default class Login extends Vue {
  // data
  dialog = true;

  // life-cycle-hooks
  mounted() {
    const ui = new firebaseui.auth.AuthUI(this.$store.state.auth());
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        this.$store.state.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/',
      // Other config options...
    });
  }
}
</script>

<style lang='scss' scoped>
.fullheight {
  height: 90vh;
}
</style>
