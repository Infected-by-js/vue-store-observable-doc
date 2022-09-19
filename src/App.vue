<template>
  <v-app>
    <v-main>
      <page-users-list />
    </v-main>
  </v-app>
</template>

<script>
import PageUsersList from "@/ui/pages/users-list";

export default {
  name: "App",

  components: { PageUsersList },
};
</script>
