<template>
  <div>
    <Login-header></Login-header>
    <div class="cotainer-fluid">
      <form class="fomr-phone">
        <div class="form-group input-form">
          <h1 class="title-phone">Đăng nhập</h1>
          <label class="title-phone-2" for=" exampleInputEmail1 title-phone-2"
            >Nhập số điện thoại
            <img
              style="padding-bottom: 8%;"
              src="../../asset/img/note.png"
              alt=""
            />
          </label>
          <input
          v-model="phoneNumber1"
            type="tel"
            id="phoneNumber"
            class="form-control input-phone"
            placeholder="Số điện thoại của bạn"
            autofocus
          />
        </div>
        <div id="recaptcha-container"></div>
        <router-link to="/loginsms">
          <button
            class="btn button-phone"
            id="sign-in-button"
            @click="submitPhoneNumberAuth()"
          >
            Tiếp tục
          </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
// import { firebase } from "@firebase/app";
import firebaseui from "firebaseui";
// import "firebase/firestore";
import VueCookies from 'vue-cookies'
const firebaseConfig = require("../../../firebase-key.json");

firebase.initializeApp(firebaseConfig);

setTimeout(function() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: function(response) {
        console.log("success", response);
        submitPhoneNumberAuth();
      },
      "expired-callback": function() {
        console.log("expired-callback");
      }
    }
  );
  recaptchaVerifier.verify().then(function(widgetId) {
    window.recaptchaWidgetId = widgetId;
  });
}, 0);

//func.getRecapcha();
export default {
  //name: "app",
  data: function() {
    return {
      phoneNumber1:'',
    };
  },
  computed: {},
  methods: {
    created() {
    // this unbinds any previously bound reference
    // this.$bind("books", db.collection("books")).then(b => {
    //   this.books === b;
    // // });

    var a= this.$bind("books", db.collection("books").where("title", "==", "thang123"));
    if (a==null) {
      console.log('Thang')
    }
    else{
      console.log('Ton tai')
    }
  },
    submitPhoneNumberAuth() {
      var phoneNumber = document.getElementById("phoneNumber").value;
      var appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
          window.confirmationResult = confirmationResult;
          //this.$store.state.confirmationResult='confirmationResult';
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$store.state.phoneNumber = document.getElementById(
        "phoneNumber"
      ).value;
       
    }
  }
  
};
  //  $cookies.set("user_session", 'this.phoneNumber1');
   
</script>
<style scoped>
#recaptcha-container {
  margin: 4% 0 0 18% !important;
}
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

.fomr-phone {
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
