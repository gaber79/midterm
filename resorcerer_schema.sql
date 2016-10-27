DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS user_activity;
DROP TABLE IF EXISTS resources;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  userID BIGSERIAL PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(50)
);
CREATE TABLE resources (
  resourcesID BIGSERIAL PRIMARY KEY,
  urls VARCHAR(100),
  type VARCHAR(50),
  topic VARCHAR(50)
);
CREATE TABLE user_activity (
  userID INT REFERENCES users ON DELETE CASCADE,
  resourcesID INT REFERENCES resources ON DELETE RESTRICT,
  likes BOOLEAN DEFAULT '0', 
  ratings INT DEFAULT '0',
  PRIMARY KEY (userID, resourcesID)
);
CREATE TABLE comments (
  commentsID BIGSERIAL PRIMARY KEY,
  userID INT NOT NULL REFERENCES users(userID) ON DELETE CASCADE,
  resourcesID INT NOT NULL REFERENCES resources(resourcesID) ON DELETE CASCADE,
  comment VARCHAR(255)

);