<template>
  <v-expansion-panel hide-actions>
    <card-header />
    <card-content />
  </v-expansion-panel>
</template>

<script>
import store from "./model";
import CardHeader from "./ui/CardHeader.vue";
import CardContent from "./ui/CardContent.vue";

export default {
  name: "widget-user",

  provide() {
    return {
      store: this.store,
    };
  },

  components: { CardHeader, CardContent },

  props: {
    user: Object,
  },

  data() {
    return {
      store: store(this.user),
    };
  },
};
</script>
