<template>
    <div class="row">
        <div class="list-img product-detail-left col-12 col-md-5 col-lg-5">
            <div class="large-image">
                <a href="javascript:;"
                data-rel="product-list-img">
                    <img class="checkurl img-responsive" id="img_01"
                    src="images/product/big-img-detail.png"
                    alt="Tên sản phẩm">
                </a>

            </div>

            <div id="product-slider-img"
            class="js-carousel"
            data-loop="false" data-lg-items="4" data-md-items="3" data-nav="false" data-sm-items="3"
            data-xs-items="3" data-xxs-items="3" >
                <div class="item">
                    <a href="javascript:void(0)"
                        data-image="images/product/big-img-detail.png"
                        data-zoom-image="images/product/big-img-detail.png" class="active">
                        <img 
                        data-img="images/product/big-img-detail.png"
                        src="images/product/small-img-detail1.png"
                        alt="Tên sản phẩm">
                    </a>
                </div>
                <div class="item">
                    <a href="javascript:void(0)"
                        data-image="https://via.placeholder.com/1000/"
                        data-zoom-image="https://via.placeholder.com/1000/">
                        <img 
                        data-img="https://via.placeholder.com/1000/"
                        src="images/product/small-img-detail2.png"
                        alt="Tên sản phẩm">
                    </a>
                </div>
                <div class="item">
                <a href="javascript:void(0)"
                    data-image="https://via.placeholder.com/1000/4e4e4e"
                    data-zoom-image="https://via.placeholder.com/1000/4e4e4e">
                    <img 
                    data-img="https://via.placeholder.com/1000/4e4e4e"
                    src="images/product/small-img-detail3.png"
                    alt="Tên sản phẩm">
                </a>
                </div>
                <div class="item">
                <a href="javascript:void(0)"
                    data-image="https://via.placeholder.com/1000/00ff"
                    data-zoom-image="https://via.placeholder.com/1000/00ff">
                    <img 
                    data-img="https://via.placeholder.com/1000/00ff"
                    src="images/product/small-img-detail4.png"
                    alt="Tên sản phẩm">
                </a>
                </div>
            </div>
        </div>

        <div class="product-detail-right col-12 col-md-7 col-lg-7">
            <span class="p-name"> Colosseum Mortal</span>
            <div class="p-status"> Tình trạng : <span class="color-green">Còn hàng</span> </div>
            <div class="product-detail-pri">
                <span class="p-price"> 599.000đ </span>
                <span class="p-old-price"> 999.000đ</span>
            </div>

            <div class="product-detail-config">
                <div class="config-item">
                    <b class="title">Chọn màu sắc</b>
                    <div class="config-list">
                    <a href="javascript:;" class="config-item active">
                        <span class="config-attr">
                        <img src="images/product/config-img1.png" alt="">
                        </span>
                        <span class="config-name">
                        Black
                        </span>
                    </a>
                    <a href="javascript:;" class="config-item">
                        <span class="config-attr">
                        <img src="images/product/config-img2.png" alt="">
                        </span>
                        <span class="config-name">
                        Silver
                        </span>
                    </a>
                    <a href="javascript:;" class="config-item">
                        <span class="config-attr">
                        <img src="images/product/config-img3.png" alt="">
                        </span>
                        <span class="config-name">
                        Rosegold
                        </span>
                    </a>
                    </div>
                </div>
            </div>

            <div class="product-detail-action">
                <b class="title">Chọn số lượng</b>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                    <div class="select-qty ">
                    <select name="qty" class="select-qty-custom">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    
                    </div>

                    <a href="" class="btn-buynow"> Mua ngay</a>
                    <a href="" class="btn-addtocart"> <img src="images/bag-add-18-1.svg" alt=""> Thêm vào giỏ hàng </a>
                </div>
            </div>

            <div class="product-detail-desc">
                <b class="title"> Mô tả sản phẩm </b>
                <p class="nd">
                    Colosseum Mortar được Curnon thiết kế dựa trên sự năng động, phá cách của giới trẻ. Dùng màu đen làm tone chủ đạo, mặt đồng hồ đơn giản làm nổi bật kim giờ với điểm nhấn màu vàng hồng giúp Colosseum Mortar trở nên vô cùng ấn tượng...
                </p>
            </div>
        </div>  
    </div>

    
</template>