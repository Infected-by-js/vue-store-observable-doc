<template>
  <v-expansion-panel-content>
    <v-divider />

    <v-expansion-panels class="mt-10" accordion inset>
      <card-content-item title="Posts" color="indigo" :count="postsCount" />
      <card-content-item title="Todos" color="lime" :count="todosCount" />
      <card-content-item title="Comments" color="blue" :count="commentsCount" />
    </v-expansion-panels>
  </v-expansion-panel-content>
</template>

<script>
import { mapGetters } from "@/lib/store-observable-package";
import { getterTypes } from "../model/types";
import CardContentItem from "./CardContentItem.vue";

export default {
  name: "card-content",

  inject: ["store"],

  components: { CardContentItem },

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      todosCount: getterTypes.todosCount,
      commentsCount: getterTypes.commentsCount,
      postsCount: getterTypes.postsCount,
    }),
  },
};
</script>
