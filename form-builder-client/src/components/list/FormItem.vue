<template>
  <tr>
    <td>{{formId}}</td>
    <td>{{formName}}</td>
    <td>{{submissions}}</td>
    <td>
      <router-link :to="`/form/${formId}`">Submit Form</router-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['form-id', 'form-name', 'submissions']
}
</script>

<style scoped>
  td{
    padding: 1rem;
    text-align: center;
    font-size: 1.2rem;
    background-color: #a6e3e9;
  }

  a{
    text-decoration: none;
    color: #CCAD34;
  }
</style>