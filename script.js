$(document).ready(function() {
    let index = 0;
    const photos = $(".photo");
    const photoCount = photos.length;

    function showNextPhoto() {
        photos.eq(index).css("filter", "blur(1px)").fadeOut(500, function() { // 當前照片模糊並淡出
            index = (index + 1) % photoCount;
            photos.eq(index).css("filter", "blur(0px)").fadeIn(1000); // 下一張清晰顯示並淡入
        });
    }
    

    setInterval(showNextPhoto, 3000);
});


