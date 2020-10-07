<template>
   
<header class="header">
    <div class="header-top">
      <div class="container d-flex align-items-center justify-content-between">
        <ul class="social-list list-unstyled p-0">
          <li class="social-item">
              <a href="/" class="material-icons fs-13">
              facebook
            </a>
          </li>
          <li class="social-item">
            <a href="/" class="material-icons fs-13">
              facebook
            </a>
          </li>
          <li class="social-item">
             <a href="/" class="material-icons fs-13">
              facebook
            </a>
          </li>
          <li class="social-item">
             <a href="/" class="material-icons fs-13">
              facebook
            </a>
          </li>
        </ul>

        <div class="header-top-right">
          <a href="" class="fs-13 float-left">
            <span class="material-icons fs-14">
            location_on
            </span> 
            <span class="text">Số 10, Trần Phú, Hà Đông, Hà Nội</span>
          </a>
          <a href="tel:0192837465" class="fs-13 float-left">
            <span class="material-icons fs-14">
            phone
            </span> 
            <span class="text">Hotline : 1900 1099</span>
          </a>
        </div>


      </div>
    </div>
    <div class="header-bottom">
      <div class="container d-flex align-items-center justify-content-between">
          <div class="logo">
              <a href="/">
                <img src="images/logo.png" alt="logo non-wat" /></a>
          </div>
          <nav class="main-menu">
              <ul class="menu list-unstyled p-0 d-flex">
                  <li class="menu-item active"><a href="/" class="menu-link  color-white fs-16">Trang chủ</a></li>
                  <li class="menu-item has-sub">
                    <a href="/san-pham" class="menu-link color-white fs-16">Sản phẩm 
                      <span class="material-icons">arrow_drop_down</span>
                    </a>

                    <ul class="list-unstyled sub-menu">
                      <li class="sub2">
                        <a href="">
                          Đồng hồ Nam
                        </a>
                      </li>
                      <li class="sub2">
                        <a href="">
                          Đồng hồ Nữ
                        </a>
                      </li>
                      <li class="sub2">
                        <a href="">
                          Phụ kiện
                        </a>
                      </li>
                    </ul>

                  <li>
                  <li class="menu-item"><a href="/khuyen-mai" class="menu-link color-white fs-16">Khuyến mãi</a></li>
                  <li class="menu-item"><a href="/tin-tuc" class="menu-link color-white fs-16">Tin tức</a></li>
                  <li class="menu-item"><a href="/lien-he" class="menu-link color-white fs-16">Liên hệ</a></li>
              </ul>
          </nav>

          <ul class="header-bottom-right list-unstyled p-0 d-flex">
              <li class="item ">
                <span class="material-icons fs-16 color-white">account_circle</span>
                <a href="/dang-ky" class="color-white">Đăng ký /</a>
                <a href="/dang-nhap" class="color-white">Đăng nhập</a>
              </li>

              <li class="item search-box position-relative">
                <a href="javascript:;">
                  <span class="search-box material-icons color-theme ">
                    search
                  </span>
                </a>
                <div class="box-search">
                  <form action="/" method="" enctype="multipart/form-data">
                    <input type="text" name="q" placeholder="Nhập từ khóa tìm kiếm" class="search_input" id="search-keyword" autocomplete="off">
                    <button type="submit">
                        <span class="search-box material-icons">
                          search
                        </span>
                    </button>
                  </form>
                </div>
              </li>


              <li class="item cart-top">
                  <a href="/gio-hang" class="position-relative">
                    <span class="cart-box material-icons color-theme">
                      shopping_cart
                    </span>
                    <span class="cart-summary">
                      2
                    </span>
                  </a>
              </li>
          </ul>

          <div class="d-lg-none">
              <a href="#menu-mobile" class="bar-menu-mobile"><i aria-hidden="true" class="fa fa-bars"></i></a>
          </div>
      </div>  
    </div>
    <h1 class="d-none">Tieu de H1 </h1>
</header>
</template>