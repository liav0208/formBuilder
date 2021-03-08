<template>
  <button :disabled="block" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode', 'block']
}
</script>

<style scoped>
  button{
    border: none;
    padding: .4rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    color: #fff;
    background-color: #90f2ff;
    transition: all .2s;
  }

  button:hover{
    background-color: #6eb6ff;

  }

  button:focus,
  button:active{
    outline: none;
  }

  button:disabled{
    background-color: #ccc;
  }

  .rounded{
    border-radius: 50%;
    background-color: #f12b6b;
    height: 3rem;
    width: 3rem;
  }

  .rounded:hover{
    background-color: #ff467e;
  }
</style>