Ti.include('helper.js');

var win = Ti.UI.currentWindow;

var rows = [];

var data = Helper.xhr({ 
	json: true,
	url: 'http://192.168.1.113/com_api/site/index.php?option=com_api&app=content&resource=categories&sectionid=' + win.data + '&key=38467708868b0256f56e9a70e60a8c2214c9b1e8',
	callback: function(e) {
		
		for (var i = 0; i < e.length; i++) {
			var row = Ti.UI.createTableViewRow({ 
				height: 'auto',
				categoryid: e[i].id 
			});
			var label = Ti.UI.createLabel({
				text: e[i].title,
				width: 200,
				height: 50,
				left: 10,
				color: 'black'
			});
			row.add(label);
			rows.push(row);
		}
		
		var table = Ti.UI.createTableView({
			data: rows
		});
		table.addEventListener('click', function(e) {
			var newwin = Ti.UI.createWindow({
				url: 'articles.js',
				title: 'Articles'
			});
			
			newwin.data = e.rowData.categoryid;
			
			Ti.UI.currentTab.open(newwin);
		});
		
		win.add(table);
				
	} 
});