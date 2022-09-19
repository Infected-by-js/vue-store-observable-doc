<template>
  <v-expansion-panel-header>
    <v-row align="center" class="spacer" no-gutters>
      <v-col cols="4" sm="2" md="1">
        <v-avatar size="60" color="indigo lighten-4">
          <img alt="Avatar" :src="image" />
        </v-avatar>
      </v-col>

      <v-col class="hidden-xs-only" sm="5" md="3">
        <strong class="text-h5">{{ username }}</strong>
        <span v-if="gender" class="text-h6 grey--text">
          &nbsp;({{ gender }})
        </span>
      </v-col>

      <v-col cols="5" sm="3" lg="4">
        <v-chip
          v-if="postsCount"
          color="indigo lighten-4"
          class="ml-0 mr-2 text-body-1 black--text"
          label
          small
        >
          Posts: {{ postsCount }}
        </v-chip>

        <v-chip
          v-if="commentsCount"
          color="red lighten-4"
          class="ml-0 mt-2 mt-lg-0 mr-2 text-body-1 black--text"
          label
          small
        >
          Comments: {{ commentsCount }}
        </v-chip>
        <v-chip
          v-if="todosCount"
          color="green lighten-4"
          class="ml-0 mt-2 mt-lg-0 mr-2 text-body-1 black--text"
          label
          small
        >
          Todos: {{ todosCount }}
        </v-chip>
      </v-col>

      <v-col
        v-if="email"
        class="grey--text text-body-1 text-truncate hidden-sm-and-down"
      >
        {{ email }}
      </v-col>
      <v-col
        v-if="phone"
        class="grey--text text-body-1 text-truncate hidden-sm-and-down"
      >
        {{ phone }}
      </v-col>
    </v-row>
  </v-expansion-panel-header>
</template>

<script>
import { mapGetters } from "@/lib/store-observable-package";
import { getterTypes } from "../model/types";
export default {
  name: "card-header",

  inject: ["store"],

  computed: {
    ...mapGetters({
      username: getterTypes.username,
      image: getterTypes.image,
      gender: getterTypes.gender,
      email: getterTypes.email,
      phone: getterTypes.phone,
      postsCount: getterTypes.postsCount,
      commentsCount: getterTypes.commentsCount,
      todosCount: getterTypes.todosCount,
    }),
  },
};
</script>
