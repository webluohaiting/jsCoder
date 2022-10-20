function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}

log(new Date(), 'DEBUG', '查找到轮播图的bug')
log(new Date(), 'DEBUG', '查询菜单的bug')
log(new Date(), 'DEBUG', '查询数据的bug')

// 柯里化的优化
var log = date => type => message => {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}

// 打印的都是当前时间
var nowLog = log(new Date())

nowLog('DEBUG')('查找到轮播图的bug')
nowLog('FETURE')('新增了添加用户的功能')

// 打印当前时间+debug
var nowAndDebugLog = log(new Date())('DEBUG')
nowAndDebugLog('查找到轮播图的bug')

// 打印当前时间+feature
var nowAndFeatureLog = log(new Date())('FETURE')
nowAndDebugLog('新增了添加用户的功能')