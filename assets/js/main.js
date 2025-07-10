// main.js

// Kích hoạt thư viện WOW.js để chạy animation khi cuộn trang
new WOW().init();

// Xử lý hiệu ứng Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const sectionOne = document.querySelector('.section-1');

    // Kiểm tra xem sectionOne có tồn tại không
    if (sectionOne) {
        // Lấy chiều cao của section đầu tiên
        const sectionOneHeight = sectionOne.offsetHeight;

        // Nếu vị trí cuộn lớn hơn chiều cao của section-1, thêm lớp 'sticky'
        // Ngược lại, xóa lớp 'sticky'
        if (window.scrollY > sectionOneHeight - header.offsetHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
});
