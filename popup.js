// 初始化加载
let urls;
if (localStorage.getItem("urls") == null || localStorage.getItem("urls") == undefined) {
	// 没有设定 URL
	// TODO 默认展示几个没有点击功能的实例列表
	urls = new Set();
}else{
	urls = new Set(JSON.parse(localStorage.getItem("urls")));
}

let urllist = document.getElementById("urllist");


for(let item of urls){
    let div = document.createElement("div");
    // 链接设置到 url-data 中供事件读取绑定
	div.innerHTML = item;
	div.setAttribute('url-data', item)
	div.setAttribute('class', 'url')
	urllist.appendChild(div);
}

function click(e) {
	let url  = this.getAttribute("url-data");
	// console.log(this.getAttribute('url-data'));
    chrome.tabs.create({ url: url, active: true });
}

// 点击事件，不能通过 href 因为会导致在 popup.html 窗口打开
let divs = document.querySelectorAll("div.url");
console.log("divs.length :" + divs.length);
for (var i = 0; i < divs.length; i++) {
divs[i].addEventListener('click', click);
}
