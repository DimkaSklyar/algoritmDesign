$(function(){
    $('.load-more').on('click', function(){
        const btn = $(this);
        const loader = btn.find('span');
        $ajax({
            url: '/more.html',
            type: 'GET',
            beforeSend: function(){
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function(responce){
                setTimeout(function(){
                    loader.removeClass('d-inline-block')
                    btn.attr('disabled', false);
                    console.log(responce);
                }, 500);
            },
            error: function(){
                console.error('error!');
                
            }
        });
    });
});