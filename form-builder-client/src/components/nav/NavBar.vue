<template>
  <nav>
    <h1 class="nav-brand">FormBuilder</h1>
    <ul class="navbar">
      <li class="nav-item">
        <router-link class="nav-link" to="/build">Build</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/list">List</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav{
    width: 100%;
    background: #71c9ce;
    padding: 1.4rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-brand{
    font-size: 2rem;
    color: #440a67;
  }

  .navbar{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 8rem;
  }

  .nav-link{
    font-size: 1.4rem;
  }

  .nav-link{
    padding: .6rem 1.2rem;
    text-decoration: none;
    color: #440a67;
    border-radius: .4rem;
  }

  .nav-link:hover,
  .router-link-active{
    background-color: rgba(255, 255, 255, .4);

  }

</style>