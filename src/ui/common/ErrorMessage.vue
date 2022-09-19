<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex align-center justify-center"
  >
    <v-alert color="error" dark icon="mdi-alert" width="320" prominent>
      {{ message }}
    </v-alert>
  </v-sheet>
</template>

<script>
export default {
  name: "app-error-message",

  props: {
    message: String,
  },
};
</script>
