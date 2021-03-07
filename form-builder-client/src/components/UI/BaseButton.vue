<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
  button{
    border: none;
    padding: .4rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    color: #fff;
    background-color: #a6e3e9;
  }

  button:hover{
    background-color: #71c9ce;

  }

  button:focus,
  button:active{
    outline: none;
  }
</style>