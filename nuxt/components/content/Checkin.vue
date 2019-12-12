<template>
  <div>
    <nav class="navbar navbar-expand-md ">
      <div class="container-fluid pd">
        <div class="row">
          <div class="col-xl-3 col-sm-5 col-lg-5 col-md-5 bottom">
            <a class="navbar-branch" href="#">
              <img class="logo" src="../../asset/img/logo-home.png" />
            </a>
          </div>
        </div>
        <div class="col-xl-6 col-sm-6  col-lg-6 user">
          <div class="pos-r">
            <div class="dropdown drop-menu ">
              <button type="button" class="btn btn-user" data-toggle="dropdown">
                <p style="position: absolute;top: 50px; right: -19px">
                  {{ $cookies.get("user_session") }}
                </p>
                <img src="../../asset/img/menu.png" alt="" />
              </button>
              <div class="dropdown-menu" id="menu-drop">
                <a class="dropdown-item" href="#" @click="changeTabIndex(1)"
                  >Checkin sự kiện</a
                >
                <a class="dropdown-item" href="#" @click="changeTabIndex(2)"
                  >Tạo sự kiện của bạn</a
                >
                <a class="dropdown-item" href="#" @click="changeTabIndex(3)"
                  >Thống kê lịch sử</a
                >
                <a class="dropdown-item" href="#" @click="changeTabIndex(4)"
                  >Thông tin cá nhân</a
                >
                <a
                  class="dropdown-item"
                  href="#"
                  style=" border-bottom: 0 solid #DBDBDF;"
                  @click="logout()"
                  >Đăng xuất</a
                >
              </div>
              <a class="" href="#"
                ><img src="../../asset/img/co.png" class="img-nav"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container content-container">
      <div>
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab :active="tabIndex == 1">
              <template v-slot:title>
                <div>
                  <img class="img-btn" src="../../asset/img/logo1.png" alt="" />
                  <div class="title-checkin">Check in sự kiện</div>
                </div>
              </template>
              <div class="col-xl-9 col-lg-8 col-md-12 content-qr">
                <h3>Check in sự kiện</h3>
                <div class="col-9">
                  <router-link to="/qrcode">
                    <div class="img-checkin">
                      <img
                        class="img-qr"
                        src="../../asset/img/scanqr.png"
                        alt=""
                      />
                    </div>
                  </router-link>
                  <div class="img-checkin">
                    <img
                      class="img-qr"
                      src="../../asset/img/scanqr.png"
                      style="margin-left: 125%;!important"
                      alt=""
                      v-b-modal.modal-1
                    />
                    <b-modal id="modal-1" title="Mã sự kiện" @ok="checkin">
                      <p>Mã sự kiện</p>
                      <input
                        type="text"
                        placeholder="Mã sự kiện"
                        ref="checkin"
                      />
                    </b-modal>
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab :active="tabIndex == 2">
              <template v-slot:title>
                <div>
                  <img class="img-btn" src="../../asset/img/logo2.png" alt="" />
                  <div class="title-checkin">Sự kiện của bạn</div>
                </div>
              </template>
              <event></event>
            </b-tab>

            <b-tab :active="tabIndex == 3">
              <template v-slot:title>
                <div>
                  <img class="img-btn" src="../../asset/img/logo3.png" alt="" />
                  <div class="title-checkin">Thống kê lịch sử</div>
                </div>
              </template>
              <history></history>
            </b-tab>

            <b-tab :active="tabIndex == 4">
              <template v-slot:title>
                <div>
                  <img class="img-btn" src="../../asset/img/logo4.png" alt="" />
                  <div class="title-checkin">Thông tin cá nhân</div>
                </div>
              </template>
              <User-Info></User-Info>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const db = firebase.firestore();

export default {
  data() {
    return {
      tabIndex: 1,
      phone_login: this.$store.state.phoneNumber
    };
  },
  computed: {},
  methods: {
    changeTabIndex(index) {
      this.tabIndex = index;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.setItem("authenticated", false);
        });
      $cookies.remove("user_session");
      window.location.href = "/login";
      console.log("Dang xuat thanh cong");
    },
    checkin() {
      var d = new Date();
      let i = 0;
      let a = 0;
      let checkin = this.$refs.checkin.value;
      const codeCheckin = db.collection("events");
      codeCheckin
        .doc(checkin)
        .get()
        .then(userSnap => {
          if (userSnap.exists) {
            const user = userSnap.data();
            // console.log("kaka",user.users.length)
            for (i = 0; i < user.users.length; i++) {
              if (user.users[i].name == $cookies.get("user_session")) {
                a++;
              }
            }
            if (a == 0) {
              user.users.push({
                name: $cookies.get("user_session"),
                time: d.getHours() + ":" + d.getMinutes() + "h"
              });
              console.log(user.users);
              codeCheckin.doc(checkin).update({
                users: user.users
              });
              alert("Check in thành công");
              return;
            } else {
              alert("Bạn đã check in trước đó");
              return;
            }
          } else {
            alert("Mã sự kiện không đúng");
          }
        });
    }
  }
};
</script>
<style scoped>
.btn-form {
  background: linear-gradient(152.25deg, #9ee969 7.47%, #1ea85d 97.02%);
  border-radius: 16px;
  color: white;
  padding: 2% 8% 2% 8%;
  margin-top: 2%;
  margin-bottom: 8%;
}
.label-form {
  color: #212128;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
}
.form-group {
  margin-bottom: 1rem;
  margin-top: 5% !important;
}
.title_form {
  border: 1px solid #dbdbdf;
  box-sizing: border-box;
  border-radius: 16px;
  width: 400px;
}
.card {
  border: 1px solid white !important;
}
.title-checkin {
  margin: 0 20px 0 35px;
}
/* header */

nav {
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
  height: 100px;
  padding-left: 50px;
}

.navbar-branch {
  margin-left: 50px !important;
}

.bg {
  background: #ffffff;
  width: 100%;
  position: relative;
}

.navbar-nav {
  width: 100%;
  padding: 8px 0 0 0;
}

.img-nav {
  position: absolute;
  right: 30px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-top: 11px;
}

.dropdown-item {
  padding: 0.55rem 1.4rem !important;
}

.drop-menu {
  padding-bottom: 10px !important;
}

.pd {
  padding-top: 1% !important;
  padding-left: 60px !important;
  padding-right: 70px !important;
}

.pos-r {
  margin-bottom: 50px !important;
}

.btn-user {
  position: absolute !important;
  right: 80px;

  background: #e5e5e5 !important;
  height: 50px !important;

  width: 50px !important;

  border-radius: 50% !important;
  padding-bottom: 10px !important;

  padding-right: 40px !important;
}

.dropdown-menu.show {
  margin-inline: 57%;
  margin-inline-start: 57%;
  margin-inline-end: 57%;
  margin-block: 11%;
  background: #ffffff;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.dropdown-item {
  color: #6b6c72 !important;
  /*   background-color:
      #fff !important;
  border-bottom: 1px solid #DBDBDF !important;
  margin-left: 14px !important;*/
}

.content-container {
  margin-top: 3%;
}

.btn-content {
  margin-top: 6%;
  width: 96% !important;
  padding: 4.5% 4% 4.5% 0 !important;
  border-radius: 16px !important;
  background: #fff !important;
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1) !important;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;

  /* 4 */
  color: #212128;
}
#menu-drop a {
  border-bottom: 1px solid #dbdbdf;
  font-style: 16px;
}
.img-btn {
  float: left;
  width: 24px !important;
}

.img-checkin {
  width: 45%;
  /* text-align: center; */
  float: left;
  padding-top: 7%;
  padding-bottom: 10%;
}

.content-qr {
  background: #ffffff !important;
  /* box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1) !important; */
  /* border-radius: 24px !important; */
}

.content-qr h3 {
  padding-top: 3%;
  padding-left: 3%;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 1px;
  color: #212128;
}
</style>
