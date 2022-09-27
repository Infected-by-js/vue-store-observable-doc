<template>
  <v-card-actions class="px-4">
    <span class="indigo--text lighten-3">
      {{ remaining }} {{ pluralizedItem }} left
    </span>

    <v-spacer />
    <v-btn-toggle mandatory dense group borderless :value="activeFilter">
      <v-btn
        @click="setActiveFilter(filter.value)"
        v-for="filter in filters"
        :key="filter.value"
        :value="filter.value"
        class="ma-0"
        color="indigo lighten-1"
        text
        depressed
        small
      >
        {{ filter.text }}
      </v-btn>
    </v-btn-toggle>
  </v-card-actions>
</template>

<script>
import { FILTERS } from "@/helpers/constants.js";
import { mapActions, mapGetters } from "@/lib/store-observable-package";
import { actionTypes, getterTypes } from "@/store/types";

export default {
  name: "todos-filter",

  inject: ["store"],

  data() {
    return {
      filters: FILTERS,
    };
  },

  computed: {
    ...mapGetters({
      remaining: getterTypes.remaining,
      activeFilter: getterTypes.activeFilter,
    }),

    pluralizedItem() {
      return this.remaining === 1 ? "item" : "items";
    },
  },

  methods: {
    ...mapActions([actionTypes.setActiveFilter]),
  },
};
</script>
