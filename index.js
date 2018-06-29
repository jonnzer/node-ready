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

 // ------------------------------------------------------------------------------------

 // 2、如何避免回调地狱？
	// 异步的思路：（阮一峰大师曾说）
	// 观察者监听模式
	// promise then
	// async await
	// 将回调函数写成独立的函数，这样也不至于回调的太难看

 // ------------------------------------------------------------------------------------


 // 3、promise
  // 处理异步操作的一个伙计，resolve时可以连接then继续调用，reject也可以用catch捕捉错误。
 // new Promise((resolve, reject) =>
 // {
	//  setTimeout(() =>
	//  {
	// 	 resolve('result');
	//  }, 100)
 // })
	//  .then(console.log)
	//  .catch(console.error);

 // ------------------------------------------------------------------------------------


 // 4、stub 模拟测试模块的行为。测试用例 有待深究

 // ------------------------------------------------------------------------------------

 // 5、 Cookies如何防范XSS攻击？
//  XSS(Cross-Site Scripting，跨站脚本攻击)是指攻击者在返回的HTML中插入JavaScript脚本。为了减轻这些攻击，需要在HTTP头部配置set-cookie:
//
//  HttpOnly - 这个属性可以防止cross-site scripting，因为它会禁止Javascript脚本访问cookie。
// secure - 这个属性告诉浏览器仅在请求为HTTPS时发送cookie。
// 结果应该是这样的: Set-Cookie: sid=<cookie-value>; HttpOnly. 使用Express的话，cookie-session默认配置好了。

 // ------------------------------------------------------------------------------------


 // 6、如何保证依赖的安全性？
//  自动化检查依赖工具
//  npm outdated
//  Trace by RisingStack
//  NSP
//  GreenKeeper
//  Snyk

 // ------------------------------------------------------------------------------------

 // 7、调试一个大型的项目时，可以使用监控unhandledRejection事件来捕获所有未处理的Promise错误:
 //
 // process.on('unhandledRejection', (err) =>
 // {
 //     console.log(err)
 // })

 // ------------------------------------------------------------------------------------


 // 8、Promise.resolve(1)
 //   .then((x) => x + 1)
 //   .then((x) => { throw new Error('My Error') })
 //   .catch(() => 1)
 //   .then((x) => x + 1)
 //   .then((x) => console.log(x))
 //   .catch(console.error)

 //  答案是2，逐行解释如下:
// 创建新的Promise，resolve值为1。
// x为1，加1之后返回2。
// x为2，但是没有用到。抛出一个错误。
// 捕获错误，但是没有处理。返回1。
// x为1，加1之后返回2。
// x为2，打印2。
// 不会执行，因为没有错误抛出。

 // ------------------------------------------------------------------------------------

 // 9、Token和Session的使用
 // token:"身份识别在客户端和服务端中过于频繁，它就相当于一个令牌，减少服务器向数据库查询身份的次数，增加服务端的健壮性" 由服务器生成 前端请求带着 就无需带着用户名和密码
 //如何使用Token？。
 // 服务端保存session的内容，客户端浏览器cookie保存sessionid，服务端通过客户端每次http请求带上的cookie中的sessionid去找到对应此用户的session内容。