DROP DATABASE IF EXISTS streamifi;

CREATE DATABASE IF NOT EXISTS streamifi;

USE streamifi;

CREATE TABLE IF NOT EXISTS userData(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20),
    partnered BOOLEAN,
    lvl_of_streamer NUMBER,
    total_views NUMBER,
    account_created_date DATE,
    facebook TEXT,
    instagram TEXT,
    twitter TEXT,
    youtube TEXT,
    teams BOOLEAN,
    sponsors TEXT,
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
