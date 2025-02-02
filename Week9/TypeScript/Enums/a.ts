enum Dir {
    Up,
    Down,
    Left="left side",
    Right=25
}

function press(val:Dir) {
    console.log(val);
}
press(Dir.Up)//0

press(Dir.Right)//25

press(Dir.Left)//left side



// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })//common usecase