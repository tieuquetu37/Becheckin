<template>
  <div>
    <header class="bg" id="menu-home">
      <div class="container-fluid" id="menu-navbar">
        <div class="container max-width">
          <div class="row pd">
            <div class="col-xl-3 col-sm-12 col-lg-12 col-md-12 bottom">
              <a href="#menu-home">
                <img src="../../asset/img/Logo.png" class="logo">
              </a>
            </div>
            <div class="col-xl-6 col-sm-6 col-md-6 col-lg-6">
              <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item nav-menu">
                      <a class="nav-link " href="#menu-1">Hướng dẫn</a>
                    </li>
                    <li class="nav-item nav-menu">
                      <a class="nav-link" href="#menu-2">Tính năng</a>
                    </li>
                    <li class="nav-item nav-menu">
                      <a class="nav-link" href="#menu-3">Tải App</a>
                    </li>
                    <li class="nav-item nav-menu">
                      <a class="nav-link" href="#">Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="col-xl-3 col-sm-6  col-lg-6 login">
              <div class="pos-r">    
                 <a href="/login" class="bd">Đăng nhập</a>                                
                <a class="" href="#"><img src="../../asset//img/co.png" class="img-nav"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="box-img">
          <img src="../../asset//img/img.png" class="img-right">
        </div>
        <div class="boxt-text wow bounceInUp">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1>CHECK IN</h1>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <p class="text-h2"> Tham gia sự kiện <br>ngay bây giờ</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-12 button">
            <button type="button" class=" btn">CHECK IN NGAY</button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
//import Card from "./components/Card.vue";

export default {
  methods:{
  
}
}

</script>
<script type="text/javascript" src="../../asset/js/wow.min.js"></script>
<script type="text/javascript" src="../../asset/js/my.js"></script>

<style scoped>
html {
  background: linear-gradient(124.18deg, #9EE969 7.47%, #1EA85D 97.02%);
}

.navbar-branch {
  margin-left: 50px !important;
}

.bg {
  background: linear-gradient(124.18deg, #9EE969 7.47%, #1EA85D 97.02%);
  height: 900px;
  position: relative;
}

.pd {
  padding: 32px 0 0;
}

.navbar-nav {
  width: 100%;
  padding: 8px 0 0 0;
}

.nav-link {
  text-align: right;
  padding-right: 0 !important;
  font-size: 16px;
  line-height: 19px;
  color: #fff !important;
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
  color: #fff !important;
  margin: 0 27px;
  padding: 11px 32px;
  opacity: 0.7;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 16px;
  transition: all, 0.5s, ease-out;

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

.box-img {
  position: absolute;
  right: 0;
  bottom: 0;
  background-image: url(../../asset/img/1.png);
  width: 65%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

}

.img-right {
  width: 100%;
  padding-left: 10%;
  padding-top: 5%;
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

.boxt-text {
  margin-top: 141px;

}
.boxt-text h1 {
  font-family: Roboto;
  font-size: 40px;
  line-height: 150%;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #FFFFFF;
}

.text-h2 {
  margin-top: 3%;

  font-style: normal;
  font-weight: 500;
  font-size: 70px;
  line-height: 130%;
  color: #FFFFFF;
}

.pos-r {
  position: absolute;
  right: 15px;
  top: 27%;
}

.btn {


  background: #fff !important;
  border: 2px solid #FFFFFF !important;
  box-sizing: border-box !important;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2) !important;
  border-radius: 11px !important;

  font-style: normal;
  font-weight: bold !important;
  font-size: 16px !important;
  line-height: 150% !important;
  color: #48AF74 !important;
}

.button {
  margin-top: 50px;
}

</style>
