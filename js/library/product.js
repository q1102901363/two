import $ from './library/jquery.js';
import cookie from './library/cookie.js';


// 通过search 获得商品id
let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: { id },
    dataType: "json",
    success: function(res) {
        let picture = JSON.parse(res.picture);

        let temp = `
        <h1>${res.title}</h1>
        <div class="p-picture">
            <img src="../${picture[1].src}">
        </div>
        <div class="p-price">
            价格:<span>￥<span>${res.price}
        </div>
        <div class="p-num">
            库存:${res.num}
        </div>
        <div>
        <input type="number" id="num" value="1" min="1" max="${res.num}"><br>
        <input type="button" value="加入购物车" id="add">
        </div>
        <div class="details">
            ${res.details}
        <div>
        `;

        $('body').append(temp).find('#add').on('click', function() {
            addItem(res.id, res.price, $('#num').val());
        });
    }
});


function addItem(id, price, num) {
    let shop = cookie.get('shop');
    let product = {
        id,
        price,
        num
    };

    if (shop) {
        shop = JSON.parse(shop);

        // 判断当前的商品id在cookie数据中是否存在
        if (shop.some(el => el.id === id)) {
            shop.forEach(elm => {
                elm.id === id ? elm.num = num : null;
            });
        } else {
            shop.push(product);
        }


    } else { // 没有存cookie的情况
        shop = []; // 初始化成数组
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop), 1);


}