Ti.include('helper.js');

var win = Ti.UI.currentWindow;

var addBtn = Ti.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.ADD });
addBtn.addEventListener('click', function() {
	var addwin = Ti.UI.createWindow({
		url: 'form.js',
		title: 'Create Section'
	});
	
	addwin.formType = 'section';
	
	Ti.UI.currentTab.open(addwin);
});

win.rightNavButton = addBtn;

var rows = [];

var data = Helper.xhr({ 
	json: true,
	url: 'http://172.16.0.15/com_api/site/index.php?option=com_api&app=content&resource=sections&key=38467708868b0256f56e9a70e60a8c2214c9b1e8',
	callback: function(e) {
		
		for (var i = 0; i < e.length; i++) {
			var row = Ti.UI.createTableViewRow({ 
				height: 'auto',
				sectionid: e[i].id,
				hasDetail: true 
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
				url: 'categories.js',
				title: 'Categories'
			});
			
			newwin.data = e.rowData.sectionid;
			
			Ti.UI.currentTab.open(newwin);
		});
		
		win.add(table);
				
	} 
});