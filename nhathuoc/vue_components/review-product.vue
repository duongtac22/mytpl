<template>
  <div class="block-review-wrapper">
    <div class="block-review-main">
       <h2 class="title">Đánh giá  </h2>
          <div class="block-review">
              <div class="align-items-center d-flex flex-wrap">
                <div class="block-review-total">
                  <div class="review-avg">4/5</div>
                  <div class="review-star-avg">
                    <span class="span icon-star star4"></span>
                  </div>
                  <div class="review-rating-total">(42 nhận xét)</div>

                </div>
                <div class="block-review-right col">
                <div class="row_detail_number">
                    <span class="span icon-star star5"></span>
                    <div class="block_percent_rate">
                        <span style="width: 50%;"></span>
                    </div>
                    <span class="txt_number_start">23</span>
                </div>
                <div class="row_detail_number">
                    <span class="span icon-star star4"></span>
                    <div class="block_percent_rate">
                        <span style="width: 20%;"></span>
                    </div>
                    <span class="txt_number_start">5</span>
                </div>
                <div class="row_detail_number">
                    <span class="span icon-star star3"></span>
                    <div class="block_percent_rate">
                        <span style="width: 30%;"></span>
                    </div>
                    <span class="txt_number_start">2</span>
                </div>
                <div class="row_detail_number">
                    <span class="span icon-star star2"></span>
                    <div class="block_percent_rate">
                        <span style="width: 10%;"></span>
                    </div>
                    <span class="txt_number_start">0</span>
                </div>
                <div class="row_detail_number">
                    <span class="span icon-star star1"></span>
                    <div class="block_percent_rate">
                        <span style="width: 90%;"></span>
                    </div>
                    <span class="txt_number_start">0</span>
                </div>
                
                </div>
              </div>
    </div>

    <form action="" class="review-form" method="" onsubmit="return false ; " > 
        <textarea rows="4" id="review-content" placeholder="Mời bạn tham gia thảo luận, vui lòng nhập tiếng việt có dấu."></textarea> 
        <div class="review-actions">
            <div class="review-rate">
              <span class="title"> Đánh giá của bạn </span>
              <div class="rating" id="rating-review0" style="display: inline-block; vertical-align:bottom;">
                  <input type="radio" class="rating-input" id="rating-input-review-0-5" value="5" name="user_post[rate]" checked="">
                  <label for="rating-input-review-0-5" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="rating-input-review-0-4" value="4" name="user_post[rate]">
                  <label for="rating-input-review-0-4" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="rating-input-review-0-3" value="3" name="user_post[rate]">
                  <label for="rating-input-review-0-3" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="rating-input-review-0-2" value="2" name="user_post[rate]">
                  <label for="rating-input-review-0-2" class="rating-star"></label>
                  <input type="radio" class="rating-input" id="rating-input-review-0-1" value="1" name="user_post[rate]">
                  <label for="rating-input-review-0-1" class="rating-star"></label>
              </div>
            </div>

            <input type="text" id="review-name" placeholder="Họ tên ( bắt buộc ) ">

            <button class="submit-review">
                Gửi đánh giá
            </button>
        </div>
    </form>


    <!-- list danh gia -->
    <div class="review-list">

        <div class="review-item">
            <div class="review-name">
              <b class=""> Nhi Nguyễn</b>
              <span class="specialtext">
                <i class="fas fa-check-circle"></i>
                Đã mua hàng ở Mỹ Nhung
              </span>
            </div>
            <span class="review-time">
              Nhận xét 26/10/2020
            </span>
            <div class="review-rate">
              <span class="span icon-star star5"></span>
            </div>
            <div class="review-content">
                <b class="title">
                  Hàng dùng rất tốt, cực kì hài lòng
                </b>
                <p class="desc">
                  Mình đã dùng sản phẩm của bên Mỹ Nhung rất nhiều lần, và lần nào cũng rất hài lòng về sản phẩm của Mỹ nhung, hàng chính hãng và được đổi trả trong 3 ngày
                </p>
            </div>

            <div class="reply-review">
              <p class="reply-content">
                Chào bạn, Mỹ nhung pharmacy rất cảm ơn bạn đã sử dụng dịch vụ của chính tôi
              </p>
              <b class="reply-name text-uppercase">
                MỸ NHUNG ADMIN 
              </b>
            </div>
        </div>

        <div class="review-item">
            <div class="review-name">
              <b class=""> Nhi Nguyễn</b>
              <span class="specialtext">
                <i class="fas fa-check-circle"></i>
                Đã mua hàng ở Mỹ Nhung
              </span>
            </div>
            <span class="review-time">
              Nhận xét 26/10/2020
            </span>
            <div class="review-rate">
              <span class="span icon-star star5"></span>
            </div>
            <div class="review-content">
                <b class="title">
                  Hàng dùng rất tốt, cực kì hài lòng
                </b>
                <p class="desc">
                  Mình đã dùng sản phẩm của bên Mỹ Nhung rất nhiều lần, và lần nào cũng rất hài lòng về sản phẩm của Mỹ nhung, hàng chính hãng và được đổi trả trong 3 ngày
                </p>
            </div>

            <div class="reply-review">
              <p class="reply-content">
                Chào bạn, Mỹ nhung pharmacy rất cảm ơn bạn đã sử dụng dịch vụ của chính tôi
              </p>
              <b class="reply-name text-uppercase">
                MỸ NHUNG ADMIN 
              </b>
            </div>
        </div>

    </div>
    <!-- end -->
    </div>


    <div class="paging d-block text-right">
        <a href="javascript:;" class="pref">
            <i aria-hidden="true" class="fa right fa-angle-left "></i>
          </a>
          <a href="javascript:;" class="page-item current">
            1
          </a>
          <a href="javascript:;" class="page-item">
            2
          </a>
          <a href="javascript:;" class="page-item">
            3
          </a>
          <a href="javascript:;" class="next">
            <i aria-hidden="true" class="fa right fa-angle-right "></i>
          </a>
    </div>

  </div>
</template>