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

menuBarLinks : [
	["Title", "url"],
	["Title", "url"],
	...
],

datasets : [
	{
		datasetTitle : "Tasks",
		datasetName : "Tasks",
		linkedTimeline : true,
		linkedColumns : [1,2,3,4],
		primaryDataset : true,
		masterDashboard : true,
		ownerDashboards : 3,
		locationDashboard : 4,
		metrics : [
			[3, "sum"],
			[4, "average"],
			...
		],
		timeline : true,
		map : true,
		dashboard : [0,1,5,10],
		charts : ["line", "pie",...],
		grid : 1,
		headers : [
			"Id",
			"Title",
			...
		],
		datasetBody : [
			[1, "title 1", ...],
			[1, "title 2", ...],
			...
		]
	},
	{
		...
	},
	{
		...
	},
]
]}

}]
