<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link>
        <router-link to="/"><h1>Homework Assistant</h1></router-link>
      </div>
      <ul class="nav-routes">
        <router-link to="/">Home</router-link>
        <!-- <router-link to="/about">About</router-link> -->
        <router-link to="/assignment">Assignments</router-link>
        <router-link to="/calendar">Calendar</router-link>
        <!-- <router-link to="/account">Login/Logout</router-link> -->
        <template v-if="isAuthenticated">
          <router-link to="/profile">Profile</router-link>
        </template>
        <div class="mobile-nav-bar__buttons">
          <template v-if="!isAuthenticated">
            <SignupButton />
            <LoginButton />
          </template>
          <template v-if="isAuthenticated">
            <LogoutButton />
          </template>
        </div>
      </ul>
    </nav>
  </header>
  <div class="line"></div>
</template>

<script setup>
import LoginButton from "./buttons/LoginButton.vue";
import LogoutButton from "./buttons/LogoutButton.vue";
import SignupButton from "./buttons/SignupButton.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();
</script>

<style lang="scss" scoped>
header {
  background-color: #f1f1f1;
  border-top: 3px solid rgb(39, 39, 39);
  border-bottom: 3px solid rgb(39, 39, 39);

  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1, h1:link, a {
        font-size: 24px;
        color: black;
        text-decoration: none;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a:hover {
        text-decoration: underline;
        color: #41b080;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}

// .line {
//   border: 3px solid rgb(39, 39, 39);
// }

</style>