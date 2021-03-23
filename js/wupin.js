import $ from './library/jquery.js';
import cookie from './library/cookie.js';


// 通过search 获得商品id
let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../interface/getItem.php",
    data: { id },
    dataType: "json",
    success: function(res) {
        let picture = JSON.parse(res.picture);



        let temp = `<div class="wupin-tu">
        <div class="fangtu">
            <img src="../${picture[0].src}" alt="">
        </div>
    </div>
    <div class="wupin-you">
        <h2 class="wupin-ming">小米10</h2>
        <p class="wupin-jieshao">
        ${res.title}
        </p>
        <p class="ziying">小米自营</p>
        <div class="wupin-jiage">${parseFloat(res.price).toFixed(2)}元</div>
        <div class="xian"></div>
        <div class="wupin-dizhi">
            <div class="wupin-dizhi-1">
                <i class="glyphicon glyphicon-map-marker"></i>
                <div class="wuipin-dizhi-zi">
                    东土大唐
                </div>
            </div>
        </div>
        <div class="wupin-banben">
            <div class="xiaobanben">
                <div class="banben-title">选择版本</div>
                <ul>
                    <li>
                        <a href="">8GB+128GB</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="wupin-zongji">
            <div class="xuanzede">
                小米10 全网通版 8GB+128GB 国风雅灰
                <span>
                ${parseFloat(res.price).toFixed(2)}元
            </span>
            </div>
            <div class="zongji">总计：${parseFloat(res.price).toFixed(2)}元</div>
        </div>
        <div class="wupin-gouwuche">
            <div class="huodaole">
            <input type="button" value="加入购物车" id="add" style="display: inline-block;
            padding: 0;
            margin: 0;
            border: 1px solid #b0b0b0;
            text-align: center;
            cursor: pointer;
            transition: all 0.4s;
            border-color: #ff6700;
            background: #fff;
            color: #ff6700;
            width: 298px;
            height: 52px;
            line-height: 52px;
            font-size: 16px;">
            </div>
            <div class="xihuan">
                <a href="">
                    <i class="glyphicon glyphicon-heart"></i> 喜欢
                </a>
            </div>
        </div>
    </div>`;


        // let temp = `
        // <h1>${res.title}</h1>
        // <div class="p-picture">
        //     <img src="../${picture[1].src}">
        // </div>
        // <div class="p-price">
        //     价格:<span>￥<span>${res.price}
        // </div>
        // <div class="p-num">
        //     库存:${res.num}
        // </div>
        // <div>
        // <input type="number" id="num" value="1" min="1" max="${res.num}"><br>
        // <input type="button" value="加入购物车" id="add">
        // </div>
        // <div class="details">
        //     ${res.details}
        // <div>
        // `;

        $('.taozi').append(temp).find('#add').on('click', function() {
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