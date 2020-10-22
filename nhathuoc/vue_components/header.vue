<template>
    <header class="header">
        <div class="topbar container">
            <div class="topbar-left">
                <a href="#" class="location">
                    <img src="images/ic_location.png" alt="">
                    <span>Số 48 Mạc Thị Bưởi - P.Vị Hoàng - TP.Nam Định </span>
                </a>
            </div>
            <ul class="topbar-right">
                <li class="link-item">
                    <a href="#">Khuyến mãi</a>
                </li>
                <li class="link-item">
                    <a href="#">Hỏi đáp</a>
                </li>
                <li class="link-item">
                    <a href="#">Chính sách</a>
                </li>
                <li class="link-item">
                    <a href="#">Liên hệ</a>
                </li>
            </ul>
        </div>
        <div class="header-main">
            <div class="container header-main-container">
                <div class="box-head-1">
                    <a href="#" class="logo">
                        <img src="images/logo_h.png" alt="">
                    </a>
                    <div class="menu-fixed">
                        <a href="javascript:;" class="btn-cat-fixed">
                            <img src="images/icon_menu-1.png" alt="">
                            <span>Menu</span>
                        </a>   
                        <box-menu class="js-menu-fixed"></box-menu>
                    </div>
                </div>
                <div class="box-head-2">
                    <div class="search">
                        <div class="drop-search">
                            <a href="javascript:;" class="drop-cat-search">
                                DANH MỤC
                                <img src="images/ic_down-arrow-1.png" alt="">
                            </a>
                            <ul class="list-cat-search">
                                <li>
                                    <a href="#">
                                        <img src="images/menu_1.png" class="icon" alt="">
                                        <img src="images/menu_1-1.png" class="icon-hover" alt="">
                                        <span>Thuốc không kê đơn</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/menu_2.png" class="icon" alt="">
                                        <img src="images/menu_2-1.png" class="icon-hover" alt="">
                                        <span>Vitamin, thuốc bổ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/menu_3.png" class="icon" alt="">
                                        <img src="images/menu_3-1.png" class="icon-hover" alt="">
                                        <span>Thực phẩm chức năng</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/menu_4.png" class="icon" alt="">
                                        <img src="images/menu_4-1.png" class="icon-hover" alt="">
                                        <span>Thuốc kháng sinh</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/menu_5.png" class="icon" alt="">
                                        <img src="images/menu_5-1.png" class="icon-hover" alt="">
                                        <span>Chăm sóc sắc đẹp</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/menu_6.png" class="icon" alt="">
                                        <img src="images/menu_6-1.png" class="icon-hover" alt="">
                                        <span>Chăm sóc cá nhân</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/menu_7.png" class="icon" alt="">
                                        <img src="images/menu_7-1.png" class="icon-hover" alt="">
                                        <span>Thiết bị Y tế</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <form action="" class="form-search">
                            <input type="text" placeholder="Nhập từ khóa tìm kiếm">
                            <button>Tìm kiếm</button>
                        </form>
                    </div>
                </div>
                <div class="box-head-3">
                    <div class="hotline">
                        <img src="images/ic_phone.png" alt="">
                        <p>
                            <span>Hotline</span>
                            <b>039 599 6699 </b>
                        </p>
                    </div>
                    <a href="#" class="shop-cart">
                        <img src="images/ic_cac.png" alt="">
                        <span>Giỏ hàng</span>
                        <i class="cart-count">0</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="header-bot container">
            <div class="menu-cat">
                <a href="javascript:;" class="btn-menu-cat">
                    <img class="ic_menu" src="images/ic_menu-1.png" alt="">
                    DANH MỤC SẢN PHẨM
                    <img class="ic_down" src="images/ic_arrow_down.png" alt="">
                </a>
                <box-menu></box-menu>
            </div>
            <ul class="menu">
                <li class="menu-item">
                    <a href="#" class="menu-link">
                        TRANG CHỦ
                    </a>
                </li>
                <li class="menu-item">
                    <a href="#" class="menu-link">
                        GIỚI THIỆU
                    </a>
                </li> 
                <li class="menu-item">
                    <a href="#" class="menu-link">
                        TIN TỨC
                    </a>
                    <ul class="sub-menu">
                        <li class="sub-item">
                            <a href="#" class="menu-sub-item">Tin tức 1</a>
                        </li>
                        <li class="sub-item">
                            <a href="#" class="menu-sub-item">Tin tức 2</a>
                        </li>
                        <li class="sub-item">
                            <a href="#" class="menu-sub-item">Tin tức 3</a>
                        </li>
                    </ul>
                </li> 
                <li class="menu-item">
                    <a href="#" class="menu-link">
                        TUYỂN DỤNG
                    </a>
                </li> 
                <li class="menu-item">
                    <a href="#" class="menu-link">
                        LIÊN HỆ
                    </a>
                </li> 
            </ul>
        </div>
    </header>
</template>

<script>
    Vue.component('box-menu',  httpVueLoader('vue_components/menu.vue'));
</script>