import $ from './library/jquery.js';
import cookie from './library/cookie.js';

$.ajax({
    type: "get",
    url: "../interface/getData.php",
    dataType: "json",
    success: function(res) {
        let temp = '';
        res.forEach((elm, i) => {
            let picture = JSON.parse(elm.picture);
            // console.log(picture);
            temp += `<li id="brick-item_1" class="brick-item">
            <a href="./wupin.html?id=${elm.id}">
                <div class="picture">
                    <img src="../${picture[0].src}" alt="">
                </div>
                <h3 class="title">${elm.title}</h3>
                <p class="desc">${elm.details}</p>
                <p class="price">${elm.price}<span>元起</span></p>
            </a>
        </li>`;
        });

        $('#brick-list').html(temp);

    }
});

$(function() {
    let neme = cookie.get('username');
    // $('.deng').text(neme);
    console.log(neme);
})