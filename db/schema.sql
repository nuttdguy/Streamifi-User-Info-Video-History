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
    social_media BOOLEAN,
    teams BOOLEAN,
    sponsors TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pastBroadcasts(
    broadcastTitle TEXT,
    views NUMBER,
    date_uploaded DATE

);

CREATE TABLE IF NOT EXISTS pastBroadcasts(
    clipTitle TEXT,
    views NUMBER,
    date_uploaded DATE
);
