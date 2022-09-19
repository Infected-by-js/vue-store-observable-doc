<template>
  <app-loader v-if="isUsersLoading" />

  <app-error-message v-else-if="usersError" :message="usersError" />

  <v-container v-else>
    <v-row justify="center" align="center">
      <v-subheader class="text-h5">Users</v-subheader>

      <v-expansion-panels popout>
        <user-card v-for="user in users" :key="user.id" :user="user" />
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
import api from "./api";
import AppLoader from "@/ui/common/Loader.vue";
import AppErrorMessage from "@/ui/common/ErrorMessage.vue";
import UserCard from "@/ui/widgets/user";

export default {
  name: "page-users-list",

  components: {
    UserCard,
    AppLoader,
    AppErrorMessage,
  },

  data() {
    return {
      isUsersLoading: false,
      usersError: null,
      users: [],
    };
  },

  methods: {
    async getUsers() {
      try {
        this.isUsersLoading = true;
        this.users = await api.getUsers();
      } catch (error) {
        this.usersError = "Users fetching error";
      } finally {
        this.isUsersLoading = false;
      }
    },
  },

  created() {
    this.getUsers();
  },
};
</script>
