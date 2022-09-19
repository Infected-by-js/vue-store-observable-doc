<template>
  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate class="text-h5">
      {{ title }}
      <template v-slot:actions>
        <v-icon v-if="!count" color="teal"> mdi-check </v-icon>
        <v-chip v-else :color="colorWithAccent" class="white--text text-h6">
          {{ count }}
        </v-chip>
      </template>
    </v-expansion-panel-header>

    <v-divider />

    <v-expansion-panel-content class="mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "card-content-item",

  props: {
    title: String,
    count: Number,
    color: String,
    contentElements: Array,
  },

  computed: {
    colorWithAccent() {
      return this.color + " " + this.getColorAccent(this.count);
    },
  },

  methods: {
    getColorAccent(value) {
      const COLOR_ACCENTS = [
        (value) => value >= 20,
        (value) => value >= 15 && value < 20,
        (value) => value >= 10 && value < 15,
        (value) => value >= 5 && value < 10,
        (value) => value > 0 && value < 5,
        (value) => value === 0,
      ];

      const accent = COLOR_ACCENTS.findIndex((fn) => fn(value));

      return accent ? `lighten-${accent}` : "";
    },
  },
};
</script>
