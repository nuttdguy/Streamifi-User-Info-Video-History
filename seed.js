const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/streamifi');

let repoSchema = mongoose.Schema({

    id: { type: Number, unique: true },
    userIcon: String,
    userName: { type: String, unique: true },
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

let stream = mongoose.model('Streamer', repoSchema);

// const randomUsername = faker.internet.userName();
// const randomUsericon = 'https://picsum.photos/200/300';
// const randomPartnered = faker.random.boolean();
// const randomPro = faker.random.boolean();
// const randomLvl = Math.floor(Math.random() * 200);
// const randomViews = faker.random.number();
// const randomCreatedDate = faker.date.past();
// const randomFacebook = faker.random.boolean();
// const randomInstagram = faker.random.boolean();
// const randomTwitter = faker.random.boolean();
// const randomYoutube = faker.random.boolean();
// const randomTeams = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()];
// const randomSponsors = [faker.commerce.department(), faker.commerce.department(), faker.commerce.department()];
// const randomBio = ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300',];
// const randomBroadcast = [{broadcasts: ['http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg']}, {title: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()]}, {views: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]}, {dateUploaded: [faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past()]}];
// const randomClip = [{clips: ['http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg']}, {title: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()]}, {views: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]}, {dateUploaded: [faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past()]}];


let users = [];
const seed = () => {
    for (let i = 0; i <= 100; i++) {
        let newUser = {
            userIcon: 'https://picsum.photos/200/300',
            userName: faker.internet.userName(),
            partnered: faker.random.boolean(),
            pro: faker.random.boolean(),
            lvl_of_streamer: Math.floor(Math.random() * 200),
            total_views: faker.random.number(),
            account_created_date: faker.date.past(),
            facebook: faker.random.boolean(),
            instagram: faker.random.boolean(),
            twitter: faker.random.boolean(),
            youtube: faker.random.boolean(),
            teams: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
            sponsors: [faker.commerce.department(), faker.commerce.department(), faker.commerce.department()],
            bio: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
            broadcasts: [{broadcasts: ['http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', 'http://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg']}, {title: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()]}, {views: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]}, {dateUploaded: [faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past()]}],
            clips: [{clips: ['http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg', 'http://img.youtube.com/vi/Z6kXrSE8GoQ/mqdefault.jpg']}, {title: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()]}, {views: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]}, {dateUploaded: [faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past(), faker.date.past()]}]
        };

        users.push(newUser);
    }
    return users;
}


stream.insertMany(seed());