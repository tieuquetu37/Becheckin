<template>
  <div id="app2">
    <div class="container-fluid page2" id="menu-1">
      <div class="container ">
        <div class="box-title">
          <p class="title">Hướng dẫn Check in</p>
        </div>
        <div class="row center mg-top">
          <div class="col-auto">
            <div class="box-circle">
              <div class="circle changetitle" @click='changetitle1()'>
                <a class="circle-text">B1</a>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <div class="box-circle changetitle" @click='changetitle2()'>
              <div class="circle">
                <a class="circle-text">B2</a>
              </div>
            </div>
          </div>
          <div class="col-auto box-hover">
            <div class="box-circle">
              <div class="circle changetitle" @click='changetitle3()'>
                <a class="circle-text">B3</a>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <div class="box-circle changetitle" @click='changetitle4()'>
              <div class="circle">
                <a class="circle-text">B4</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row r-page">
          <div class="col-6 item-our">
            <div class="box-contact">
              <h3 class="contact">{{title}}</h3>
            </div>
            <div class="box-contact-text">
              <p class="contact-text">{{content}}</p>
            </div>
          </div>
          <div class="col-6 item-our">
            <div class="box-shadow right">
            </div>
          </div>
        </div>
        <!-- page3 -->
      </div>
    </div>
    <div class="container" id="menu-2">
      <div class="row c">
        <div class="col-xl-12 item-our">
          <div class="box-title">
            <p class="title">Tính năng nổi bật</p>
          </div>
          <div class="row content-item">
            <div class="col-md-6 ">
              <div class="box-shadow">
              </div>
            </div>
            <div class="col-md-6 info-our">
              <div class="box-contact">
                <h3 class="contact">Bước 1: Truy cập vào Website hoặc app Becheck</h3>
              </div>
              <div class="box-contact-text">
                <p class="contact-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
              </div>
            </div><!-- END INFO OUR -->
          </div><!-- END CONTENT ITEM -->
        </div><!-- END ITEM OUR -->
        <div class="col-xl-12  item-our">
          <div class="row content-item">
            <div class="col-md-6 ">
              <div class="box-shadow right">
              </div>
            </div>
            <div class="col-md-6 info-our">
              <div class="box-contact">
                <h3 class="contact">Bước 1: Truy cập vào Website hoặc app Becheck</h3>
              </div>
              <div class="box-contact-text">
                <p class="contact-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
              </div>
            </div><!-- END INFO OUR -->
          </div><!-- END CONTENT ITEM -->
        </div><!-- END ITEM OUR -->
        <div class="col-xl-12 item-our">
          <div class="row content-item">
            <div class="col-md-6 ">
              <div class="box-shadow">
              </div>
            </div>
            <div class="col-md-6 info-our">
              <div class="box-contact">
                <h3 class="contact">Bước 1: Truy cập vào Website hoặc app Becheck</h3>
              </div>
              <div class="box-contact-text">
                <p class="contact-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
              </div>
            </div><!-- END INFO OUR -->
          </div><!-- END CONTENT ITEM -->
        </div><!-- END ITEM OUR -->
      </div><!-- END ROW -->
    </div>
    <!-- Becheck  -->
    <div class="container-fluid d" style="">
      <div class="box-title">
        <p class="title">Becheck giúp bạn</p>
      </div>
      <div class="row center pd-top">
        <div class="col-auto">
          <div class="box-becheck">
            <div class="boximg">
              <img src="../../asset//img/a.png">
            </div>
            <div class="box-becheck-text">
              <p class="becheck-text"> Tiết kiệm thời gian check in</p>
            </div>
            <div class="box-becheck-text2">
              <p class="becheck-text2">
                It is a long established fact that will be distracted by the
              </p>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div class="box-becheck">
            <div class="boximg">
              <img src="../../asset//img/b.png">
            </div>
            <div class="box-becheck-text">
              <p class="becheck-text"> Tiết kiệm nhân lực</p>
            </div>
            <div class="box-becheck-text2">
              <p class="becheck-text2">
                It is a long established fact that will be distracted by the
              </p>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div class="box-becheck">
            <div class="boximg">
              <img src="../../asset//img/c.png">
            </div>
            <div class="box-becheck-text">
              <p class="becheck-text"> Dễ dàng tạo và quản lý sự kiện</p>
            </div>
            <div class="box-becheck-text2">
              <p class="becheck-text2">
                It is a long established fact that will be distracted by the
              </p>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div class="box-becheck">
            <div class="boximg">
              <img src="../../asset//img/d.png">
            </div>
            <div class="box-becheck-text">
              <p class="becheck-text"> Quản lý danh sách khách mời dễ dàng</p>
            </div>
            <div class="box-becheck-text2">
              <p class="becheck-text2">
                It is a long established fact that will be distracted by the
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid e" id="menu-3">
      <div class="row">
        <div class="box-logo-e">
          <img src="../../asset//img/logoa.png">
        </div>
        <div class="box-e">
          <p class="text-e1"> Tải app ngay</p>
          <p class="text-e2">
            It is a long established fact that will be distracted by the
          </p>
          <ul>
            <li><img src="../../asset/img/app1.png"> </li>
            <li><img src="../../asset//img/app2.png"> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: 'Bước 1: Truy cập vào Website hoặc app Becheck',
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
    }
  },
  methods: {
    changetitle1() {
      this.title = 'Bước 1: Truy cập vào Website hoặc app Becheck',
        this.content = "Buoc 1 a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
    },
    changetitle2() {

      this.title = 'Bước 2: Truy cập vào Website hoặc app Becheck',
        this.content = "Buoc 2 a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
    },
    changetitle3() {
      this.title = 'Bước 3: Truy cập vào Website hoặc app Becheck',
        this.content = "Buoc 3 a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
    },
    changetitle4() {
      this.title = 'Bước 4: Truy cập vào Website hoặc app Becheck',
        this.content = "Buoc 4 a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
    }
  },
};

</script>
<style scoped>
.changetitle {
  cursor: pointer !important;
}

</style>
