import $ from './library/jquery.js';
import cookie from './library/cookie.js';

let shop = cookie.get('shop');

if (shop) {
    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        type: "get",
        url: "../interface/getItems.php",
        data: { idList },
        dataType: "json",
        success: function(res) {
            let temp = '';

            res.forEach(elm => {
                let picture = JSON.parse(elm.picture);

                // 让ajax中获得的数据结果的id与cookie中的id 一一对应

                // 从购物车cookie数据中筛选当前遍历的数据

                // let current = shop.filter(val => val.id == elm.id);




                temp += `<div class="wupin-tu">
                <div class="fangtu">
                    <img src="../${picture[0].src}" alt="">
                </div>
            </div>
            <div class="wupin-you">
                <h2 class="wupin-ming">小米10</h2>
                <p class="wupin-jieshao">
                ${elm.title}
                </p>
                <p class="ziying">小米自营</p>
                <div class="wupin-jiage">${parseFloat(elm.price).toFixed(2)}元</div>
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
                        ${parseFloat(elm.price).toFixed(2)}元
                    </span>
                    </div>
                    <div class="zongji">总计：${parseFloat(elm.price).toFixed(2)}元</div>
                </div>
                <div class="wupin-gouwuche">
                    <div class="huodaole">
                        <a href="">到货通知</a>
                    </div>
                    <div class="xihuan">
                        <a href="">
                            <i class="glyphicon glyphicon-heart"></i> 喜欢
                        </a>
                    </div>
                </div>
            </div>
                
                
                
                `;

                //     temp += `<li class="item">
                //     <div class="p-check">
                //         <input type="checkbox">
                //     </div>
                //     <div class="p-img">
                //         <img src="../${picture[0].src}" alt="">
                //     </div>
                //     <div class="p-title">
                //         ${elm.title}
                //     </div>
                //     <div class="p-num">
                //         <input type="number" value="${current[0].num}" max="${elm.num}" min="1">
                //     </div>
                //     <div class="p-price">
                //         单价:${parseFloat(elm.price).toFixed(2)}
                //     </div>
                //     <div class="p-sum">
                //         总价:${(elm.price * current[0].num).toFixed(2)}
                //     </div>
                //     <div calss="p-del">
                //         <a href="javascript:;" class="del" data-id="${elm.id}">删除</a>
                //     </div>
                // </li>`;
            });
            $('.taozi').append(temp).on('click', function() {
                let res = shop.filter(el => el.id != $(this).attr('data-id'));
                cookie.set('shop', JSON.stringify(res), 1); // 将id不为被点击元素id的剩余元素从新写入cookie
                location.reload();
            });



            // $('.taozi').append(temp).find('.del').on('click', function() {
            //     let res = shop.filter(el => el.id != $(this).attr('data-id'));
            //     cookie.set('shop', JSON.stringify(res), 1); // 将id不为被点击元素id的剩余元素从新写入cookie
            //     location.reload();
            // });
        }
    });
}