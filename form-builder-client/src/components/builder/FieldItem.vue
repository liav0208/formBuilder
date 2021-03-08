<template>
  <div class="field-view">
    <div class="details">
     <div class="line">
       <h4>Question: </h4> <span>{{label}}</span>
     </div>
     <div class="line">
      <h4 h4>type: </h4> <span>{{type}}</span>
     </div>
    </div>
    <div class="actions">
      <base-button @click="removeField" mode="rounded"><i class="fas fa-trash-alt"></i></base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'label', 'name'],
  emits: ['remove-field'],
  methods: {
    removeField(){
      this.$emit('remove-field', this.name)
    }
  }
}
</script>

<style scoped>
  .field-view{
    border-top: 5px solid #cbf1f5;
    border-radius: .2rem;
    background-color: #fff;
    padding: 2rem 4rem;
    margin: 2rem 0;
    width: 80%;
    display: flex;
    justify-content: space-between;
  }


  h4{
    font-size: 1.4rem;
    display: inline-block;
  }
  span{
    font-size: 1.2rem;
  }
</style>