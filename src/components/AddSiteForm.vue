<template>
  <div class="main">
    <div class="about">
      <h1>Add your site.</h1>
    </div>
    <div class="field">
      <label>Site Name</label>
      <input v-model="fields.siteName" type="text" placeholder="Add an item!" />
      <!-- <span style="color: red">{{ fieldErrors.siteName }}</span> -->
    </div>
    <!-- Url Field -->
    <div class="field">
      <label>URL</label>
      <input
        v-model="fields.url"
        type="text"
        placeholder="What's your email?"
      />
      <!-- <span style="color: red">{{ fieldErrors.url }}</span> -->
    </div>
    <div class="field">
      <label>Country</label>
      <select v-model="fields.country" class="ui fluid search dropdown">
        <option disabled value="">Please select one</option>
        <option>Nonessential</option>
        <option>Moderate</option>
        <option>Urgent</option>
      </select>
      <!-- <span style="color: red">{{ fieldErrors.country }}</span> -->
    </div>
    <div class="field">
      <label>Category</label>
      <select v-model="fields.category" class="ui fluid search dropdown">
        <option disabled value="">Please select one</option>
        <option>Nonessential</option>
        <option>Moderate</option>
        <option>Urgent</option>
      </select>
      <!-- <span style="color: red">{{ fieldErrors.category }}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AddSiteForm",
  data() {
    return {
      fields: {
        siteName: "",
        url: "",
        country: "",
        language: "",
        tags: "",
        category: "",
      },
    };
  },
};
</script>

<style>
.main {
  max-width: 420px;
  margin: 30px auto;

  text-align: left;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #707070;
}
.field {
  padding: 1em;
}
input,
select {
  display: block;
  padding: 1em;
  width: 100%;
  box-sizing: border-box;
  border: none;
  /* border-bottom: 1px solid #707070; */
  background: rgb(250, 227, 183);
  border-radius: 10px;
}
</style>