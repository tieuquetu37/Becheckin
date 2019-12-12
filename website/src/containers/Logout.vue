<template>
  <div>
   <p>adasdad</p>
  <a class="dropdown-item" href="/login" style=" border-bottom: 0 solid #DBDBDF;" @click="logout">Đăng xuất</a>

  </div>
</template>
<script>
export default {
computed: {
          logout(){
       firebase.auth().signOut().then(() => {
            localStorage.setItem('authenticated', false)            
        })
        window.location.href = '/login';
    },
}
};

</script>
<style>
</style>
