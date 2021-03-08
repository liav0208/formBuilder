<template>
  <div class="container">
    <form action="" autocomplete="off" @submit.prevent="sendDetails">
      <h1>{{form.title}}</h1>
      <form-field class="form-control" v-for="field in form.fields"
      :key="field.name"
      :type="field.type"
      :name="field.name"
      :label="field.label"
      @send-input="saveFieldInput"
      :ref="field.name"
      ></form-field>
      <base-button>SUBMIT</base-button>
    </form>
  </div>
</template>

<script>
import FormField from "./FormField.vue"

export default {
  components: {
    FormField
  },
  props: ['formId'],
  data(){
    return {
      form: {},
      inputs: []
    }
  },
  mounted(){
    fetch(`http://localhost:3000/form/${this.formId}`)
    .then(res => res.json())
    .then(res => this.form = res)
    .catch(err => console.log(err))
  },
  methods: {
    sendDetails(){
      for(let key in this.$refs){
        if(this.$refs[key].input.length === 0){
          this.$toast.error('Please complete the form fields')
          return;
        }
      }
      fetch(`http://localhost:3000/form/submit/${this.formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: this.inputs
        })
      })
      .then(() => {
        this.$toast.show('Thank you')
        this.$router.push('/list')
        })
      .catch(err => console.log(err))
    },
    saveFieldInput(fieldName, fieldInput){
      let exist = false;
      this.inputs.forEach(input => {
        if (fieldName in input){
          exist = true;
          input[fieldName] = fieldInput;
        } 
      })
      if(!exist){
        const obj= {}
        obj[fieldName] = fieldInput
        this.inputs.push(obj)
      }
    },
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

  form{
    width: 80%;
    background-color: #fff;
    padding: 2rem;
    border-top: 6px solid #71c9ce;
  }

  h1{
    text-align: center;
    font-size: 2.4rem;
  }
  
</style>