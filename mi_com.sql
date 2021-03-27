-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-03-27 20:00:35
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `mi.com`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(11) NOT NULL COMMENT '商品数量',
  `picture` varchar(255) NOT NULL COMMENT '商品图片',
  `details` text NOT NULL COMMENT '商品详情',
  `particulars` text NOT NULL COMMENT '商品更多详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `picture`, `details`, `particulars`) VALUES
(1, '小米11', 3999, 162, '[{\"src\": \"img/晓龙小米11.webp\",\"alt\": \"small\"},{ \"src\": \"img/晓龙小米11.webp\", \"alt\": \"details-1\" }, { \"src\": \"img/晓龙小米11.webp\", \"alt\": \"details-2\" }]', '骁龙888 | 2K四曲面屏', '「1月15日上午10点开售；最高享6期免息；标配不提供充电器和数据线，如需请选择套装版」骁龙888｜2K AMOLED 四曲面柔性屏｜1亿像素三摄｜时尚轻薄机身｜55W 有线闪充｜50W 无线闪充｜10W 无线反充｜LPDDR5｜WiFi6（增强版）｜视频「超级夜景」｜哈曼卡顿音频认证｜立体声双扬声器'),
(2, 'Note 9 Pro', 1599, 1354, '[{ \"src\": \"img/note9nro.webp\", \"alt\": \"small\" },{ \"src\": \"img/note9nro.webp\", \"alt\": \"details-1\" }, { \"src\": \"img/note9nro.webp\", \"alt\": \"details-2\" }]', '一亿像素夜景相机，120Hz六档变速高刷屏', '「购机享多看阅读免费VIP季卡；+1元得200G云空间月卡；购机抽奖赢70英寸电视」一亿像素夜景相机 / 120Hz六档变速高刷屏 / 国内首发骁龙750G / 6.67\"小孔径全面屏 / 立体声双扬声器 / 4820mAh+33W闪充 / 多功能NFC / 线性马达 / 红外遥控 / 全新MIUI 12系统'),
(5, '小米10 至尊版', 5299, 3468, '[{ \"src\": \"img/小米10至尊版.webp\", \"alt\": \"small\" }, { \"src\": \"img/小米10至尊版.webp\", \"alt\": \"details-1\" }, { \"src\": \"img/小米10至尊版.webp\", \"alt\": \"details-2\" }]', '120X 变焦/120W秒充/120Hz屏幕', '「十年献礼，巅峰美学；最高享12期免息；+1元得200G云空间月卡」120X 超远变焦 / 120W 秒充科技 / 120Hz刷新率 + 240Hz采样率 / 骁龙865旗舰处理器 / 双模5G / 10倍混合光学变焦 / OIS光学防抖+EIS数字防抖 / 2000万超清前置相机 / 双串蝶式石墨烯基锂离子电池 / 等效4500mAh大电量 / 120W 有线秒充+50W无线秒充+10W无线反充 / WiFi 6 / 多功能NFC / 红外遥控'),
(3, 'Note 9', 1299, 3468, '[{ \"src\": \"img/note9天玑.webp\", \"alt\": \"small\" }, { \"src\": \"img/note9天玑.webp\", \"alt\": \"details-1\" }, { \"src\": \"img/note9天玑.webp\", \"alt\": \"details-2\" }]', '天玑 800U处理器，5000mAh电池', '「购机享多看阅读免费VIP季卡；+1元得200G云空间月卡；购机抽奖赢70英寸电视」天玑 800U处理器 / 4800万像素主摄 / 6.53英寸超高清小孔全面屏 / 小金刚品质 / 5000mAh+18W快充 / 双5G待机 / 侧边指纹识别 / 线性马达 / 红外遥控'),
(4, 'Note 9 4G', 999, 3468, '[{ \"src\": \"img/note9蓝色4g.webp\", \"alt\": \"small\" }, { \"src\": \"img/note9蓝色4g.webp\", \"alt\": \"details-1\" }, { \"src\": \"img/note9蓝色4g.webp\", \"alt\": \"details-2\" }]', '6000mAh长续航', '「购机享多看阅读免费VIP季卡；+1元得200G云空间月卡；购机抽奖赢70英寸电视」6000mAh超长续航 / 4800万超清三摄 / 全高清6.53英寸护眼屏 / 骁龙662处理器 / 18W快速充电 / 立体声双扬声器 / 侧边指纹识别 / 90%高屏占比 / 康宁大猩猩保护玻璃'),
(6, 'Redmi K30S 至尊纪念版', 2599, 3468, '[{ \"src\": \"img/K30s至尊纪念版.webp\", \"alt\": \"small\" }, { \"src\": \"img/K30s至尊纪念版.webp\", \"alt\": \"details-1\" }, { \"src\": \"img/K30s至尊纪念版.webp\", \"alt\": \"details-2\" }]', '144Hz[7档]变速高刷屏', '骁龙865 / 144Hz[7档]变速高刷屏 / 专业原色显示+全局护眼 / 5000mAh大电量+33W快充 / 6400万AI三摄 / 立体声双扬声器+X轴马达 / LPDDR5+UFS3.1+WiFi6'),
(7, 'Redmi K30 至尊版', 2199, 3468, '[{ \"src\": \"img/红米至尊.webp\", \"alt\": \"small\" }, { \"src\": \"img/红米至尊.webp\", \"alt\": \"details-1\" }, { \"src\": \"img/红米至尊.webp\", \"alt\": \"details-2\" }]', '120Hz弹出全面屏，天玑1000+旗舰处理器', '「1月19日上午10点开售；+1元得200G云空间月卡；购机抽奖赢70英寸电视」120Hz弹出全面屏 / 天玑1000+旗舰处理器 / 索尼6400万四摄 / 立体声双扬声器 / 4500mAh+33W闪充 / 双模5G / 多功能NFC / 线性震动马达 / 红外遥控'),
(8, '腾讯黑鲨3S', 3999, 3468, '[{ \"src\": \"img/腾讯黑鲨.webp\", \"alt\": \"small\" }, { \"src\": \"img/腾讯黑鲨.webp\", \"alt\": \"details-1\" }, { \"src\": \"img/腾讯黑鲨.webp\", \"alt\": \"details-2\" }]', '骁龙865处理器，120Hz刷新率', '骁龙865处理器 / 双模5G / 270Hz触控采样率+120Hz屏幕刷新率 / 三星AMOLED全面屏 / 最高65W极速闪充+背部磁吸充电 / 4720mAh大容量双电池 / UFS3.1闪存+LPDDR5运存 / “三明治”液冷散热 / JoyUI 12 游戏操作系统 / 畅玩投屏');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL COMMENT '用户名ID',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(10001, 'admin', 'a123456'),
(10004, '张三', '123456'),
(10005, '李四', '1234567'),
(10006, '王彬', '123456'),
(10003, '旭阳', '123456'),
(10007, '小花', '123456'),
(10086, '梅尔特莉莉丝', '123456'),
(10008, '沈甜甜', '123456'),
(10009, '哈露', '123456'),
(10010, '缇娜', '123456'),
(10002, '小四', '123456'),
(100003, 'wwwwww', '123456');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户名ID', AUTO_INCREMENT=100004;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
