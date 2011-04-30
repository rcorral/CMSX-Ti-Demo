Ti.include('helper.js');

var win = Ti.UI.currentWindow;

var close = Ti.UI.createButton({ title: 'Close' });
close.addEventListener('click', function() {
	win.close();
});
win.leftNavButton = close;

var title = Ti.UI.createTextField({
	color: '#336699',
    hintText: 'Enter the title',
    height: 35,
    width: 300,
    top: 10,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    appearance: Titanium.UI.KEYBOARD_APPEARANCE_ALERT
});

var introtext = Ti.UI.createTextArea({
	color: '#336699',
    hintText: 'Focus to see keyboard w/ toolbar',
    height: 100,
    width: 300,
    top: 55,
    borderColor: '#ccc',
    borderRadius: 5,
	appearance: Titanium.UI.KEYBOARD_APPEARANCE_ALERT    
});

var submit = Ti.UI.createButton({
	title: 'Create Item',
	bottom: 20,
	width: 300,
	height: 50,
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
submit.addEventListener('click', function() {
	if(title.value) {
		var data = {
			title: title.value,
			introtext: introtext.value
		};
		
		// TODO use win.formType to determine if it's a section, article, category
		
		Helper.xhr({ 
			json: true,
			type: 'POST',
			data: data,
			url: 'http://192.168.1.113/com_api/site/index.php?option=com_api&app=content&resource=sections&key=38467708868b0256f56e9a70e60a8c2214c9b1e8',
			callback: function(e) {
				alert(e);
				win.close();
			} 
		});		
	}
});

win.add(title);
win.add(introtext);
win.add(submit);
