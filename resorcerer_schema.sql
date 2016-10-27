CREATE TABLE users (
  userID BIGSERIAL PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(50)
);
CREATE TABLE resources (
  resourcesID BIGSERIAL PRIMARY KEY,
  urls VARCHAR(50),
  type VARCHAR(50),
  topic VARCHAR(50)
);
CREATE TABLE user_activity (
  usersID INT NOT NULL REFERENCES users(userID) ON DELETE CASCADE,
  resourcesID INT NOT NULL REFERENCES resources(resourcesID) ON DELETE CASCADE,
  likes BOOLEAN DEFAULT '0', 
  ratings INT DEFAULT '0'
);
CREATE TABLE comments (
  commentsID BIGSERIAL PRIMARY KEY,
  userID INT NOT NULL REFERENCES users(userID) ON DELETE CASCADE,
  resourcesID INT NOT NULL REFERENCES resources(resourcesID) ON DELETE CASCADE,
  comment VARCHAR(255)

);