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
    background-color: #b4aee8;
  }

  button:hover{
    background-color: #a7a2d4;

  }

  button:focus,
  button:active{
    outline: none;
  }
</style>