module.exports = {
	NODE_ENV: 'none',
	MODE_ENV: {
		local: {
			api: 'https://backend-sneaker.herokuapp.com',
			//dev
			show_log: true,
			hot: true,
			liveReload: true,
			host: 'localhost',
			port: 3006,
			portServer: 8000

		},
	}
};
