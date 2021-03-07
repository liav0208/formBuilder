<template>
  <div class="container">
    <h1 class="page-header">Start to build your form</h1>
    <div class="field-container" v-if="fields.length">
      <field-item v-for="field in fields"
      :key="field.name"
      :type="field.type"
      :label="field.label"
      :name="field.name"
      @remove-field="removeField"
      ></field-item>

      <form action="" @submit.prevent="sendForm">
        <div class="form-control">
          <label for="title">Enter form title</label>
          <input type="text" name="title" id="title" v-model="title" ref="title">
        </div>
      <base-button @click="sendForm">Save Form</base-button>
      </form>
    </div>
    <add-field @send-field="addField"></add-field>
  </div>
</template>

<script>
import AddField from "./AddField.vue"
import FieldItem from "./FieldItem.vue"

export default {
  components: {
    AddField,
    FieldItem
  },
  data(){
    return {
      title: '',
      fields: []
    }
  },
  methods: {
    addField(name, label, type){
      this.fields.push({name, label, type})
    },
    removeField(name){
      const fieldIdx = this.fields.findIndex(field => field.name === name);
      this.fields.splice(fieldIdx, 1)
    },
    sendForm(){
      if(this.title === ''){
        this.$refs.title.focus()
      }else{
        fetch('http://localhost:3000/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: this.title,
            fields: this.fields
          })
        }).then(res => console.log(res))
      }
    }
  }
}
</script>

<style scoped>
  .container{

    padding-top: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #e3fdfd;
    min-height: 100vh;
  }

  .field-container{
    background-color: #f2f2f2;
    border-radius: 1rem;
    padding: 2rem;
    width: 60%;
    min-width: 60rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 3px solid #CBF1F5;
    margin: 2rem 0;
  }

  form{
    width: 80%;
    padding: 2rem;
    background-color: #fff;
    border-top: 4px solid #A6E3E9;
    border-radius: .2rem;
  }

  .form-control{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  label{
    font-size: 1.4rem;
  }
  input{
    width: 60%;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 1.2rem;
  }

  input:focus{
    outline: none;
  }

</style>