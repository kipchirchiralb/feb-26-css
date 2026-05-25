CREATE DATABASE talentroute;
USE talentroute;    

CREATE TABLE opportunities(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT,
location VARCHAR(255),
university VARCHAR(255),
requirements TEXT,
application_link VARCHAR(255)
);

CREATE TABLE talents(
    email VARCHAR(255) PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    sport VARCHAR(50),
    dob DATE,
    phone VARCHAR(20),
    highest_achievement TEXT,
    education_level VARCHAR(50)
);

CREATE TABLE wishlist(
id INT AUTO_INCREMENT PRIMARY KEY,
talent_email VARCHAR(255),
opportunity_id INT,
status ENUM('interested', 'applied', 'rejected','successful') DEFAULT 'interested',
FOREIGN KEY (talent_email) REFERENCES talents(email) ,
FOREIGN KEY (opportunity_id) REFERENCES opportunities(id)
);

CREATE TABLE refferals(
id INT AUTO_INCREMENT PRIMARY KEY,
talent_email VARCHAR(255),
referee_name VARCHAR(255),
referee_email VARCHAR(255),
referee_phone VARCHAR(20),
relationship VARCHAR(255),
description TEXT,
attachment_url VARCHAR(255),
FOREIGN KEY (talent_email) REFERENCES talents(email)
);