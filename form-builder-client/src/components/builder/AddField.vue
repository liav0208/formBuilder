<template>
  <form action="" @submit.prevent="submitForm" class="add-field-form" autocomplete="off">
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
      
      this.qName = this.qName.split(' ').join('-');

      this.$emit('send-field', this.qName, this.qLabel, this.qType)
      this.qName = ''
      this.qLabel = ''
      this.qType = 'text'
    }
  },
  emits:['send-field']
}
</script>

<style scoped>
  form.add-field-form{
    padding: 2rem;
    border: 4px solid #cbf1f5;
    border-radius: 1rem;
    background-color: #fff;
    width: 50%;
    margin-top: 2rem;
    margin-bottom: 3rem;
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
    width: 50%;
    transition: all .3s;
  }

  select{ 
    margin-left: 1rem;
    margin-top: .6rem;
    font-size: 1.2rem;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 50%;
  }

  select:focus,
  input:focus{
    outline: none;
    border-bottom: 5px solid #0D6EFD;
  }

</style>
