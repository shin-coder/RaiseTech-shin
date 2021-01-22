$(function(){
    $('.p-button__ham').on('click',function(){
        $('.p-button').toggleClass('p-button--isOpen'),
        $('.c-list__item__forpc').css('display','block');  
});



    $(".c-list__item__forpc").hover(
        function(){
            $(".c-list__sub-item", this).stop().slideDown(200);
        },
        function(){
            $(".c-list__sub-item", this).stop().slideUp(100);
        }
    );
});