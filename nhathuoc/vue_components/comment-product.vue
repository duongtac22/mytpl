<template>
    <div class="block-comment-wrapper">
         <h2 class="title"> Bình luận  </h2>
        <form action="" class="comment-form" method="" onsubmit="return false ; " > 
            <textarea rows="4" id="comment-content" placeholder="Mời bạn tham gia thảo luận, vui lòng nhập tiếng việt có dấu."></textarea> 
            <div class="comment-actions">

                <div class="select-sex">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male" checked>
                        <label class="form-check-label" for="male">Anh</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female">
                        <label class="form-check-label" for="female">Chị</label>
                    </div>
                </div>

                <input type="text" id="comment-name" placeholder="Họ tên ( bắt buộc ) ">

                <button class="submit-comment">
                    Gửi bình luận
                </button>
            </div>
        </form>

        <div class="comment-list">
            <div class="comment-item">
                <b class="comment-name d-block">
                    Tuannhx
                </b>
                <span class="comment-time d-block">
                    25/11/2020
                </span>
                <p class="comment-content">
                    Sản phẩm này OK không mọi người, mình định mua
                </p>
            </div>
             <div class="comment-item">
                <b class="comment-name d-block">
                    Abcxaa
                </b>
                <span class="comment-time d-block">
                    25/12/2020
                </span>
                <p class="comment-content">
                    Sản phẩm này OK không mọi người, mình định mua
                </p>
            </div>
        </div>
    </div>
</template>