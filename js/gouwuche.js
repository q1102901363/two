import $ from './library/jquery.js';
import cookie from './library/cookie.js';

let gouwuche = cookie.get('gouwuche');


if (gouwuche) {
    gouwuche = JSON.parse(gouwuche);

    let ff = gouwuche.length;

    // console.log(gouwuche);
    let idList = gouwuche.map(el => el.id).join();

    $.ajax({
        type: "get",
        url: "../interface/getItems.php",
        data: { idList },
        dataType: "json",
        success: function(res) {
            let temp = '';

            // let price = res.forEach(elm => {
            //     gouwuche.filter(val => val.price == elm.price);
            // });
            // console.log(price);
            res.forEach(elm => {
                let picture = JSON.parse(elm.picture);

                // let price = JSON.parse(elm.price);
                // console.log(price);
                // 让ajax中获得的数据结果的id与cookie中的id 一一对应

                // 从购物车cookie数据中筛选当前遍历的数据

                let current = gouwuche.filter(val => val.id == elm.id);




                temp += `
                    <div class="gu-1">
                        <div class="item-table">
                            <div class="col item-quanxuan">
                                <input type="checkbox" class="checksin">
                            </div>
                            <div class="col item-tu">
                                <a href="">
                                    <img src="../${picture[2].src}" alt="" style="width:80px;height:80px;">
                                </a>
                            </div>
                            <div class="col item-shangpin">
                                <h3>
                                    <a href="">${elm.details}</a>
                                </h3>
                            </div>
                            <div class="col item-danjia price">${elm.price}元</div>
                            <div class="col item-shuliang">
                                <span class="sub">-</span>
                                <input type="text" class="numchange" value="${current[0].num}">
                                <span class="plus">+</span>
                            </div>
                            <div class="col item-xiaoji">${(elm.price * current[0].num).toFixed(2)}元</div>
                            <div class="col item-caozuo">
                                <button class="del" onclick="del()"data-id="${elm.id}">×</button>
                            </div>
                        </div>
                    </div>
                `;
            });


            $('.gu').append(temp);
            $('.del').on('click', function() {
                let res = gouwuche.filter(el => el.id != $(this).attr('data-id'));
                cookie.set('gouwuche', JSON.stringify(res), 1); // 将id不为被点击元素id的剩余元素从新写入cookie
                ff--;
                // console.log($(".gu-1").length);
                if (ff == 0) {
                    $(".gou-tuzi").css("display", "block");
                    $(".jiesuan,.allqian").css("display", "none");
                } else {
                    location.reload();
                }
                // console.log(ff);






            });

            $('.qujiesuan').on('click', function() {

                alert("购买成功");
                $(".gou-tuzi").css("display", "block");
                $(".jiesuan,.allqian").css("display", "none");
                cookie.remove(gouwuche);

            })


            $(".plus").click(function() {
                $(this).prev().val(parseInt($(this).prev().val()) + 1);

                // coot = parseInt($(this).prev().val());
                // console.log(coot);
                // $(".item-xiaoji").html(coot + "元");


            });
            $(".sub").click(function() {
                $(this).next().val(parseInt($(this).next().val()) - 1);
                if (parseInt($(this).next().val()) <= 1) {
                    $(this).next().val(1);
                }
            });


            // $('.taozi').append(temp).find('.del').on('click', function() {
            //     let res = gouwuche.filter(el => el.id != $(this).attr('data-id'));
            //     cookie.set('gouwuche', JSON.stringify(res), 1); // 将id不为被点击元素id的剩余元素从新写入cookie
            //     location.reload();
            // });
        }
    });
}

$(function() {
    $(window).ready(function() {
        // 点击全选，遍历其他CheckBox，将全选CheckBox的状态同步给其他CheckBox
        $(".checkall").on("click", function() {
            // checked是DOM元素的一个属性，需要通过[0]访问
            let flag = $(this)[0].checked;
            $(".checksin").each(function() {
                $(this)[0].checked = flag;
            })
            result()
        });
        $(".checksin").on("click", function() {
            let i = 0;
            $(".checksin").each(function() {
                // 存在一个未选中，则，全选按钮未选中
                if ($(this)[0].checked == false) {
                    $(".checkall")[0].checked = false;
                } else {
                    // 如果是选中的，累加，和全部长度比较
                    i += 1;
                    if (i == $(".checksin").length) {
                        $(".checkall")[0].checked = true;
                    }
                }

            })
            result()
        });









    });

    // 计算函数
    function result() {
        let allprice = 0;
        let allnum = 0;
        let bubian = 0;
        let price1 = 0;
        $(".item-table").each(function() {
            bubian += parseInt($(this).find(".numchange").val());
            price1 == 0;
            if ($(this).find(".checksin")[0].checked == true) {
                price1 = parseFloat($(this).find(".price").html()) * parseInt($(this).find(".numchange").val());

                $(this).children(".item-xiaoji").html(price1 + "元");
                allprice += parseFloat($(this).find(".price").html()) * parseInt($(this).find(".numchange").val());
                allnum += parseInt($(this).find(".numchange").val());
            } else {
                allprice += 0;
                allnum += 0;
            }
        });


        // $(".item-xiaoji").html(price1 + "元");
        $(".allprice").html(allprice);
        $(".allnum").html(allnum);
        $(".shu1").html(bubian);
    };




});
$(function() {
    let neme = cookie.get('username');
    $('.deng').text(neme);
    console.log(neme);
})