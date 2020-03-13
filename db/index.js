var faker = require('faker');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});


let repoSchema = mongoose.Schema({

    id: { type: Number, unique: true },
    userIcon: String,
    userName: { String, unique: true },
    partnered: Boolean,
    pro: Boolean,
    lvl_of_streamer: Number,
    total_views: Number,
    account_created_date: Date,
    facebook: Boolean,
    instagram: Boolean,
    twitter: Boolean,
    youtube: Boolean,
    teams: Array,
    sponsors: Array,
    bio: Array,
    broadcasts: Array,
    clips: Array,
    
});

const Repo = mongoose.model('Streamer', repoSchema);

const db = client.db('Streamer');



const randomUsername = faker.internet.userName();
const randomUsericon = 'https://picsum.photos/200/300';
const randomPartnered = faker.random.boolean();
const randomPro = faker.random.boolean();
const randomLvl = Math.floor(Math.random() * 200);
const randomViews = faker.random.number();
const randomCreatedDate = faker.date.past();
const randomFacebook = faker.random.boolean();
const randomInstagram = faker.random.boolean();
const randomTwitter = faker.random.boolean();
const randomYoutube = faker.random.boolean();
const randomTeams = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()];
const randomSponsors = [faker.commerce.department(), faker.commerce.department(), faker.commerce.department()];
const randomBio = ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300',];
const randomBroadcast = [{broadcasts: ['http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg']}, {title: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()]}, {views: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]}, {dateUploaded: [faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past()]}];
const randomClip = [{clips: ['http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg']}, {title: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()]}, {views: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]}, {dateUploaded: [faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past()]}];



let users = [];
const seed = () => {
    for (let i = 0; i <= 100; i++) {
        let newUser = {
            userIcon: randomUsericon,
            userName: randomUsername,
            partnered: randomPartnered,
            pro: randomPro,
            lvl_of_streamer: randomLvl,
            total_views: randomViews,
            account_created_date: randomCreatedDate,
            facebook: randomFacebook,
            instagram: randomInstagram,
            twitter: randomTwitter,
            youtube: randomYoutube,
            teams: randomTeams,
            sponsors: randomSponsors,
            bio: randomBio,
            broadcasts: randomBroadcast,
            clips: randomClip,
        };

        users.push(newUser);
    }
    return users;
}


Streamer.insertMany(seed());