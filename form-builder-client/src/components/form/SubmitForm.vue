<template>
  <p>work</p>
</template>

<script>
export default {
  props: ['formId'],
  mounted(){
    console.log(this.formId);
  }
}
</script>