<template>
  <div>
    <h3>Thống kê lịch sử</h3>
    <input class="search" type="text" placeholder="Tìm kiếm sự kiện" />
  
    <div class="content">
      <table class="table">
        <thead class="title">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên sự kiện</th>
            <th scope="col">Thời gian</th>
            <th scope="col">Thêm</th>
          </tr>
        </thead>
        <tbody>
          <tr class="" v-for="event in events" :key="event['.key']">
            <th scope="row">1</th>
            <td>[Sự kiện] ra mắt sản phẩm mới </td>
            <td>{{event.date}}</td>

            <td>
              <button class="icon">
                <img src="../../asset/img/eye.png" />
              </button>
               <button class="icon" >
                <img src="../../asset/img/pdf.png" />
              </button>
               <button class="icon" >
                <img src="../../asset/img/xls.png" />
              </button>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="menu">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

const db = firebase.firestore();

export default {
  data() {
    return {
      events:[]
    };
  },
  firestore() {
    return {
      events: db.collection("events")
    };
  },
};
</script>
<style scoped>
.icon {
  background: #ffffff;
  border: 1px solid #dbdbdf;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1% 4% 4% 4%;
}
h3 {
  padding-top: 3%;
  padding-left: 3%;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 1px;
  color: #212128;
}
.search {
  width: 35%;
  border: 1px solid #dbdbdf;
  box-sizing: border-box;
  border-radius: 16px;
  height: 38px;
  text-align: left;
  font-size: 14px;
  padding-left: 15px;
  margin-top: 2%;
  margin-left: 2.5%;
}
.content {
  margin: 3% 2% 7% 2%;
  text-align: center;
}
.title {
  background: #efeff2;
  color: #212128;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  border-radius: 8px 8px 0px 0px;
}
tbody {
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #6b6c72;
}
li {
  padding: 0 0 0 0 !important;
}
.menu {
  position: absolute;
  bottom: 0;
  right: 40%;
}
</style>
