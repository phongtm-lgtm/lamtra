"use client";

import { useApp } from "@/components/site-shell";

export function ContactForm() {
  const { showToast } = useApp();

  return (
    <form
      className="form-card"
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.reset();
        showToast("Đã ghi nhận lời nhắn. Langfarm sẽ phản hồi sớm.");
      }}
    >
      <h2>Gửi lời nhắn</h2>
      <label className="field">Tiêu đề<input required placeholder="Nhập tiêu đề tin nhắn" /></label>
      <label className="field">Tên<input required placeholder="Nhập tên của bạn" /></label>
      <label className="field">Số điện thoại<input placeholder="Nhập số điện thoại của bạn" /></label>
      <label className="field">Email<input type="email" required placeholder="Nhập địa chỉ email của bạn" /></label>
      <label className="field">Tin nhắn<textarea required placeholder="Nhập nội dung tin nhắn" /></label>
      <button className="btn forest" type="submit">Gửi lời nhắn</button>
    </form>
  );
}
