<template>
  <div class="content-qr" id="app3">
       <h3>Sự kiện của bạn</h3>
        <div class="row myrow">
            <div class="col-md-4">
                <div class="box-item solid">
                    <div class="relative">
                        <div class="box-logo">
                            <img src="../../asset/img/nut.png" class="logo">
                        </div>
                        <div class="box-menu">
                            <a href="#"><img src="../../asset/img/menu3.png" class="menu3"></a>
                        </div>
                    </div>
                    <div class="box-text1">
                        <p class="text1">
                            [Sự Kiện] ra mắt sản phẩm mới Đài truyền hình 4.0 Gostudio của Gostream
                        </p>
                    </div>
                    <p class="text2">
                        <i class="far fa-clock"></i> <span class="box-item-text2">18h30p <span class="box-span"><i class="fas fa-circle icon-c"></i> </span>12/12/2019 </span>
                    </p>
                    <p class="text3">
                        Mã: 12454567
                    </p>
                    <button class="bton">
                        xem chi tiết
                    </button>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="box-item solid">
                    <div class="relative">
                        <div class="box-logo">
                            <img src="../../asset/img/nut.png" class="logo">
                        </div>
                        <div class="box-menu">
                            <a href="#"><img src="../../asset/img/menu3.png" class="menu3"></a>
                        </div>
                    </div>
                    <div class="box-text1">
                        <p class="text1">
                            [Sự Kiện] ra mắt sản phẩm mới Đài truyền hình 4.0 Gostudio của Gostream
                        </p>
                    </div>
                    <p class="text2">
                        <i class="far fa-clock"></i> <span class="box-item-text2">18h30p <span class="box-span"><i class="fas fa-circle icon-c"></i> </span>12/12/2019 </span>
                    </p>
                    <p class="text3">
                        Mã: 12454567
                    </p>
                    <button class="bton">
                        xem chi tiết
                    </button>
                </div>
            </div>
            <div class="col-md-4">
                 <router-link to="/newevent">
                <div class="box-item dashed">
                    <div class="box-add">
                        <div class="box-create">
                            <img src="../../asset/img/add.png" class="create">
                        </div>                      
                        <div class="box-text-add">
                            <p class="text-add">Tạo sự kiện ngay</p>
                        </div>                     
                    </div>
                </div>
                  </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
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
.box-bd {
    background: #FFF;
    box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    width: 100%;
    height: 703px;
    margin-top: 40px;
}

.myrow {
    margin-left: 0 !important;
    margin-right: 0 !important;
}

.box-title {
    width: 100%;
    height: 29px;
    margin: 36px 0 0 32px;
}

.title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #212128;
}

.box-item {
    margin-top: 32px;
    background: #FFFFFF;
    width: 100%;
    height: 362px;
    border-radius: 16px;
}

.solid {
    border: 1px solid #E6E7EA;
}

.dashed {
    border: 2px dashed #E6E7EA;
}

.box-logo {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 16px);
}

.logo {
    width: 100%;
}

.box-menu {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 16px;
    right: 16px;
}

.menu3 {
    width: 100%;
}

.relative {
    width: 100%;
    height: 116px;
    position: relative;
}

.box-text1 {
  margin: 12px 15px 5px 15px;
}

.text1 {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #212128;
    margin-bottom: 0;
}

.text2 {
    font-size: 14px;
    line-height: 150%;
    color: #6B6C72;
    text-align: center;
    margin-bottom: 8px;
}

.text3 {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #48AF74;
    margin-bottom: 16px;
}

.box-span {
    width: 100%;
    height: 21px;
    margin: 0 0.4rem;
    position: relative;
}

.icon-c {
    font-size: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -0%);
}

.bton {
    width: 78%;
    height: 43px;
    margin: 0 11%;
    background: linear-gradient(149.23deg, #9EE969 7.47%, #1EA85D 97.02%);
    border: 1px solid;
    border-radius: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    align-items: center;
    text-align: center;
    color: #FFF;
}

.box-add {
    width: 70%;
    height: 50%;
    margin: 25% 15%;
    position: relative;
}

.box-create {
    width: 112px;
    height: 112px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

}

.create {
    width: 100%;
}

.box-text-add {
    width: 100%;
    height: 24px;
    position: absolute;
    left: 0;
    bottom: 0;
}

.text-add {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 1px;
    color: #6B6C72;
}
</style>
