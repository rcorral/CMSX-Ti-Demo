Titanium.UI.setBackgroundColor('#eee');

// create tab group
var tabGroup = Ti.UI.createTabGroup();

var win1 = Ti.UI.createWindow({  
    title: 'Sections',
    url: 'sections.js',
    backgroundColor: '#fff'
});
var tab1 = Ti.UI.createTab({  
    icon: 'KS_nav_views.png',
    title: 'CMX Tests',
    window: win1
});

tabGroup.addTab(tab1);  
tabGroup.open();
