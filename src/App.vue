<template>
  <v-app>
    <app-loader v-if="isTodosLoading" />

    <v-main v-else class="my-16">
      <v-container id="container">
        <app-header />

        <todos-section />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "@/lib/store-observable-package";
import store from "@/store";
import { actionTypes, getterTypes } from "@/store/types";
import AppLoader from "@/ui/AppLoader.vue";
import AppHeader from "@/ui/AppHeader.vue";
import TodosSection from "@/ui/todos-section";

export default {
  name: "App",

  components: {
    AppLoader,
    AppHeader,
    TodosSection,
  },

  provide() {
    return {
      store: this.store,
    };
  },

  data() {
    return {
      store: store(),
    };
  },

  computed: {
    ...mapGetters({
      isTodosLoading: getterTypes.isTodosLoading,
    }),
  },

  created() {
    this.store.dispatch(actionTypes.getTodos);
  },
};
</script>

<style scope>
#app {
  background: #f5f5f5;
}

#container {
  max-width: 550px;
  padding: 8px;
}
</style>
