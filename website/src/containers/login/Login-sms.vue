<template>
  <div id="home">
    <Login-header></Login-header>
    <div class="cotainer-fluid">
      <div id="fomr-phone">
        <div class="form-group input-form">
          <h1 class="title-phone">Đăng nhập</h1>
          <label class="title-phone-2"
            >Nhập mã OTP
            <img
              style="padding-bottom: 8%;"
              src="../../asset/img/note.png"
              alt=""
            />
          </label>
          <input
            autofocus
            type="text"
            id="code"
            class="form-control input-phone"
            placeholder="Nhập mã OTP của bạn"
            ref="code"
          />
        </div>

        <button class="btn button-phone" @click="submitPhoneNumberAuthCode()">
          Đăng nhập
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import VueCookies from "vue-cookies";

const db = firebase.firestore();
export default {
  data() {
    return {};
  },
  // firestore() {
  //   return {
  //     users: db.collection("users").where("phone", "==",this.user.phoneNumber)
  //   };
  // },
  computed: {},
  methods: {
    submitPhoneNumberAuthCode() {
      let code = this.$refs.code.value;
      console.log(code);
      confirmationResult
        .confirm(code)
        .then(result => {
          var user = result.user;
          console.log("So dien thoai", user.phoneNumber);
          //   this.checkExitsUser(user.phoneNumber);
          this.add(user.phoneNumber);
          //   window.location.href = "/content";
        })
        .catch(function(error) {
          console.log("error submitPhoneNumberAuthCode: ", error);
        });
    },

    add(phoneNumber) {
      const userCol = db.collection("users");
      userCol
        .doc(phoneNumber)
        .get()
        .then(userSnap => {
          if (userSnap.exists) {
            const user = userSnap.data();
            console.log(user);
            window.location.href = "/content";
          } else {
            userCol
              .doc(phoneNumber)
              .set({
                phone: phoneNumber,
                name: "",
                sex: "",
                job: "",
                address: "",
                birthday:""
              })
              .then(function() {
                console.log("Document successfully written!");
                window.location.href = "/content";
              })
              .catch(function(error) {
                console.error("Error writing document: ", error);
              });
          }
        });
    }
  }
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("USER LOGGED IN");
    console.log(user.phoneNumber);
    $cookies.set("user_session", user.phoneNumber);
  } else {
    // No user is signed in.
    console.log("USER NOT LOGGED IN");
    //  window.location.href = '/';
  }
});
</script>
<style scoped>
.boxt-text {
  margin-top: 141px;
}

.boxt-text h1 {
  font-size: 40px;
  line-height: 150%;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffffff;
}

.pos-r {
  position: absolute;
  right: 15px;
  top: 27%;
}

#fomr-phone {
  width: 35%;
  margin: auto;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  margin-top: 8%;
}

.input-form {
  width: 75% !important;
  margin: auto !important;
}

.input-phone {
  margin-top: 1%;
  border: 1px solid #dbdbdf !important;
  box-sizing: border-box !important;
  border-radius: 16px !important;
}

.button-phone {
  width: 75% !important;
  margin-left: 12.5% !important;
  margin-top: 4%;
  margin-bottom: 13%;
  background: linear-gradient(
    162.09deg,
    #9ee969 7.47%,
    #1ea85d 97.02%
  ) !important;
  border-radius: 16px !important;

  font-weight: bold !important;
  font-size: 16px !important;
  letter-spacing: 2px !important;
  text-transform: uppercase !important;
  color: #ffffff !important;
}

.title-phone {
  width: 50%;
  margin: auto;
  padding-top: 13%;
  padding-bottom: 13%;
  font-weight: bold !important;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  color: #212128;
}

.title-phone-2 {
  font-weight: bold !important;
  font-size: 16px !important;
  line-height: 150% !important;
  align-items: center !important;
  color: #212128 !important;
}
</style>
