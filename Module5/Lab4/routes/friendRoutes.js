const express = require("express");
const router = express.Router();
const friends = require('../models/friends');

// default endpoint, gets all friends
router.get('/', (req, res) => {
    res.json(friends);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter
// and/or the starting 'letter' query parameter
router.get('/filter', (req, res) => {
    console.log(req.query);
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterLetter));
    }

    if (matchingFriends.length > 0) {
        // return valid data when there are matches
        res.status(200).json(matchingFriends);
    } else {
        // return an error response when there are no matches
        res.status(404).json({error: "No friends matching the criteria"});
    }  
});

// Get information about this request from the headers
router.get('/info', (req, res) => {
    const { 'user-agent': userAgent, 'content-type': contentType, accept } = req.headers;

    res.json({
        'user-agent': userAgent,
        'content-type': contentType,
        accept
    });
});

// Dynamic request param endpoint - get the friend matching the specific ID
router.get('/:id', (req, res) => {
    console.log(req.params);
    let friendId = parseInt(req.params.id); // Convert ID to integer
    let friend = friends.find(friend => friend.id === friendId);

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({error: "Friend not found with ID " + friendId});
    }
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend); // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend);
    res.status(200).json(newFriend);
});

// Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    let friendId = parseInt(req.params.id); // Convert ID to integer
    let updatedFriend = req.body;

    let friendIndex = friends.findIndex(friend => friend.id === friendId);

    if (friendIndex !== -1) {
        // Validate the updated friend object
        if (!updatedFriend.name || !updatedFriend.gender) {
            res.status(400).json({error: 'Friend object must contain a name and gender'});
            return;
        }

        // Update the friend data
        friends[friendIndex] = { id: friendId, ...updatedFriend };
        res.status(200).json(friends[friendIndex]);
    } else {
        res.status(404).json({error: "Friend not found with ID " + friendId});
    }
});

module.exports = router;
