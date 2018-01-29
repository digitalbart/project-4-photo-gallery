/* lightbox */
$('.gallery').lightGallery({
  thumbnail:true,
  subHtmlSelectorRelative: true
}); 

/* search filter using text in each list element */
function filter(element) {
    var value = $(element).val();

    $(".gallery > li").each(function() {
        if ($(this).text().search(value) > -1) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
}