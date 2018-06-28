 // 1 什么是错误优先的回调函数？
 // 错误优先的回调函数(Error-First Callback)用于同时返回错误和数据。第一个参数返回错误，并且验证它是否出错；其他参数用于返回数据。

// var fs = require('fs')
//  fs.readFile(filePath, function(err, data)
//  {
// 	 if (err)
// 	 {
// 		 // 处理错误
// 		 return console.log(err);
// 	 }
// 	 console.log(data);
//  });

 