export const coursesMockData = [
	{
		id: '7f1e23a2-4f87-45b0-9dab-65e9f47c2f1d',
		name: 'Node.js Fundamentals',
		description:
			'Dive into the world of server-side JavaScript with Node.js. This comprehensive course equips you with the knowledge to build scalable and efficient applications using Node.js. Explore event-driven architecture, asynchronous programming, and more.',
		authors: ['Jane Maxwell', 'Alex Turner'],
		duration: 120,
		created: new Date(2015, 0, 10),
	},
	{
		id: 'd9b34e55-8c3a-4fe2-90ea-1e258e8c0f72',
		name: 'Python for Data Science',
		description:
			"Unlock the power of data with Python for Data Science. In this comprehensive course, you'll learn how to manipulate, analyze, and visualize data using Python's rich ecosystem of libraries.",
		authors: ['Maria Rodriguez', 'Kevin Chen'],
		duration: 180,
		created: new Date(2018, 11, 5),
	},
	{
		id: '6a8f7919-56f2-4c4b-aae8-98c485c59267',
		name: 'Full Stack Web Development with MERN',
		description:
			'Become a proficient full-stack developer using the MERN (MongoDB, Express, React, Node.js) stack. Join experts Sarah Hughes and Michael Nguyen on a journey to building dynamic web applications from scratch.',
		authors: ['Sarah Hughes', 'Michael Nguyen'],
		duration: 200,
		created: new Date(2020, 2, 15),
	},
	{
		id: '2e1d88b3-981e-4e06-a31e-b5d54a7d672b',
		name: 'Machine Learning Foundations',
		description:
			"Step into the realm of machine learning with this foundational course. Taught by AI enthusiasts Emily Baker and Jason Kim, you'll grasp the core concepts of machine learning algorithms, supervised and unsupervised learning, and model evaluation.",
		authors: ['Emily Baker', 'Jason Kim'],
		duration: 160,
		created: new Date(2017, 9, 30),
	},
	{
		id: 'b4f8a279-7c2e-49d6-bd5e-74e3c7c79436',
		name: 'Cybersecurity Essentials',
		description:
			"Protect digital assets and thwart cyber threats with the Cybersecurity Essentials course. Guided by industry experts Alexei Petrov and Megan Foster, you'll learn the fundamentals of cybersecurity, including network security, encryption, and threat detection.",
		authors: ['Alexei Petrov', 'Megan Foster'],
		duration: 140,
		created: new Date(2019, 6, 25),
	},
	{
		id: 'ef68981a-e158-4e47-b13c-68ea823ed5af',
		name: 'Front-End Web Development with Vue.js',
		description:
			"Immerse yourself in the world of Vue.js and become a skilled front-end developer. Led by experienced developers Lisa Chen and Daniel Rivera, this course covers Vue.js's core concepts, reactive data binding, and component-based architecture.",
		authors: ['Lisa Chen', 'Daniel Rivera'],
		duration: 130,
		created: new Date(2021, 12, 4),
	},
];

export function findCourseById(id) {
	return coursesMockData.filter((course) => course.id === id)[0];
}
