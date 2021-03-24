import $ from './library/jquery.js';
import cookie from './library/cookie.js';




$.ajax({
    type: "get",
    url: "../interface/getItem.php",
    data: { id },
    dataType: "json",
    success: function(res) {
        let picture = JSON.parse(res.picture);
        let shuliang = parseInt($("#num").text());



    }
});