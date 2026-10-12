const img = (file) =>
  `https://prod-langfarm-bucketstack-bucketd7feb781-f2iejaoup3ga.s3.amazonaws.com/images/${file}`;

export const heroSlides = [
  {
    src: "https://langfarm-backend.s3.amazonaws.com/Banner%20Qua%CC%80%20te%CC%82%CC%81t.png",
    alt: "Set quà tết Langfarm 2026",
    href: "/#khuyen-mai",
  },
  {
    src: "https://langfarm-backend.s3.amazonaws.com/Xoa%CC%80i%20sa%CC%82%CC%81y%20gio%CC%80n%20%C4%91a%CC%A3%CC%86c%20sa%CC%89n%20Langfarm.png",
    alt: "Xoài sấy giòn đặc sản Langfarm",
    href: "/#san-pham",
  },
  {
    src: "https://langfarm-backend.s3.amazonaws.com/Tha%CC%89o%20mo%CC%A3%CC%82c%20sa%CC%82%CC%81y%20kho%CC%82%20ma%CC%82%CC%83u%20yama.png",
    alt: "Thảo mộc sấy khô mẫu yama",
    href: "/#san-pham",
  },
  {
    src: "https://langfarm-backend.s3.amazonaws.com/Ho%CC%82%CC%80ng%20sa%CC%82%CC%81y%20treo%20mu%CC%80a%20na%CC%86m%202025.png",
    alt: "Hồng sấy treo mùa năm 2025",
    href: "/#san-pham",
  },
  {
    src: "https://langfarm-backend.s3.amazonaws.com/1Tra%CC%80%20atiso%CC%82%20tu%CC%81i%20lo%CC%A3c%20%C4%91a%CC%A3%CC%86c%20sa%CC%89n%20Tha%CC%81i%20Ba%CC%89o.png",
    alt: "Trà atisô túi lọc đặc sản Thái Bảo",
    href: "/#san-pham",
  },
];

export const homeSections = [
  {
    banner: "https://langfarm-backend.s3.amazonaws.com/Banner%20Qua%CC%80%20te%CC%82%CC%81t%202.png",
    bannerAlt: "Bộ quà Tết Langfarm",
    title: "Sản phẩm nổi bật",
    products: [
      { name: "Nấm đông trùng hạ thảo sấy khô, đặc sản Langfarm", price: 411000, image: img("1727752113845_Dong_trung_ha_thao_say_kho_Langfarm___00001_L.jpg") },
      { name: "Trà atisô túi lọc, thảo mộc Thái Bảo x Langfarm", price: 76000, image: img("1727766407640_Tra_atiso_tui_loc_thao_moc_Thai_Bao_x_Langfarm___00001_L.jpg") },
      { name: "Bông atisô sấy khô, đặc sản Langfarm", price: 168000, image: img("1727752002267_Bong_atiso_say_kho_dac_san_Langfarm___00001_L.jpg") },
    ],
  },
  {
    banner: "https://langfarm-backend.s3.amazonaws.com/Tra%CC%81i%20ca%CC%82y%20sa%CC%82%CC%81y%20de%CC%89o%20%C4%91a%CC%A3%CC%86c%20sa%CC%89n%20Langfarm.png",
    bannerAlt: "Trái cây sấy dẻo đặc sản Langfarm",
    title: "Trái cây sấy dẻo đặc sản",
    products: [
      { name: "Khoai lang mật sấy nguyên củ, đặc sản Langfarm", price: 114000, image: img("1727693407924_Khoai_lang_mat_say_nguyen_cu_dac_san_Langfarm___00001_L.jpg") },
      { name: "Hồng chẻ sấy dẻo, đặc sản Langfarm", price: 131000, image: img("1727692785065_Hong_che_say_deo_dac_san_Langfarm___00001_L.jpg") },
      { name: "Xoài sấy dẻo, đặc sản Langfarm", price: 102000, image: img("1727694883524_Xoai_say_deo_dac_san_Langfarm___00001_L.jpg") },
      { name: "Cam sấy dẻo, đặc sản Langfarm", price: 109000, image: img("1727691938659_Cam_say_deo_dac_san_Langfarm___00001_L.jpg") },
    ],
  },
  {
    banner: "https://langfarm-backend.s3.amazonaws.com/Tra%CC%81i%20ca%CC%82y%20sa%CC%82%CC%81y%20gio%CC%80n%20%C4%91a%CC%A3%CC%86c%20sa%CC%89n%20Langfarm.png",
    bannerAlt: "Trái cây sấy giòn đặc sản Langfarm",
    title: "Trái cây sấy giòn đặc sản",
    products: [
      { name: "Xoài lát sấy giòn, đặc sản Langfarm", price: 49000, image: img("1732344167658_CP7A6973_L.jpg") },
      { name: "Thập cẩm sấy giòn, đặc sản Langfarm", price: 36000, image: img("1727757846990_Thap_cam_say_gion_dac_san_Langfarm___00001_L.jpg") },
      { name: "Mít sấy giòn, đặc sản Langfarm", price: 37000, image: img("1727757587705_Mit_say_gion_dac_san_Langfarm___00001_L.jpg") },
      { name: "Chuối sấy giòn, đặc sản Langfarm", price: 32000, image: img("1727755626763_Chuoi_say_gion_dac_san_Langfarm___00001_L.jpg") },
      { name: "Khoai lang vàng sấy giòn, đặc sản Langfarm", price: 40000, image: img("1727756422345_Khoai_lang_vang_say_gion_dac_san_Langfarm___00001_L.jpg") },
    ],
  },
  {
    banner: "https://langfarm-backend.s3.amazonaws.com/Tra%CC%80%20tha%CC%89o%20mo%CC%A3%CC%82c%20tu%CC%81i%20lo%CC%A3c%20%C4%91a%CC%A3%CC%86c%20sa%CC%89n%20Langfarm.png",
    bannerAlt: "Trà thảo mộc túi lọc đặc sản Langfarm",
    title: "Trà thảo mộc túi lọc đặc sản",
    products: [
      { name: "Trà atisô túi lọc, thảo mộc Thái Bảo x Langfarm", price: 76000, image: img("1727766407640_Tra_atiso_tui_loc_thao_moc_Thai_Bao_x_Langfarm___00001_L.jpg") },
      { name: "Trà tim sen túi lọc, thảo mộc Thái Bảo x Langfarm", price: 65000, image: img("1727767191814_Tra_tim_sen_tui_loc_thao_moc_Thai_Bao_x_Langfarm___00001_L.jpg") },
      { name: "Trà hoa cúc túi lọc thảo mộc Thái Bảo x Langfarm", price: 83000, image: img("1727766725046_Tra_hoa_cuc_tui_loc_thao_moc_Thai_Bao_x_Langfarm___00001_L.jpg") },
      { name: "Trà hà thủ ô túi lọc thảo mộc Thái Bảo x Langfarm", price: 74000, image: img("1727766667706_Tra_ha_thu_o_tui_loc_thao_moc_Thai_Bao_x_Langfarm___00001_L.jpg") },
    ],
  },
  {
    banner: "https://langfarm-backend.s3.amazonaws.com/Tha%CC%89o%20mo%CC%A3%CC%82c%20%C4%91a%CC%A3%CC%86c%20sa%CC%89n%20Langfarm.png",
    bannerAlt: "Thảo mộc đặc sản Langfarm",
    title: "Thảo mộc đặc sản",
    products: [
      { name: "Hà thủ ô sấy khô, đặc sản Langfarm", price: 131000, image: img("1778381879037_CP7A4076_L.jpg") },
      { name: "Nấm linh chi đỏ Đà Lạt, đặc sản Langfarm", price: 357000, image: img("1727752584376_Nam_linh_chi_do_Da_Lat_dac_san_Langfarm___00001_L.jpg") },
      { name: "Bông atisô sấy khô, đặc sản Langfarm", price: 168000, image: img("1727752002267_Bong_atiso_say_kho_dac_san_Langfarm___00001_L.jpg") },
      { name: "Nấm đông trùng hạ thảo sấy khô, đặc sản Langfarm", price: 411000, image: img("1727752113845_Dong_trung_ha_thao_say_kho_Langfarm___00001_L.jpg") },
    ],
  },
];

export const products = (() => {
  const seen = new Set();
  const list = [];
  homeSections.forEach((section) => {
    section.products.forEach((product) => {
      if (seen.has(product.name)) return;
      seen.add(product.name);
      list.push(product);
    });
  });
  return list;
})();

export function formatMoney(value) {
  return `${Number(value).toLocaleString("en-US")}đ`;
}
