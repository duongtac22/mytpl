<template>
  <div>
    <img v-bind:src="img" style="width: 100%;" alt />
    <h2 v-text="name"></h2>
    <p v-text="email"></p>
  </div>
</template>

<script>
module.exports = {
  props: ["email", "name", "img"],
};
</script>