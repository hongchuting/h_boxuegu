define(['jquery'], function($) {
    $('#form').on('submit', function() {
        $.ajax({
            url: '/v6/login',
            type: 'post',
            data: $(this).serialize(),
            success: function(data) {
                if(data.code == 200){
                    location.href = '/'
                }
            }
        })

        return false;
    })
});