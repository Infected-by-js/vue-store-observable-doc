<template>
  <v-progress-linear
    color="indigo"
    class="my-0"
    :value="progressPercentage"
    height="8"
  />
</template>

<script>
import { mapGetters } from "@/lib/store-observable-package";
import { getterTypes } from "@/store/types";

export default {
  name: "todos-proggress",

  inject: ["store"],

  computed: {
    ...mapGetters({
      progressPercentage: getterTypes.progressPercentage,
    }),
  },
};
</script>
