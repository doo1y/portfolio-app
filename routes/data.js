var express = require("express");
var router = express.Router();
var { Octokit } = require("octokit");
var { ProxyAgent } = require("proxy-agent");

/* GET users listing. */
router.get("/", async function (req, res, next) {
	const octokit = new Octokit({
		userAgent: "my-app/v.1.0.0",
		auth: process.env.AUTH_TOKEN,
		request: {
			agent: new ProxyAgent(),
		},
		baseURL: "https://api.github.com",
	});

	try {
		const result = await octokit.request("GET /user/repos", {
			owner: "doo1y",
		});

		const mappedResult = result.data.map((x, i) => ({
			title: x.name,
			url: x.html_url,
			description: x.description,
			created: x.created_at,
		}));

		res.send(JSON.stringify(mappedResult));
	} catch (error) {
		res.send(JSON.stringify(error));
	}
});

module.exports = router;
