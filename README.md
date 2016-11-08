# chrome-ext-open-urls
 chrome extension used to open urls

用途：快速打开设定的 URL，甚至可以只设置一个 URL。（后续加入快捷键）



思路：

设置页面添加 URLs (options.html)
    ||
    \/
localstorage
	||
	\/
popup.js 读取修改 popup.html

	


## popup.html

两部分：

左键：URLs list (读取本地数据，列出)
右键：设置页面  contextmenu


## 在 UI 和 background 之前传输数据

通过 localstorage当做中介


读取 UI 输入参考 sample：[A browser action with a popup that changes the page color](https://developer.chrome.com/extensions/examples/api/browserAction/set_page_color.zip)