<template>
  <div class="p-container">
    <div class="p-img">
      <a class="p-thumbnail" href="">
        <img v-bind:src="img" v-bind:alt="name" />
      </a>
      <div class="hover-button">
        <a href="javascript:;" data-toggle="modal" data-target="#popProduct" class="btn-buynow">
                   <span class="material-icons">
visibility
</span> Xem nhanh
        </a>
        <a href="javascript:;" class="btn-addtocart">
<img src="images/bag-add-18-1.svg" alt=""> Thêm vào giỏ hàng
        </a>
      </div>
    </div>
    
    <div class="p-info">
      <a class="p-name" href="" > {{ name }} </a>
      <span class="p-price"><del class="p-price">{{price}}đ</del><ins class="p-oldPrice"> {{mprice}}đ</ins></span>
    </div>


  </div>
</template>

<script>
module.exports = {
  props: ["price", "name", "img","mprice"],
};
</script>