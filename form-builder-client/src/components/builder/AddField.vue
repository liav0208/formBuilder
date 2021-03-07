<template>
  <form action="" @submit.prevent="submitForm">
    <div class="form-control">
      <label for="qName">Please enter your question name:</label>
      <input type="text" id="qName" name="qName" v-model.trim="qName" ref="qName">
    </div>
    <div class="form-control">
      <label for="qLabel">Please enter question label:</label>
      <input type="text" id="qLabel" name="qLabel" v-model.trim="qLabel" ref="qLabel">
    </div>
    <div class="form-control">
      <label for="qType">Choose question type:</label>
      <select name="qType" id="qType" v-model="qType" >
        <option value="text">Text</option>
        <option value="date">Date</option>
        <option value="email">Email</option>
        <option value="tel">Tel</option>
        <option value="number">Number</option>
      </select>
    </div>
    <base-button>Add Question</base-button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      qName: '',
      qLabel: '',
      qType: 'text'
    }
  },
  methods: {
    submitForm(){
      if(this.qName === ''){
        return this.$refs.qName.focus()
      }else if(this.qLabel === ''){
        return this.$refs.qLabel.focus()
      }
      this.$emit('send-field', this.qName, this.qLabel, this.qType)
    }
  },
  emits:['send-field']
}
</script>

<style scoped>
  form{
    padding: 2rem;
    border: 4px solid #ffe3fe;
    border-radius: 1rem;
  }

  .form-control{
    display: flex;
    justify-content: space-between;
    margin-bottom: .6rem;
  }

  label{
    font-size: 1.2rem;
    margin-bottom: 0.2em;
  }

  input{
    font-size: 1.3rem;
    padding: .4rem .8rem;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-left: 1rem;
  }

  select{ 
    margin-left: 1rem;
    font-size: 1.2rem;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 50%;

  }

  select:focus,
  input:focus{
    outline: none;
    border-color: #0D6EFD;
  }

</style>
