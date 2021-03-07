<template>
  <div class="form-control">
    <label :for="name">{{label}}:</label>
    <input :type="type" :name="name" :id="name" @blur="sendInput" v-model="input">
  </div>
</template>

<script>
export default {
  props:['type', 'name', 'label'],
  emits: ['send-input'],
  data(){
    return {
      input: ''
    }
  },
  methods: {
    sendInput(){
      this.$emit('send-input', this.name, this.input)
    }
  }
}
</script>

<style scoped>
  .form-control{
    width: 90%;
    margin: 2rem auto;
    padding: 1rem;
  }

  label{
    display: block;
    font-size: 1.4rem;
    margin-bottom: .3rem;
  }

  input{
    border: none;
    border-bottom: 1px solid #ccc;
    width: 80%;
    padding: .4rem .6rem;
    font-size: 1.2rem;
    transition: all .4s;
  }

  input:focus{
    outline: none;
    border-bottom: 6px solid #ccc; 
  }

</style>