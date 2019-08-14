let path = require('path');
let friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body
        console.log(newFriend)
        let newFriendScores = newFriend.scores
        let match = {
            name: "",
            photo: "",
            difference: 1000

        }
        // loop through other users 
        for (let i =0; i < friends.length;i++){
        let totalDiff = 0
        console.log(friends[i].name)
        // loop through newFriendScores and compare against other friends scores
        for (let j=0; j < newFriendScores.length;j++) {
            totalDiff += Math.abs(friends[i].scores[j] - newFriendScores[j])
        // calculate difference between scores
            if (totalDiff <= match.difference){
                match.name = friends[i].name;
                match.photo = friends[i].photo
                match.difference = totalDiff
            }
        }
    }
        friends.push(newFriend)
        console.log(match)
        res.json(match)
    })
}