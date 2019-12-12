<template>
<div>
  <div>
    <header class="bg">
      <div class="conatainer-fluid" id="menu-navbar">
        <div class="container max-width">
          <div class="row pd">
            <div class="col-xl-3 col-sm-12 col-lg-12 col-md-12 bottom">
              <router-link to="/">
                <a>
                  <img src="../../asset/img/logo-home.png" class="logo">
                </a>
              </router-link>
            </div>
            <div class="col-xl-6 col-sm-6 col-md-6 col-lg-6">
              <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item nav-menu">
                      <router-link to="/#menu-1">
                        <a class="nav-link active" href="#menu-1">Hưỡng dẫn</a>
                      </router-link>
                    </li>
                    <li class="nav-item nav-menu">
                      <a class="nav-link" href="./#menu-3">Tính năng</a>
                    </li>
                    <li class="nav-item nav-menu">
                      <a class="nav-link" href="#">Tải App</a>
                    </li>
                    <li class="nav-item nav-menu">
                      <a class="nav-link" href="#">Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div id="button-menu" class="col-xl-3 col-sm-6  col-lg-6 login">
              <div class="pos-r">
                <a class="bd" href="#">Đăng nhập</a>
                <a class="" href="#"><img src="../../asset/img/co.png" class="img-nav"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>     
  </div>

  </div>
</template>
<script>

</script>
<style scoped>
/* header */
li{
  padding-right: 0px !important; 
}
#button-menu{
  padding-top: 1.5% !important;
}
#menu-navbar {
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
  height: 100px;

}

.navbar-branch {
  margin-left: 50px !important;
}

.bg {
  background: #FFFFFF;
  width: 100%;
  position: relative;
}

.pd {
  padding: 16px 0 0;
}

.navbar-nav {
  width: 100%;
  padding: 8px 0 0 0;
}

.nav-link {
  text-align: right;
  font-size: 16px;
  line-height: 19px;
  color: #212128 !important;
  transition: all, 0.5s, ease-out;
}

.nav-link:hover {
  color: #222 !important;
  font-weight: 600;
}

.img-nav {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.bd {
  font-size: 16px;
  line-height: 19px;
  background: linear-gradient(144.74deg, #9EE969 7.47%, #1EA85D 97.02%) !important;
  margin: 0 27px;
  padding: 11px 32px;
  opacity: 0.7;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 16px;
  transition: all, 0.5s, ease-out;
  color: #FFFFFF !important;
  letter-spacing: 1px
}

.bd:hover {
  color: #222 !important;
  font-weight: 600;
  text-decoration: none;
}

.text-r {
  text-align: right;
  position: absolute;
  right: 0%;
}


.nav-btn {
  text-align: center;
  width: 15%;
  position: absolute;
  right: 7%;
}

.nav-menu {
  width: 25%;
}

.nav-right {
  margin-top: -5%;
}


</style>
