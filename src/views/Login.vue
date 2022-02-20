<template>
  <div class="login">
    <div>LOGIN</div>
    <form action="" @submit="login">
      <input v-model="username" placeholder="username" type="text" />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <button type="submit">Login</button>
    </form>
    <p>{{ username }}</p>
    <p>
      {{ password }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      console.log("logged");
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
    },
  },
};
</script>

<style></style>
