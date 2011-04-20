var Helper = {
	xhr: function(opts) {
		// Setup the xhr object
		var xhr = Ti.Network.createHTTPClient();
	
		// Set the timeout or a default if one is not provided
		xhr.timeout = (opts.timeout) ? opts.timeout : 10000;	
	
		/**
		 * Error handling
		 * @param {Object} e The callback object
		 */
		xhr.onerror = function(e) {
			
		};
	
		/**
		 * When XHR request is loaded
		 * @returns {Mixed}
		 */
		xhr.onload = function() {
			opts.callback( JSON.parse(this.responseText) );
		};
	
		// Open the remote connection
		if(opts.type) {
			xhr.open(opts.type, opts.url);	
		} else {
			xhr.open('GET', opts.url);
		}
	
		if(opts.data) {
			// send the data
			xhr.send(opts.data);	
		} else {
			xhr.send(null);
		}			
	}
};
