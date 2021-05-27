<template>
  <main>
    <v-button> Add site</v-button>
    <v-button>My collection</v-button>

    <!-- <div class="field">
      <input v-model="fields.siteName" type="text" placeholder="Add an item!" />
      <label>Site Name</label>
      <span style="color: red">{{ fieldErrors.siteName }}</span>
    </div> -->
  </main>
</template>

<script>
export default {
  name: "UserMenuBar",
  data() {
    return {
      fields: {
        siteName: "",
      },
    };
  },
};
</script>

<style scoped>
main {
  border-bottom: solid 2px #707070;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 1em;
  gap: 3em;
}
v-button {
  width: 200px;
  text-align: center;
  border-radius: 0.5em;
  padding: 0.5em;
  border: solid 1px #707070;
  background: #fff;
}
</style>