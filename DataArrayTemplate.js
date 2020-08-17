datasets = [{
	pageOptions : {
		pageTitle : "My Page",
		backgroundImage : "url",
		backgroundColor : #fff,
		primaryColor : #000,
		secondaryColor : red,
		tersiaryColor : gray,
		primaryTextColor : #fff,
		secondaryTextColor : red,
	},

	chartColors : [red, green],
	menuBarLinks : [
		["Title", "url"],
		["Title", "url"]
	],
	mainDashboard : {
		include : true,
		title : "My Dashboard",
		metrics : [
		       [3, "sum", red, "prefix", "Sufix"],
		       [4, "average", blue, "prefix", "Sufix"]
		],
		charts : [
		       ["line", 1, 2, "title", "months", [0,1,2]],
		       ["pie", 1, "title", "prefix", "sufix", [0,1,2]],
		       ["map", [1, 2, 3], [0,1,2]]
		]
	},

	linkedColumns : [
		[1,2,3,4],
		[1,2,3,4]
	],
	locationDashboard : [
		[0,3],
		[2,3]
	],
	ownerDashboards : [
		[0,3],
		[2,3]
	],
	datasets : [
		{
			datasetTitle : "Tasks",
			datasetName : "Tasks",
			primaryDataset : true,
			metrics : [
				[3, "sum", red, "prefix", "Sufix"],
				[4, "average", blue, "prefix", "Sufix"]
			],
			charts : [
				["line", 1, 2, "title", "months"],
				["pie", 1, "title", "prefix", "sufix"],
				["map", [1, 2, 3]]
			],
			grid : 1,
			headers : [
				"Id",
				"Title"
			],
			datasetBody : [
				[1, "title 1", ...],
				[1, "title 2", ...]
			]
		},
	]}
}]
