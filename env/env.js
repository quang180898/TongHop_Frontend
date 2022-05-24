
module.exports = {
	NODE_ENV: 'none',
	MODE_ENV: {
		local: {
			// api: 'https://saledev-adminv2.minerva.vn',
			//dev
			show_log: true,
			hot: true,
			liveReload: true,
			host: 'localhost',
			port: 3006,
			portServer: 5004

		},
		prod: {
			// api: 'https://sale-adminv2.minerva.vn',
			// cloudapi: 'https://cloudapi.minerva.vn'
		},
	}
};
