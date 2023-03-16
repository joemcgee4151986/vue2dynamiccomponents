<template>
  <small>Written by {{ author.firstName }} {{ author.lastName }}</small>
</template>

<script>
export default {
  data() {
    return {
      author: {
        firstName: "Bo",
        lastName: "Andersen"
      }
    };
  }
};
</script>
