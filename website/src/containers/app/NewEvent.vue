<template>
  <div>
    <Login-header></Login-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-11 form">
          <div class="title">
            <div style="margin-left:3%">
              <img src="../../asset/img/muiten.png" alt="" />
            </div>
            <h3 style="margin:auto">Tạo sự kiện</h3>
          </div>
          <div class="content">
            <div class="form-group">
              <label class="label-form" for="exampleInputEmail1"
                >Tên sự kiện</label
              >
              <input
                type="text"
                class="form-control name1"
                placeholder="Nhập tên sự kiện"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label class="label-form">Ngày tổ chức</label>
              <br />
              <date-picker v-model="time" valueType="format" type="datetime" showSecond="false"	></date-picker>
          
            </div>
            <label class="label-form">Mô tả sự kiện</label>
            <div class="form-group">
              <textarea
                class="form-control"
                id="comment"
                v-model="description"
              ></textarea>
            </div>
            <button class="btn btn-form">
              Hủy
            </button>
            <button class="btn btn-form" @click="AddEvent()">
              Tạo sự kiện
            </button>
            </div>
            <button @click="kaka()">thang</button>
          </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import VueCookies from "vue-cookies";
import firebase from "firebase";

const db = firebase.firestore();

export default {
  data() {
    return {
      time: null,
      name: null,
      description: null,
      users:[],
      
    };
  },
  methods: {
    kaka(){
alert(this.time)
    },
    AddEvent() {
      db.collection("events")
        .add({
          name: this.name,
          date: this.time,
          country: this.description,     
          admin: $cookies.get("user_session"),   
          users:[] 
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
};
</script>
<style>
.content{
  width: 55%;
  margin-top:2%; 
  padding-left:4%; 
}
.form {
  margin-left: 3.5%;
  padding-right: 5%;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  margin-top: 2%;
}
.label-form {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #212128;
}
.name1 {
  border: 1px solid #dbdbdf;
  box-sizing: border-box;
  border-radius: 16px;
  width: 400px;
}
.form-group {
  margin-bottom: 32px;
}
.title {
  display: flex;
  flex-wrap: wrap-reverse;
  margin-top: 32px;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  color: #212128;
}
.btn-form {
  background: linear-gradient(152.25deg, #9ee969 7.47%, #1ea85d 97.02%);
  border-radius: 16px;
  color: white;
}
</style>
