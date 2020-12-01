function jsonp(options) {
  // console.log(options.data);
  let script = document.createElement("script");
  //添加数据请求调用的方法
  let fnName = "";
  if (options.success) {
    fnName = "jsonp" + Math.random().toString().replace(".", "");
    window[fnName] = options.success;
  } else {
    console.log("jsonp参数对象缺少‘success’方法");
  }
  // 添加url以及变量
  if (options.url) {
    let params = "?";
    for (let i in options.data) {
      params += i + "=" + options.data[i] + "&";
    }
    console.log(options.url + params + "&callback=" + fnName);
    script.setAttribute("src", options.url + params + "&callback=" + fnName);
  } else {
    console.log("对象缺少‘url’属性");
    return false;
  }
  // 将script标签添加到页面
  document.body.appendChild(script);
  // script加载完毕时删除script标签
  script.onload = function () {
    document.body.removeChild(script);
  };
}
