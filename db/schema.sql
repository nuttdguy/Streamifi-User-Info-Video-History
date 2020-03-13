var faker = require('faker');


DROP DATABASE IF EXISTS streamifi;

CREATE DATABASE IF NOT EXISTS streamifi;

USE streamifi;

CREATE TABLE IF NOT EXISTS userData(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20),
    partnered BOOLEAN,
    pro BOOLEAN,
    lvl_of_streamer NUMBER,
    total_views NUMBER,
    account_created_date DATE,
    facebook BOOLEAN,
    instagram BOOLEAN,
    twitter BOOLEAN,
    youtube BOOLEAN,
    teams_id INT,
    sponsors TEXT,
    bio_id TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (teams_id) REFERENCES teams(id)
);

CREATE TABLE IF NOT EXISTS userTeams(
    userData_id INT,
    teams_id INT,
    FOREIGN KEY (teams_id) REFERENCES teams(id),
    FOREIGN KEY (userData_id) REFERENCES userData(id)
);

CREATE TABLE IF NOT EXISTS teams(
    id INT AUTO_INCREMENT PRIMARY KEY,
    teams VARCHAR(20),
    team_logo TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pastBroadcasts(
    userData_id INT,
    broadcastTitle TEXT,
    views NUMBER,
    date_uploaded DATE,
    FOREIGN KEY (userData_id) REFERENCES userData(id)
);

CREATE TABLE IF NOT EXISTS pastClips(
    userData_id INT,
    clipTitle TEXT,
    views NUMBER,
    date_uploaded DATE,
    FOREIGN KEY (userData_id) REFERENCES userData(id)
);


-- clips = [{title: []},{views: []},{dateUploaded: []},{clips: []}] 
-- clipTitle: Array,
-- clipViews: Array,
-- clipDateUploaded: Array

-- broadcast = [{title: []},{views: []},{dateUploaded: []},{clips: []}]
-- broadcastTitle: Array,
-- broadcastViews: Array,
-- broadcastDateUploaded: Array,
