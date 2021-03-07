<template>
  <div class="container">
    <h1 class="page-header">Start to build your form</h1>
    <add-field @send-field="addField"></add-field>
  </div>
</template>

<script>
import AddField from "./AddField.vue"
export default {
  components: {
    AddField
  },
  data(){
    return {
      fields: []
    }
  },
  methods: {
    addField(name, label, type){
      this.fields.push({name, label, type})
      console.log(this.fields);
    }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>