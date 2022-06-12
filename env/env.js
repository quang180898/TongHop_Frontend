module.exports = {
	NODE_ENV: 'none',
	MODE_ENV: {
		local: {
			// api: 'https://backend-sneaker.herokuapp.com',
			api: 'http://127.0.0.1:8000',
			//dev
			show_log: true,
			hot: true,
			liveReload: true,
			host: 'localhost',
			port: 3006,
			portServer: 5004

		},
	}
};
