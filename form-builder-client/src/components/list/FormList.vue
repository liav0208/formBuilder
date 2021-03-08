<template>
  <div class="container">
    <h1 class="main-title">Welcome to Form Builder</h1>
    <h3 class="sub-title">The perfect place for create your survey and let people fill it</h3>
    <div class="order-buttons" v-show="forms.length">
      <base-button  @click="orderBy('createdAt')">Order By date</base-button>
      <base-button @click="orderBy('submissions')">Order By submissions</base-button>
    </div>
    <h3 class="no-data" v-if="forms.length === 0">No lists yet...</h3>
    <h3 class="no-data" v-else-if="noRespond">Sorry something went wrong, please try again later..</h3>
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
    <div class="pagination">
      <base-button :block='blockPrev' @click="pagination('previous')">Previous</base-button>
      <base-button :block='blockNext' @click="pagination('next')">Next</base-button>
    </div>
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
      noRespond: false,
      orderListBy: 'createdAt',
      page: 0,
      blockPrev: false,
      blockNext: false
    }
  },
  methods: {
    orderBy(order){
      this.orderListBy = order;
      fetch(`http://localhost:3000/form/orderBy/${order}`)
      .then(res => res.json())
      .then(res => this.forms = res)
      .catch( () => this.$toast.error('Error occurred'))
    },
    pagination(action){
      action === 'next' ? this.page = this.page += 5 : this.page = this.page -= 5;
      this.page === 0 ? this.blockPrev = true : this.blockPrev = false;
      fetch(`http://localhost:3000/form/list/${this.orderListBy}?skip=${this.page}`)
      .then(res => res.json())
      .then(res => {
        this.isLoading= false;
        this.forms = res
        res.length % 5 !== 0 ? this.blockNext = true : this.blockNext = false;
        })
      .catch(() => {
        this.isLoading= false;
      })

      console.log(this.blockNext, this.forms.length);
    }
  },
  mounted(){
    this.page === 0 ? this.blockPrev = true : this.blockPrev = false;
    fetch(`http://localhost:3000/form/list/${this.orderListBy}?skip=${this.page}`)
      .then(res => res.json())
      .then(res => {
        this.isLoading= false;
        this.forms = res
        })
      .catch(() => {
        this.isLoading= false;
        this.noRespond = true;
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
    position: relative;
  }

  .main-title{
    font-size: 2.8rem;
  }
  .sub-title{
    font-size: 2rem;
  }

  .order-buttons{
    position: absolute;
    top: 0;
    left: 0;
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

  .pagination{
    position: relative;
    top: 4rem;
  }

</style>