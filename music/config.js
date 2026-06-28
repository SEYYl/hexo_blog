// HeoMusic 配置
// 继承自博客现有的 Solitude 音乐配置

// 歌单 ID（取自 _config.solitude.yml）
var userId = "5144842535";

// 音乐服务商：netease / tencent / kugou / xiami / baidu
var userServer = "netease";

// 类型：playlist / song / album / artist / search
var userType = "playlist";

// Meting API 地址（用于解析音乐链接）
// 使用 HeoMusic 项目的公共 API，无需 PHP 后端
window.meting_api = "https://music.zhheo.com/meting-api/?server=:server&type=:type&id=:id&r=:r";

// 本地音乐（可选）
// var localMusic = [{...}];

// 远程音乐列表 JSON（可选）
// var remoteMusic = "./musiclist.json";
