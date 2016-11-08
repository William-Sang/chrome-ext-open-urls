// TODO 估计要做类型判断，防止之前数据类型问题
// 初始化

function getUrls() {
	let urls;
	if (localStorage.getItem("urls") == null || localStorage.getItem("urls") == undefined) {
		urls = new Set();
	}else{
		urls = new Set(JSON.parse(localStorage.getItem("urls")));
		console.log('parse json')
		console.log(urls)
	}
	return urls;
}



function addClick() {
	// 获取输入的 URL
	let urls = getUrls();
	let url = document.getElementById("urlInput").value;
	console.log(urls);
	if (!urls.has(url) ) {
		urls.add(url);
		// 页面更新
		let ul = document.getElementById("urllist");
	
　　　　  //添加 li
　　　   let li = document.createElement("li");

　　　　 li.innerHTML = url;
　　　　 ul.appendChild(li);
	}
	// 更新 localstorage
	// localStorage 只能存储字符串，所以需要序列化
	// set 不能被序列化，需要被转换成 array 参考： http://stackoverflow.com/questions/31190885/json-stringify-a-set
	localStorage.setItem("urls", JSON.stringify(Array.from(urls)));
	// localStorage.setItem("urls", JSON.stringify(urls));	
}

function loadUrls() {
	console.log('loadUrls')
	// 循环 set
	let urls = getUrls();
	for (let item of urls) {
		console.log(item)
		let ul = document.getElementById("urllist");
	
　　　　  //添加 li
　　　   let li = document.createElement("li");

　　　　 li.innerHTML = item;
　　　　 ul.appendChild(li);
	}

}