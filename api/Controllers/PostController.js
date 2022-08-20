const fs = require('fs');

const PostArr = JSON.parse(
	fs.readFileSync(`${__dirname}/../data/user.json`),
);

// ---Middleware to check if (:id ) is available

// ! CHECHKID MIDDLWARE INCOMPLETE BUT WORKS
exports.checkID = (req, res, next) => {
	console.log(req.body);

	next();
};

// 	-------------CREATinig First APi ---Posts

// ----------------------------------------------Get all posts    Details
exports.getallposts = (req, res) => {
	res.status(200).json({
		status: 'Sucess',
		results: PostArr.length,
		data: {
			posts: PostArr,
		},
	});
};

// ------------------Create POst

exports.createposts = (req, res) => {
	//   console.log(req.body);

	const newId = PostArr[PostArr.length - 1].id + 1;
	console.log(newId);

	//  New data Forged ???~
	const newPost = Object.assign({ id: newId }, req.body);
	console.log(newPost);
	PostArr.push(newPost);

	fs.writeFile(
		`${__dirname}/dev-data/data/AllUserArr-simple.json`,
		JSON.stringify(PostArr),
		(err) => {
			res.status(201).json({
				status: 'success Again',
				data: {
					tour: newPost,
				},
			});
		},
	);
};

// ----------------------------------------------Get post by Id

exports.getsingleposts = (req, res) => {
	const id = req.params.id * 1;
	const UserArr = PostArr.find((cur) => cur.id === id);

	if (!UserArr) {
		res.status(404).json({
			status: 'Not Found',
			message: 'Invalid POst Id ',
		});
	}

	res.status(200).json({
		status: 'sucess',
		// results: UserArr.length,
		data: {
			User: UserArr,
		},
	});
};

// ------------------------------------------Update Post
exports.updateposts = (req, res) => {
	res.status(500).json({
		status: 'Error',
		message: 'Post absent',
	});
};

// ----------------------------------------------Deete post

exports.deletepost = (req, res) => {
	const id = req.params.id * 1;
	const UserArr = PostArr.find((cur) => cur.id === id);
	if (!UserArr) {
		res.status(404).json({
			status: 'Not Found',
			message: 'Invalid Post Id ',
		});
	}
	res.status(200).json({
		status: 'suceess',
		data: null,
	});
};

module.exports = exports;
