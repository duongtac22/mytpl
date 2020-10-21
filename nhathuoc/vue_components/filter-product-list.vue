<template> 
    <div class="filter-box">
        <div class="sub-category box-left-item mb-30">
            <span class="title big-title">
            DANH SÁCH SẢN PHẨM
            </span>
            <div class="list-category attr-list one-col">
                <a href="javascript:;" class="filter-item">
                   Thuốc không kê đơn  <span class="filter-count">(50)</span>
                </a>
                <a href="javascript:;" class="filter-item">
                    Vitamin, thuốc bổ <span class="filter-count">(50)</span>
                </a>
                <a href="javascript:;" class="filter-item">
                   Thực phẩm chức năng <span class="filter-count">(50)</span>
                </a>
            </div>
        </div>
        <div class="attr-item price-filter">
            <span class="attr-name"> Khoảng giá tiền</span>
            <div class="box-filter filter-check attr-list">
                <div class="price-filter-range">
<div id="slider-range"></div>
                </div>
                
                <div class="slider-price-range">
                    <div class="range-item">
                        <span> Từ </span>
                        <input type="text" id="minPrice" value="0">
                    </div>
                    <div class="range-item">
                        <span> Đến </span>
                        <input type="text" id="maxPrice" value="500.000">
                    </div>
                </div>
            </div>
        </div>
        <div class="attr-item">
            <span class="attr-name"> Thương hiệu </span>
            <div class="attr-list">
                <div class="filter-item">
                    <span>
                        <label for="filter-Brauer">
                        <input type="checkbox" id="filter-Brauer" > 
                        <i class="fa"></i>
                        Brauer
                        </label>
                    </span>
                     <span>
                        <label for="filter-Colgate">
                        <input type="checkbox" id="filter-Colgate" > 
                        <i class="fa"></i>
                        Colgate
                        </label>
                    </span>
                     <span>
                        <label for="filter-Mega">
                        <input type="checkbox" id="filter-Mega" > 
                        <i class="fa"></i>
                        Mega
                        </label>
                    </span>
                </div>
            </div>

        </div>
    </div>

</template>