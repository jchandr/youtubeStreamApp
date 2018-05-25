<template>
  <div class="homepage">
    <div class="login-form">
      <h3>StreamApp</h3>
      <button class="btn btn-success" target="_blank"
      @click='authenticate()'>Login With Google</button>
    </div>
  </div>
</template>

<script>
  import API from '../api'
  export default {
    data () {
    },
    methods: {
      authenticate () {
        API.authenticateUser()
        .then(({data}) => {
          window.location.href = data
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style>
  h3 {
    color: white;
  }
  .homepage{
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }

  .login-form {
    position: relative;
    z-index: 1;
    background: #1F1F1F;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    transition: all 0.12s;
  }

  .login-form:hover {
    transform: scale(1.15,1.15);
  }
</style>
