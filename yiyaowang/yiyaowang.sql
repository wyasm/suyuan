/*
Navicat MySQL Data Transfer

Source Server         : sue
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yiyaowang

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-13 16:56:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` float(255,1) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `guige` varchar(255) NOT NULL,
  `jqty` int(255) NOT NULL,
  `qty` int(255) DEFAULT NULL,
  `zhongliang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('7', '奇正 消痛贴膏 1.2g*6贴', '55.0', '../images/51.jpg', '90mm*120mm*6贴', '3', '3', '0.1');
INSERT INTO `cart` VALUES ('2', '雅达 还少胶囊 0.42*60粒', '49.0', '../images/46.jpg', '0.42*60粒', '5', '1', '0.1');

-- ----------------------------
-- Table structure for detail
-- ----------------------------
DROP TABLE IF EXISTS `detail`;
CREATE TABLE `detail` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `fenlei` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` float(255,1) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `guige` varchar(255) NOT NULL,
  `zhongliang` varchar(255) NOT NULL,
  `pinpai` varchar(255) NOT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  `img5` varchar(255) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of detail
-- ----------------------------

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `fenlei` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` float(255,1) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `guige` varchar(255) NOT NULL,
  `zhongliang` float(255,1) NOT NULL,
  `pinpai` varchar(255) NOT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  `img5` varchar(255) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  `xiaoliang` float(255,0) NOT NULL,
  `datetime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'jiating', '同溢堂 益安宁丸 112丸*3瓶', '790.0', '../images/45.jpg', '	112丸*3瓶', '0.3', '	同溢堂', 'https://p3.maiyaole.com/img/item/201711/22/org_20171122181034312.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p4.maiyaole.com/img/item/201709/27/org_20170927175911846.jpg', 'https://p4.maiyaole.com/img/item/201711/06/org_20171106112527451.jpg', '../html/detail.html', '1234', '2018-10-12 16:01:01');
INSERT INTO `goods` VALUES ('2', 'jiating', '雅达 还少胶囊 0.42*60粒', '49.0', '../images/46.jpg', '	0.42*60粒', '0.1', '四川鑫达康', 'https://p1.maiyaole.com/img/item/201804/28/org_20180428154906540.jpg', 'https://p2.maiyaole.com/img/201512/25/org_20151225210028880.jpg', 'https://p3.maiyaole.com/img/item/201804/28/org_20180428154907595.jpg', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428154908588.jpg', 'https://p4.maiyaole.com/img/item/201804/28/org_20180428154909440.jpg', '../html/detail.html', '251', '2018-10-12 00:42:27');
INSERT INTO `goods` VALUES ('3', 'jiating', '\r\n凯妮汀 克霉唑阴道片 0.5g*1片＋投药器', '35.0', '../images/47.jpg', '	500mg*1片+投药器', '0.3', '	凯妮汀', 'https://p4.maiyaole.com/img/item/201804/11/org_20180411160722228.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140335455.jpg', 'https://p1.maiyaole.com/img/item/201702/08/org_20170208140334356.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140333231.jpg', 'https://p2.maiyaole.com/img/item/201702/08/org_20170208140331934.jpg', '../html/detail.html', '123', '2018-10-12 16:02:17');
INSERT INTO `goods` VALUES ('4', 'jiating', '福牌阿胶 阿胶 250g', '388.0', '../images/48.jpg', '	250g', '0.4', '福牌', 'https://p3.maiyaole.com/img/50077/50077490/org_org.jpg?v=1', 'https://p3.maiyaole.com/img/item/201612/23/org_20161223145451354.jpg', 'https://p2.maiyaole.com/img/201410/16/org_20141016173011770.jpg?v=1', 'https://p3.maiyaole.com/img/201410/17/org_20141017145339378.jpg?v=1', 'https://p1.maiyaole.com/img/201511/27/org_20151127115251204.jpg?v=1', '../html/detail.html', '264', '2018-10-12 16:01:17');
INSERT INTO `goods` VALUES ('5', 'jiating', '艾丽 奥利司他胶囊 0.12g*21粒', '118.0', '../images/49.jpg', '21粒', '0.5', '艾丽', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163008312.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163008798.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009138.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009479.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163009822.jpg', '../html/detail.html', '635', '2018-10-12 16:01:19');
INSERT INTO `goods` VALUES ('6', 'zhuanke', '盘龙云海 排毒养颜胶囊 0.4g*70粒', '78.0', '../images/50.jpg', '	70粒装', '0.4', '盘龙云海', 'https://p2.maiyaole.com/img/5423/5423544/org_org.jpg?v=1', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p4.maiyaole.com/img/item/201709/27/org_20170927175911846.jpg', 'https://p4.maiyaole.com/img/item/201711/06/org_20171106112527451.jpg', '../html/detail.html', '352', '2018-10-12 16:01:21');
INSERT INTO `goods` VALUES ('7', 'zhuanke', '奇正 消痛贴膏 1.2g*6贴', '55.0', '../images/51.jpg', '	90mm*120mm*6贴', '0.1', '奇正', 'https://p2.maiyaole.com/img/item/201804/08/org_20180408184108552.jpg', 'https://p2.maiyaole.com/img/201512/25/org_20151225210028880.jpg', 'https://p3.maiyaole.com/img/item/201804/28/org_20180428154907595.jpg', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428154908588.jpg', 'https://p4.maiyaole.com/img/item/201804/28/org_20180428154909440.jpg', '../html/detail.html', '265', '2018-10-12 00:42:42');
INSERT INTO `goods` VALUES ('8', 'zhuanke', '蔓迪 米诺地尔酊 90ml', '189.0', '../images/52.jpg', '	5%（90ml:4.5g）', '0.2', '蔓迪', 'https://p1.maiyaole.com/img/item/201803/30/org_20180330142340278.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140335455.jpg', 'https://p1.maiyaole.com/img/item/201702/08/org_20170208140334356.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140333231.jpg', 'https://p2.maiyaole.com/img/item/201702/08/org_20170208140331934.jpg', '../html/detail.html', '3', '2018-10-12 16:01:24');
INSERT INTO `goods` VALUES ('9', 'zhuanke', '佐力 乌灵胶囊 0.33g*9粒*3板', '29.8', '../images/53.jpg', '	0.33g*9粒*3板', '0.2', '佐力', 'https://p2.maiyaole.com/img/item/201808/14/org_20180814180847667.jpg', 'https://p3.maiyaole.com/img/item/201612/23/org_20161223145451354.jpg', 'https://p2.maiyaole.com/img/201410/16/org_20141016173011770.jpg?v=1', 'https://p3.maiyaole.com/img/201410/17/org_20141017145339378.jpg?v=1', 'https://p1.maiyaole.com/img/201511/27/org_20151127115251204.jpg?v=1', '../html/detail.html', '26', '2018-10-12 16:01:27');
INSERT INTO `goods` VALUES ('11', 'baojian', '东阿阿胶 桃花姬 即食阿胶糕固元糕礼盒 300g', '328.0', '../images/63.jpg', '	300g（60块）', '0.3', '	东阿阿胶', 'https://p3.maiyaole.com/img/201601/05/org_2016010511283278.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163008798.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009138.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009479.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163009822.jpg', '../html/detail.html', '2541', '2018-10-12 16:02:16');
INSERT INTO `goods` VALUES ('10', 'zhuanke', '百世康 白云山 绞股蓝总甙片 20mg*80片', '15.0', '../images/54.jpg', '80片', '0.2', '白云山', 'https://p2.maiyaole.com/img/item/201804/13/org_20180413153439562.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p4.maiyaole.com/img/item/201709/27/org_20170927175911846.jpg', 'https://p4.maiyaole.com/img/item/201711/06/org_20171106112527451.jpg', '../html/detail.html', '325', '2018-10-12 16:02:08');
INSERT INTO `goods` VALUES ('12', 'baojian', '敖东 长白山西洋参片 80g', '69.0', '../images/64.jpg', '	80g/瓶', '0.2', '敖东', 'https://p4.maiyaole.com/img/item/201806/04/org_20180604142255535.jpg', 'https://p2.maiyaole.com/img/201512/25/org_20151225210028880.jpg', 'https://p3.maiyaole.com/img/item/201804/28/org_20180428154907595.jpg', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428154908588.jpg', 'https://p4.maiyaole.com/img/item/201804/28/org_20180428154909440.jpg', '../html/detail.html', '217', '2018-10-12 16:01:41');
INSERT INTO `goods` VALUES ('13', 'baojian', '盘龙云海 怡芝堂云南文山三七超细粉 270g', '179.0', '../images/65.jpg', '270g', '3.2', '	盘龙云海', 'https://p4.maiyaole.com/img/item/201708/07/org_20170807190557626.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140335455.jpg', 'https://p1.maiyaole.com/img/item/201702/08/org_20170208140334356.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140333231.jpg', 'https://p2.maiyaole.com/img/item/201702/08/org_20170208140331934.jpg', '../html/detail.html', '89', '2018-10-12 16:03:56');
INSERT INTO `goods` VALUES ('14', 'baojian', '【买3送1 5送2】修正 破壁灵芝孢子粉 0.99g*60袋', '118.0', '../images/66.jpg', '	0.99g*60袋', '0.5', '修正', 'https://p4.maiyaole.com/img/201705/08/org_20170508203857430.jpg', 'https://p3.maiyaole.com/img/item/201612/23/org_20161223145451354.jpg', 'https://p2.maiyaole.com/img/201410/16/org_20141016173011770.jpg?v=1', 'https://p3.maiyaole.com/img/201410/17/org_20141017145339378.jpg?v=1', 'https://p1.maiyaole.com/img/201511/27/org_20151127115251204.jpg?v=1', '../html/detail.html', '52', '2018-10-12 16:02:24');
INSERT INTO `goods` VALUES ('15', 'baojian', '美莱健 全营养植物大豆蛋白粉 350G', '69.9', '../images/67.jpg', '350G', '500.0', '美莱健', 'https://p1.maiyaole.com/img/201808/03/org_20180803114748953.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163008798.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009138.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009479.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163009822.jpg', '../html/detail.html', '64', '2018-10-12 00:42:58');
INSERT INTO `goods` VALUES ('16', 'weishengsu', '朗迪 碳酸钙D3颗粒 3g*30袋', '98.0', '../images/74.jpg', '	3g*30袋', '0.2', '朗迪', 'https://p2.maiyaole.com/img/201509/18/org_20150918215557596.jpg?v=1', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p4.maiyaole.com/img/item/201709/27/org_20170927175911846.jpg', 'https://p4.maiyaole.com/img/item/201711/06/org_20171106112527451.jpg', '../html/detail.html', '82', '2018-10-12 16:01:56');
INSERT INTO `goods` VALUES ('17', 'weishengsu', '益 维生素E软胶囊 60粒', '42.0', '../images/75.jpg', '100毫克（天然型）*60粒', '0.6', '来益', 'https://p1.maiyaole.com/img/item/201705/19/org_20170519102259348.jpg', 'https://p2.maiyaole.com/img/201512/25/org_20151225210028880.jpg', 'https://p3.maiyaole.com/img/item/201804/28/org_20180428154907595.jpg', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428154908588.jpg', 'https://p4.maiyaole.com/img/item/201804/28/org_20180428154909440.jpg', '../html/detail.html', '13', '2018-10-12 16:01:59');
INSERT INTO `goods` VALUES ('18', 'weishengsu', '\r\n斯利安 叶酸片 0.4mg*93片', '55.0', '../images/76.jpg', '		0.4mg*93片', '0.3', '斯利安', 'https://p1.maiyaole.com/img/item/201805/21/org_20180521094046196.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140335455.jpg', 'https://p1.maiyaole.com/img/item/201702/08/org_20170208140334356.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140333231.jpg', 'https://p2.maiyaole.com/img/item/201702/08/org_20170208140331934.jpg', '../html/detail.html', '282', '2018-10-12 16:02:02');
INSERT INTO `goods` VALUES ('19', 'weishengsu', '21金维他 多维元素片 100片', '39.0', '../images/77.jpg', '	100片', '0.3', '21金维他', 'https://p4.maiyaole.com/img/item/201801/05/org_20180105134115418.jpg', 'https://p3.maiyaole.com/img/item/201612/23/org_20161223145451354.jpg', 'https://p2.maiyaole.com/img/201410/16/org_20141016173011770.jpg?v=1', 'https://p3.maiyaole.com/img/201410/17/org_20141017145339378.jpg?v=1', 'https://p1.maiyaole.com/img/201511/27/org_20151127115251204.jpg?v=1', '../html/detail.html', '299', '2018-10-12 16:02:13');
INSERT INTO `goods` VALUES ('20', 'weishengsu', '惠氏 善存银片 100片 补充多维元素片维生素', '88.0', '../images/78.jpg', '	100片', '0.5', 'Centrum/善存', 'https://p4.maiyaole.com/img/item/201806/28/org_20180628105332471.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163008798.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009138.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009479.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163009822.jpg', '../html/detail.html', '352', '2018-10-12 16:02:29');
INSERT INTO `goods` VALUES ('21', 'qixie', '诺斯清 生理性海水 鼻腔护理 喷雾器 洗鼻器 儿童装 50ml', '49.0', '../images/82.jpg', '	50ml', '0.9', '诺斯清', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428161447101.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p4.maiyaole.com/img/item/201709/27/org_20170927175911846.jpg', 'https://p4.maiyaole.com/img/item/201711/06/org_20171106112527451.jpg', '../html/detail.html', '462', '2018-10-12 16:03:49');
INSERT INTO `goods` VALUES ('22', 'qixie', '万通 万通筋骨贴 6贴装l', '12.8', '../images/83.jpg', '		6贴', '1.6', '万通', 'https://p2.maiyaole.com/img/item/201711/01/org_20171101134232983.jpg', 'https://p2.maiyaole.com/img/201512/25/org_20151225210028880.jpg', 'https://p3.maiyaole.com/img/item/201804/28/org_20180428154907595.jpg', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428154908588.jpg', 'https://p4.maiyaole.com/img/item/201804/28/org_20180428154909440.jpg', '../html/detail.html', '46', '2018-10-12 16:03:47');
INSERT INTO `goods` VALUES ('23', 'qixie', '云南白药 创可贴 经济型 50片l', '11.9', '../images/84.jpg', '	50片', '1.8', '云南白药', 'https://p2.maiyaole.com/img/item/201808/10/org_2018081009244895.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140335455.jpg', 'https://p1.maiyaole.com/img/item/201702/08/org_20170208140334356.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140333231.jpg', 'https://p2.maiyaole.com/img/item/201702/08/org_20170208140331934.jpg', '../html/detail.html', '286', '2018-10-12 16:03:42');
INSERT INTO `goods` VALUES ('24', 'qixie', 'Abbott/雅培 瞬感扫描式血糖仪 免采血', '456.0', '../images/85.jpg', '		4个/盒', '1.2', '	雅培', 'https://p3.maiyaole.com/img/item/201802/27/org_20180227110340717.jpg', 'https://p3.maiyaole.com/img/item/201612/23/org_20161223145451354.jpg', 'https://p2.maiyaole.com/img/201410/16/org_20141016173011770.jpg?v=1', 'https://p3.maiyaole.com/img/201410/17/org_20141017145339378.jpg?v=1', 'https://p1.maiyaole.com/img/201511/27/org_20151127115251204.jpg?v=1', '../html/detail.html', '152', '2018-10-12 16:03:40');
INSERT INTO `goods` VALUES ('25', 'qixie', '小林 退热贴（冰宝贴）儿童用 6片特惠装退烧贴', '19.9', '../images/86.jpg', '	6片', '1.5', '小林制药', 'https://p3.maiyaole.com/img/item/201806/28/org_20180628152106744.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163008798.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009138.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009479.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163009822.jpg', '../html/detail.html', '152', '2018-10-12 16:03:32');
INSERT INTO `goods` VALUES ('26', 'yanjing', '强生 define新美瞳彩色隐形眼镜日抛 30片装', '208.0', '../images/117.jpg', '	30片装', '0.1', 'Johnson/强生', 'https://p1.maiyaole.com/img/item/201809/20/org_20180920153808421.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p4.maiyaole.com/img/item/201709/27/org_20170927175911846.jpg', 'https://p4.maiyaole.com/img/item/201711/06/org_20171106112527451.jpg', '../html/detail.html', '186', '2018-10-12 00:43:20');
INSERT INTO `goods` VALUES ('27', 'yanjing', '强生 舒日隐形眼镜日抛 30片装 【100】', '178.0', '../images/118.jpg', '	30片装', '1.3', 'Johnson/强生', 'https://p3.maiyaole.com/img/item/201807/09/org_20180709160905195.jpg', 'https://p2.maiyaole.com/img/201512/25/org_20151225210028880.jpg', 'https://p3.maiyaole.com/img/item/201804/28/org_20180428154907595.jpg', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428154908588.jpg', 'https://p4.maiyaole.com/img/item/201804/28/org_20180428154909440.jpg', '../html/detail.html', '260', '2018-10-12 16:03:29');
INSERT INTO `goods` VALUES ('28', 'yanjing', '库博 佰视明隐形眼镜月抛 3片装', '159.0', '../images/119.jpg', '	-1.00', '1.6', 'Johnson/强生', 'https://p1.maiyaole.com/img/8402/8402413/org_org.jpg?a=901572451', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140335455.jpg', 'https://p1.maiyaole.com/img/item/201702/08/org_20170208140334356.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140333231.jpg', 'https://p2.maiyaole.com/img/item/201702/08/org_20170208140331934.jpg', '../html/detail.html', '248', '2018-10-12 16:03:27');
INSERT INTO `goods` VALUES ('29', 'yanjing', '\r\n美若康 沐氧隐形眼镜日抛 10片装 【100】', '72.0', '../images/120.jpg', '-1.00', '0.6', '美若康/Miacare', 'https://p1.maiyaole.com/img/item/201809/20/org_20180920165858308.jpgv=1', 'https://p3.maiyaole.com/img/item/201612/23/org_20161223145451354.jpg', 'https://p2.maiyaole.com/img/201410/16/org_20141016173011770.jpg?v=1', 'https://p3.maiyaole.com/img/201410/17/org_20141017145339378.jpg?v=1', 'https://p1.maiyaole.com/img/201511/27/org_20151127115251204.jpg?v=1', '../html/detail.html', '563', '2018-10-12 16:03:24');
INSERT INTO `goods` VALUES ('30', 'yanjing', '爱尔康 傲滴隐形眼镜多功能护理液 (套装355ml+355ml+60ml)', '79.0', '../images/121.jpg', '	355ml+355ml+60ml', '1.0', '	Alcon/爱尔康', 'https://p3.maiyaole.com/img/item/201809/20/org_20180920161437351.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163008798.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009138.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009479.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163009822.jpg', '../html/detail.html', '896', '2018-10-12 00:43:34');
INSERT INTO `goods` VALUES ('31', 'chengren', '杜蕾斯 避孕套AiR空气快感三合一16只装', '79.0', '../images/122.jpg', '	16只', '2.1', '杜蕾斯', 'https://p3.maiyaole.com/img/item/201711/22/org_20171122181034312.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p4.maiyaole.com/img/item/201709/27/org_20170927175911846.jpg', 'https://p4.maiyaole.com/img/item/201711/06/org_20171106112527451.jpg', '../html/detail.html', '786', '2018-10-12 16:03:21');
INSERT INTO `goods` VALUES ('32', 'chengren', '杰士邦 避孕套超凡持久10只', '59.9', '../images/123.jpg', '10片', '2.2', '杰士邦', 'https://p1.maiyaole.com/img/item/201804/28/org_20180428154906540.jpg', 'https://p2.maiyaole.com/img/201512/25/org_20151225210028880.jpg', 'https://p3.maiyaole.com/img/item/201804/28/org_20180428154907595.jpg', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428154908588.jpg', 'https://p4.maiyaole.com/img/item/201804/28/org_20180428154909440.jpg', '../html/detail.html', '46', '2018-10-12 16:03:19');
INSERT INTO `goods` VALUES ('33', 'chengren', '冈本 避孕套 超薄003白金 10片装 原装进口男用 Okamoto', '79.0', '../images/124.jpg', '	10片装', '1.3', '	冈本', 'https://p4.maiyaole.com/img/item/201804/11/org_20180411160722228.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140335455.jpg', 'https://p1.maiyaole.com/img/item/201702/08/org_20170208140334356.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140333231.jpg', 'https://p2.maiyaole.com/img/item/201702/08/org_20170208140331934.jpg', '../html/detail.html', '42', '2018-10-12 16:03:16');
INSERT INTO `goods` VALUES ('34', 'chengren', '杜蕾斯 避孕套超薄尊享三合一18片', '49.9', '../images/125.jpg', '	18只', '0.8', '杜蕾斯', 'https://p3.maiyaole.com/img/50077/50077490/org_org.jpg?v=1', 'https://p3.maiyaole.com/img/item/201612/23/org_20161223145451354.jpg', 'https://p2.maiyaole.com/img/201410/16/org_20141016173011770.jpg?v=1', 'https://p3.maiyaole.com/img/201410/17/org_20141017145339378.jpg?v=1', 'https://p1.maiyaole.com/img/201511/27/org_20151127115251204.jpg?v=1', '../html/detail.html', '58', '2018-10-12 16:02:53');
INSERT INTO `goods` VALUES ('35', 'gehu', '云南白药 牙膏 薄荷香型 210g*4件', '89.0', '../images/127.jpg', '	210g', '0.9', '	云南白药', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163008312.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163008798.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009138.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009479.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163009822.jpg', '../html/detail.html', '96', '2018-10-12 16:02:58');
INSERT INTO `goods` VALUES ('36', 'gehu', 'SK-II护肤精华露 神仙水230ml', '1370.0', '../images/128.jpg', '	230ml', '0.7', '	SK-II', 'https://p3.maiyaole.com/img/item/201711/22/org_20171122181034312.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p4.maiyaole.com/img/item/201709/27/org_20170927175911846.jpg', 'https://p4.maiyaole.com/img/item/201711/06/org_20171106112527451.jpg', '../html/detail.html', '106', '2018-10-12 00:43:52');
INSERT INTO `goods` VALUES ('37', 'gehu', '薇诺娜 舒敏保湿修红护理体验套装', '98.0', '../images/129.jpg', '	套装', '0.6', '薇诺娜', 'https://p1.maiyaole.com/img/item/201804/28/org_20180428154906540.jpg', 'https://p2.maiyaole.com/img/201512/25/org_20151225210028880.jpg', 'https://p3.maiyaole.com/img/item/201804/28/org_20180428154907595.jpg', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428154908588.jpg', 'https://p4.maiyaole.com/img/item/201804/28/org_20180428154909440.jpg', '../html/detail.html', '24', '2018-10-12 16:03:00');
INSERT INTO `goods` VALUES ('38', 'gehu', '\r\n完美芦荟胶40g 3支装 祛痘 淡化痘印 痘疤 补水保湿', '69.0', '../images/130.jpg', '	120G', '1.2', '完美', 'https://p4.maiyaole.com/img/item/201804/11/org_20180411160722228.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140335455.jpg', 'https://p1.maiyaole.com/img/item/201702/08/org_20170208140334356.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140333231.jpg', 'https://p2.maiyaole.com/img/item/201702/08/org_20170208140331934.jpg', '../html/detail.html', '19', '2018-10-12 16:03:05');
INSERT INTO `goods` VALUES ('39', 'gehu ', '妇炎洁 植物本草抑菌洗液 380ml*3件', '35.7', '../images/131.jpg', '380ml', '1.6', '妇炎洁', 'https://p3.maiyaole.com/img/50077/50077490/org_org.jpg?v=1', 'https://p3.maiyaole.com/img/item/201612/23/org_20161223145451354.jpg', 'https://p2.maiyaole.com/img/201410/16/org_20141016173011770.jpg?v=1', 'https://p3.maiyaole.com/img/201410/17/org_20141017145339378.jpg?v=1', 'https://p1.maiyaole.com/img/201511/27/org_20151127115251204.jpg?v=1', '../html/detail.html', '86', '2018-10-12 16:03:08');
INSERT INTO `goods` VALUES ('40', 'muying', '美国 童年时光childlife 钙镁锌橙味液体钙*2瓶装', '245.0', '../images/132.jpg', '	474ml/瓶', '1.8', 'ChildLife童年时光', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163008312.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163008798.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009138.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009479.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163009822.jpg', '../html/detail.html', '426', '2018-10-12 16:03:11');
INSERT INTO `goods` VALUES ('41', 'muying', 'Little Remedies 天然蜂蜜止咳棒棒糖 10支', '55.0', '../images/133.jpg', '	1盒', '0.5', '小鼻子/Little', 'https://p3.maiyaole.com/img/item/201711/22/org_20171122181034312.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p1.maiyaole.com/img/item/201709/27/org_20170927175911300.jpg', 'https://p4.maiyaole.com/img/item/201709/27/org_20170927175911846.jpg', 'https://p4.maiyaole.com/img/item/201711/06/org_20171106112527451.jpg', '../html/detail.html', '852', '2018-10-12 00:44:08');
INSERT INTO `goods` VALUES ('42', 'muying', 'BIO ISLAND 佰澳朗德 孕妇海藻油DHA胶囊 60粒/瓶 2瓶', '319.0', '../images/134.jpg', '		60粒*2瓶', '0.6', '	BioIsland/佰澳朗德', 'https://p1.maiyaole.com/img/item/201804/28/org_20180428154906540.jpg', 'https://p2.maiyaole.com/img/201512/25/org_20151225210028880.jpg', 'https://p3.maiyaole.com/img/item/201804/28/org_20180428154907595.jpg', 'https://p2.maiyaole.com/img/item/201804/28/org_20180428154908588.jpg', 'https://p4.maiyaole.com/img/item/201804/28/org_20180428154909440.jpg', '../html/detail.html', '453', '2018-10-12 16:02:51');
INSERT INTO `goods` VALUES ('43', 'muying', 'Mellin/美林 晚安菊花晶200g*2', '89.0', '../images/135.jpg', '	2罐', '200.0', '美林/mellin', 'https://p4.maiyaole.com/img/item/201804/11/org_20180411160722228.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140335455.jpg', 'https://p1.maiyaole.com/img/item/201702/08/org_20170208140334356.jpg', 'https://p3.maiyaole.com/img/item/201702/08/org_20170208140333231.jpg', 'https://p2.maiyaole.com/img/item/201702/08/org_20170208140331934.jpg', '../html/detail.html', '486', '2018-10-12 00:44:11');
INSERT INTO `goods` VALUES ('44', 'muying', '【买2送1】江中儿童钙铁锌婴幼儿益生菌冲剂粉 2g*30袋/盒', '158.0', '../images/136.jpg', '	一罐/盒', '0.2', '江中', 'https://p3.maiyaole.com/img/50077/50077490/org_org.jpg?v=1', 'https://p3.maiyaole.com/img/item/201612/23/org_20161223145451354.jpg', 'https://p2.maiyaole.com/img/201410/16/org_20141016173011770.jpg?v=1', 'https://p3.maiyaole.com/img/201410/17/org_20141017145339378.jpg?v=1', 'https://p1.maiyaole.com/img/201511/27/org_20151127115251204.jpg?v=1', '../html/detail.html', '146', '2018-10-12 00:44:13');
INSERT INTO `goods` VALUES ('45', 'chengren', '冈本 避孕套超薄003黄金10片装 原装进口', '89.0', '../images/126.jpg', '	10片装', '0.5', '	冈本', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163008312.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163008798.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009138.jpg', 'https://p1.maiyaole.com/img/item/201705/03/org_20170503163009479.jpg', 'https://p3.maiyaole.com/img/item/201705/03/org_20170503163009822.jpg', '../html/detail.html', '986', '2018-10-12 16:02:34');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `user` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  PRIMARY KEY (`user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('13168893909', 'su123456');

-- ----------------------------
-- Table structure for miaosha
-- ----------------------------
DROP TABLE IF EXISTS `miaosha`;
CREATE TABLE `miaosha` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` float(255,1) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `beizhu` varchar(255) NOT NULL,
  `lianjie` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of miaosha
-- ----------------------------
INSERT INTO `miaosha` VALUES ('1', '海氏海诺便携创伤应急包', '11.9', '../images/37.jpg', '科学组合全面护理轻松应对紧急情况', '../html/detail.html');
INSERT INTO `miaosha` VALUES ('2', '艾洛松 糠酸莫米松乳膏 10g:10mg（湿疹可用）', '21.8', '../images/38.jpg', '用于湿疹、神经性皮炎、异位性皮炎及皮肤瘙痒症状', '../html/detail.html');
INSERT INTO `miaosha` VALUES ('3', '荆江源 安乐片 0.3g*60片', '9.9', '../images/39.jpg', '疏肝解郁安眠、用于精神抑郁、失眠', '../html/detail.html');
INSERT INTO `miaosha` VALUES ('4', '百世康 白云山 绞股蓝总甙片 20mg*80片', '15.0', '../images/40.jpg', '用于高血脂症', '../html/detail.html');
SET FOREIGN_KEY_CHECKS=1;
