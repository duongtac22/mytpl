<template>
	<div class="popup__ticket">
		<div class="overlay__modal"></div>
		<div class="form__ticket">
			<h3 class="title__ticket">Tạo loại vé mới</h3>
			<form action="" class="box__form-ticket">
				<div class="box__input input__ticket-name">
					<h4>Tên vé</h4>
					<input type="text" name="" id="" placeholder="Tên vé" />
				</div>
				<div class="box__input input__ticket-code">
					<h4>Tiền tố trong mã vé</h4>
					<input
						type="text"
						name=""
						id=""
						placeholder="Ví dụ: VIP thì mã vé sẽ có dạng VIP_00001"
					/>
				</div>
				<div class="row">
					<div class="flex__box-input">
						<div class="box__input input__ticket-quantity">
							<h4>Số lượng vé</h4>
							<input type="number" name="" id="" placeholder="Số lượng vé" />
						</div>
						<div class="box__input input__ticket-price">
							<h4>Giá vé</h4>
							<input type="number" name="" id="" placeholder="Giá vé" />
						</div>
						<div class="checkbox__heading">
							<input type="checkbox" name="" id="free__ticket" />
							<label for="free__ticket">Miễn phí</label>
						</div>
					</div>
				</div>
				<div class="box__input input__ticket-info">
					<h4>Thông tin về sự kiện</h4>
					<textarea
						name=""
						id=""
						cols=""
						rows="7"
						placeholder="Nhập mô tả chi tiết về vé, lợi ích khách hàng nhận được khi chọn mua vé này"
					></textarea>
				</div>
				<div class="box__btn">
					<a href="" title="" class="btn__ticket btn-cancel">Hủy</a>
					<a href="" title="" class="btn__ticket btn-create">Tạo vé ngay</a>
				</div>
			</form>
		</div>
	</div>
</template>
