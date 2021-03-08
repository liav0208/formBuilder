<template>
  <div class="container">
    <h1 class="main-title">Welcome to Form Builder</h1>
    <h3 class="sub-title">The perfect place for create your survey and let people fill it</h3>
    <div class="order-buttons" v-show="forms.length">
      <base-button @click="orderBy('createdAt')">Order By date</base-button>
      <base-button @click="orderBy('submissions')">Order By submissions</base-button>
    </div>
    <h3 class="no-data" v-if="forms.length === 0">Sorry something went wrong, please try again later..</h3>
    <table v-else>
      <thead>
        <tr>
          <th>Form ID</th>
          <th>Form Name</th>
          <th>#Submissions</th>
          <th>Submit Page</th>
        </tr>
      </thead>
      <tbody>
        <form-item v-for="form in forms"
        :key="form._id"
        :form-id="form._id"
        :form-name="form.title"
        :submissions="form.submissions"
        ></form-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import FormItem from "./FormItem.vue"
export default {
  components: {
    FormItem
  },
  data(){
    return {
      forms: [],
      isLoading: true,
    }
  },
  methods: {
    orderBy(order){
      fetch(`http://localhost:3000/form/orderBy/${order}`)
      .then(res => res.json())
      .then(res => this.forms = res)
      .catch( () => this.$toast.error('Error occurred'))
    }
  },
  mounted(){
    fetch('http://localhost:3000/form')
      .then(res => res.json())
      .then(res => {
        this.isLoading= false;
        this.forms = res
        })
      .catch(() => {
        this.isLoading= false;
      })

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

  .main-title{
    font-size: 2.8rem;
  }
  .sub-title{
    font-size: 2rem;
  }

  table{
    margin-top: 3rem;
    width: 80%;
  }

  thead{
    background-color: #fff;
  }

  th{
    font-size: 1.6rem;
    padding: 1rem;
  }

  .no-data{
    margin-top: 4rem;
    font-size: 2.5rem;
  }
</style>