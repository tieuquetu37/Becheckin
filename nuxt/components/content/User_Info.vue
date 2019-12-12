<template>
  <div class="col-xl-9 col-lg-8 col-md-12 content-qr">
    <h3>Thông tin cá nhân</h3>
    <form>
      <div
        style="with:75% !important; float:left;padding-top: 5%; margin-left:40%;"
      >
        <label
          style="font-weight: 500;font-size: 16px;line-height: 19px;color: #212128"
          >Số điện thoại</label
        >
        <p >{{ $cookies.get("user_session") }}</p>
        <div class="form-group">
          <label class="label-form" for="exampleInputEmail1">Họ và tên</label>
          <input
            type="text"
            class="form-control title_form"
            placeholder="Nhập họ tên"
            v-model="user.name"
          />
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
           
            id="inlineRadio1"
            :value="2"
            v-model="user.sex"
          />
          <label
            class="form-check-label"
            for="inlineRadio1"
            style="padding-right: 50px;"
            >Nam</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
         
            id="inlineRadio2"
            :value="1"
            v-model="user.sex"
          />
          <label class="form-check-label" for="inlineRadio2">Nữ</label>
        </div>
        <div class="form-group">
          <label class="label-form">Ngày sinh</label>
          <br />
          <date-picker v-model="time1" valueType="format"></date-picker>
        </div>
        <div class="form-group">
          <label class="label-form" for="exampleInputEmail1">Nghề nghiệp</label>
          <input
            type="text"
            class="form-control title_form"
            id="exampleInputEmail1"
            placeholder="Nghề nghiệp"
            v-model="user.job"
          />
        </div>
        <div class="form-group">
          <label class="label-form" for="exampleInputEmail1">Địa chỉ</label>
          <input
            type="text"
            class="form-control title_form"
            id="exampleInputEmail1"
            placeholder="Địa chỉ"
            v-model="user.address"
          />
        </div>
        <button class="btn btn-form" @click="updateUser">
          Lưu chỉnh sửa
        </button>
      </div>
      <img v-show="loading" src="" alt="" />
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import VueCookies from "vue-cookies";
import firebase from "firebase";

const db = firebase.firestore();

export default {
  data() {
    return {
      time1: null,
      user: null,
      loading: false,
    };
  },

   mounted() {
    // this.loading = true;
    db.collection("users")
      .doc($cookies.get("user_session"))
      .get()
      .then(userSnap => {
        if (userSnap.exists) {
          this.user = userSnap.data();
          this.time1 = this.user.birthday;
        }
      })
      .finally(() => {
        this.loading = false;
      });
  },

  methods: {
    updateUser(e) {
      e.preventDefault();     
      const { phone } = this.user;
      // console.log("day la ",phone)
      db.collection("users")
        .doc($cookies.get("user_session"))
        .update({...this.user, ...{birthday: this.time1}})
        .then(() => {
          console.log("user updated!");
        });
    }
  }
};
</script>
<style scoped>
h3 {
  padding-top: 3%;
  padding-left: 3%;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 1px;
  color: #212128;
}
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
  margin-top: 6% !important;
}
.title_form {
  border: 1px solid #dbdbdf;
  box-sizing: border-box;
  border-radius: 16px;
  width: 400px;
}
.title_form:active {
  border: 1px solid rgb(29, 29, 221);
}
.card {
  border: 1px solid white !important;
}
.title-checkin {
  margin: 0 20px 0 35px;
}
</style>
