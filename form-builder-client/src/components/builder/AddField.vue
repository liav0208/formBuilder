<template>
  <form action="" @submit.prevent="submitForm">
    <div class="form-control">
      <label for="qName">Please enter your question name</label>
      <input type="text" id="qName" name="qName" v-model.trim="qName">
    </div>
    <div class="form-control">
      <label for="qLabel">Please enter question label</label>
      <input type="text" id="qLabel" name="qLabel" v-model.trim="qLabel">
    </div>
    <div class="form-control">
      <label for="qType">Choose question type</label>
      <select name="qType" id="qType" v-model="qType">
        <option value="text">Text</option>
        <option value="date">Date</option>
        <option value="email">Email</option>
        <option value="tel">Tel</option>
        <option value="number">Number</option>
      </select>
    </div>
    <button>Submit</button>
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
      console.log(this.qName, this.qLabel, this.qType);
    }
  }
}
</script>

