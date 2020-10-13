<template>
  <header class="header">
      <div class="header-top">
        <div class="container d-flex align-items-center justify-content-between flex-wrap">
        
          <ul class="social-list list-unstyled p-0 ">
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
              <span class="text fira-light">Số 10, Trần Phú, Hà Đông, Hà Nội</span>
            </a>
            <a href="tel:0192837465" class="fs-13 float-left">
              <span class="material-icons fs-14">
              phone
              </span> 
              <span class="text fira-light">Hotline : 1900 1099</span>
            </a>
          </div>


        </div>
      </div>
      <div class="header-bottom">
        <div class="container d-flex align-items-center justify-content-between position-relative">
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
                          <a href="/dong-ho-nam.html">
                            Đồng hồ Nam
                          </a>
                        </li>
                        <li class="sub2">
                          <a href="/dong-ho-nam.html">
                            Đồng hồ Nữ
                          </a>
                        </li>
                        <li class="sub2">
                          <a href="/dong-ho-nam.html">
                            Phụ kiện
                          </a>
                        </li>
                      </ul>

                    <li>
                    <li class="menu-item"><a href="/khuyen-mai.html" class="menu-link color-white fs-16">Khuyến mãi</a></li>
                    <li class="menu-item"><a href="/tin-tuc.html" class="menu-link color-white fs-16">Tin tức</a></li>
                    <li class="menu-item"><a href="/lien-he.html" class="menu-link color-white fs-16">Liên hệ</a></li>
                </ul>
            </nav>

            <ul class="header-bottom-right list-unstyled p-0 d-flex position-relative">
               <li class="item " v-if="login">
                  <a href="/tai-khoan.html">
                   <img src="images/user-ava.png" alt="" class="rounded-img" width="32" height="32">
                  </a>
                 
                </li>
                <li class="item " v-else>
                  <span class="material-icons fs-16 color-white">account_circle</span>
                  <a href="javascript:;" data-toggle="modal" data-target="#popRegister" class="color-white">Đăng ký/</a>
                  <a href="javascript:;" data-toggle="modal" data-target="#popLogin" class="color-white"> Đăng nhập</a>
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
                <a href="#menu-mobile" class="bar-menu-mobile"><span class="material-icons fs-20 color-white">
  menu
  </span></a>
            </div>
        </div> 
      </div>
      <div class="nav_search_mobi d-lg-none">
        <div class="container">
                
          <div class="header_search header_searchs">
            <form action="" method="" class="input-group search-bar">
              <input type="hidden" name="type" value="product" /> <input type="search" name="" value="" placeholder="Nhập từ khóa tìm kiếm ..." class="search-input" />
              <span class="input-group-btn">
                  <button class="btn btn-submit-search">
                    <span class="search-submit material-icons color-theme ">
                      search
                    </span>
                  </button>
              </span>
            </form>
          </div>
        </div>
      </div> 
      
      <h1 class="d-none">Tieu de H1 </h1>

            <!--  modal product-->
        <div class="modal fade" id="popRegister" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog modal-user" role="document">
            <div class="modal-content">

              <a href="javascript:;" data-dismiss="modal" aria-label="Close" class="close-modal">
                <img src="images/close-modal.png" alt="">
              </a>

              <div class="modal-register " id="modal-register-content">

                  <div class="head-modal mb-30">
                    <div class="title"> Đăng ký </div>
                    <a href="/home.html">
                      <img src="images/logo-modal.png" alt=" Nonwat ">
                    </a>
                  </div>

                  <div class="modal-user-content">
                    <div class="user-input mb-20">
                        <span class="d-block mb-1">
                            Email <span class="color-red"> * </span>
                        </span>
                        <input type="text" id="register-email" class="change-input" placeholder="" value="tamhoangminh@vccorp.vn">
                    </div>
                    <div class="user-input mb-20">
                        <span class="d-block mb-1">
                            Mật khẩu <span class="color-red"> * </span>
                        </span>
                        <input type="password" id="register-password" class="change-input" placeholder="" value="********">
                    </div>
                    <div class="user-input mb-20">
                        <span class="d-block mb-1">
                            Nhập lại mật khẩu <span class="color-red"> * </span>
                        </span>
                        <input type="password" id="register-repassword" class="change-input" placeholder="" value="********">
                    </div>
                    
                    <button class="btn btn-submit-change m-auto">
                        Đăng ký
                    </button>

                    <span class="d-block fs-12 mb-20 mt-10 fira-light">
                      Bằng việc đăng ký, bạn đồng ý với chính sách của chúng tôi
                    </span>

                    <div class="position-relative line-style text-center mb-20">
                      <span>Hoặc</span>
                    </div>

                    <div class="login-3rd d-block text-center">
                        <a href="javascript:;" class="d-block login-3rd-item login-fb">
                          <img src="images/login-fb.svg" alt="" width="16" height="16">
                          Đăng ký bằng Facebook
                        </a>
                        <a href="javascript:;" class="d-block login-3rd-item login-gg">
                          <img src="images/login-gg.svg" alt="" width="16" height="16">
                            Đăng ký bằng Google
                        </a>

                        <p class="fs-13">
                          Bạn đã có tài khoản? <a href="">Đăng nhập ngay</a>
                        </p>

                    </div>
                  </div>

              </div>

            </div>
          </div>
        </div>

        <div class="modal fade" id="popLogin" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog modal-user" role="document">
            <div class="modal-content">

              <a href="javascript:;" data-dismiss="modal" aria-label="Close" class="close-modal">
                <img src="images/close-modal.png" alt="">
              </a>

              <div class="modal-login" id="modal-login-content">

                                  <div class="head-modal mb-30">
                    <div class="title"> Đăng nhập </div>
                    <a href="/home.html">
                      <img src="images/logo-modal.png" alt=" Nonwat ">
                    </a>
                  </div>

                  <div class="modal-user-content">
                    <div class="user-input mb-20">
                        <span class="d-block mb-1">
                            Email 
                        </span>
                        <input type="text" id="login-email" class="change-input" placeholder="" value="tamhoangminh@vccorp.vn">
                    </div>
                    <div class="user-input mb-20">
                        <span class="d-block mb-1">
                            Mật khẩu 
                        </span>
                        <input type="password" id="login-password" class="change-input" placeholder="" value="********">
                    </div>
                    
                    <button class="btn btn-submit-change m-auto">
                        Đăng nhập
                    </button>

                    <div class="position-relative line-style text-center mb-20 mt-10">
                      <span>Hoặc</span>
                    </div>

                    <div class="login-3rd d-block text-center">
                        <a href="javascript:;" class="d-block login-3rd-item login-fb">
                          <img src="images/login-fb.svg" alt="" width="16" height="16">
                          Đăng nhập bằng Facebook
                        </a>
                        <a href="javascript:;" class="d-block login-3rd-item login-gg">
                          <img src="images/login-gg.svg" alt="" width="16" height="16">
                            Đăng nhập bằng Google
                        </a>

                        <p class="fs-13">
                          Bạn chưa có tài khoản? <a href="">Đăng ký ngay</a>
                        </p>

                    </div>
                  </div>

              </div>

            </div>
          </div>
        </div>
  </header>
</template>


<script>
module.exports = {
  props: ["login"],
};
</script>