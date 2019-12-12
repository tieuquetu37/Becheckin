<template>
  <div>
    <p class="error">{{ error }}</p>

    <p class="decode-result">
      Last result: <b>{{ result }}</b>
    </p>

    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
import firebase from "firebase";
import { QrcodeStream } from "vue-qrcode-reader";

const db = firebase.firestore();

export default {
  components: { QrcodeStream },

  data() {
    return {
      result: "",
      error: ""
    };
  },
  updated() {
    if (this.result != "") {
      let checkin = this.result;
      // console.log("du lieu", checkin);
      this.checkin(this.result);    
    }
  },
  methods: {
    onDecode(result) {
      this.result = result;
    },
    kaka(check){
      console.log("du lie",check)
    },
    checkin(checkin) {
      var d = new Date();
      let i = 0;
      let a = 0;    
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
              codeCheckin.doc(checkin).update({
                users: user.users
              });
              alert("Check in thành công");            
              window.location.href = "/content";              
              return;
              
            } else {
              alert("Bạn đã check in trước đó");
              window.location.href = "/content";
              return;
             
            }
          }
        });
    },
    async onInit(promise) {
      try {
        await promise;
        // console.log(this.result)
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  }
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
.wrapper {
  width: 25% !important;
  margin: auto;
}
</style>
