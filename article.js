Ti.include('helper.js');

var win = Ti.UI.currentWindow;

var rows = [];

var data = Helper.xhr({ 
	json: true,
	url: 'http://192.168.1.113/com_api/site/index.php?option=com_api&app=content&resource=article&id=' + win.data + '&key=38467708868b0256f56e9a70e60a8c2214c9b1e8',
	callback: function(e) {
		var wrapper = Ti.UI.createView({
			layout: 'vertical',
			left: 10,
			top: 10,
			right: 10,
			bottom: 10
		});
		var title = Ti.UI.createLabel({
			text: e[0].title,
			height: 50,
			width: '100%',
			top: 0
		});
		var desc = Ti.UI.createWebView({
			html: e[0].introtext,
			backgroundColor: 'transparent',
			height: 'auto',
			width: '100%',
			height: 290,
			top: 5,
		});
		
		wrapper.add(title);
		wrapper.add(desc);
		win.add(wrapper);
	} 
});