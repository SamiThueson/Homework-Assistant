<template>
  <button class="button__login auth-button" @click="handleLogin">Log In</button>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/profile",
    },
  });
};
</script>

<style>
.auth-button {
  background: none!important;
  border: none;
  padding: 0!important;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 10px;
}
.auth-button:hover {
  color: #41b080;
  text-decoration: underline;
}
</style>