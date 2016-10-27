INSERT INTO users (username, password) VALUES('justin', 'testing');
INSERT INTO users (username, password) VALUES('lydia', 'testing');

INSERT INTO resources (urls, type, topic) VALUES('http://http://eloquentjavascript.net/', 'link', 'javascript');
INSERT INTO resources (urls, type, topic) VALUES('https://www.codeschool.com/learn/javascript', 'link', 'javascript help');
INSERT INTO resources (urls, type, topic) VALUES('https://www.npmjs.com/', 'link', 'npm find package help');
INSERT INTO resources (urls, type, topic) VALUES('https://www.youtube.com/watch?v=zHykHw9JlhE', 'video', 'express routing');
INSERT INTO resources (urls, type, topic) VALUES('https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4', 'link', 'express routing');
INSERT INTO resources (urls, type, topic) VALUES('https://jqueryui.com/show/', 'link', 'jQuery show function');
INSERT INTO resources (urls, type, topic) VALUES('https://nodejs.org/en/download/', 'link', 'express cookie set');
INSERT INTO resources (urls, type, topic) VALUES('http://knexjs.org/#Builder-select', 'link', 'express cookie set');
INSERT INTO resources (urls, type, topic) VALUES('http://expressjs.com/en/api.html#req.cookies', 'link', 'express cookie set');
INSERT INTO resources (urls, type, topic) VALUES('http://giphy.com/gifs/nba-basketball-76ers-3o6Zt2IKY2uZQ5YFG0', 'picture', 'basketball gif');


INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(1, 1, 'true', 3);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(2, 2, 'false', 4);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(3, 3, 'false', 1);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(3, 4, 'true', 1);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(2, 5, 'true', 3);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(3, 6, 'false', 5);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(2, 7, 'true', 2);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(1, 8, 'true', 2);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(1, 9, 'true', 5);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(3, 10, 'true', 5);

INSERT INTO comments (userID, resourcesID, comment) VALUES(1, 1, 'this is great!');
INSERT INTO comments (userID, resourcesID, comment) VALUES(2, 2, 'Really good resource for JS');
INSERT INTO comments (userID, resourcesID, comment) VALUES(1, 3, 'ok advice on how to dl npm');
INSERT INTO comments (userID, resourcesID, comment) VALUES(2, 4, 'v.good vid on ejs');
INSERT INTO comments (userID, resourcesID, comment) VALUES(3, 5, 'Scoth IO is da best!!!!!');
INSERT INTO comments (userID, resourcesID, comment) VALUES(2, 6, 'I hate jquery but this is a great overview');
INSERT INTO comments (userID, resourcesID, comment) VALUES(1, 7, 'Not sure what the documentation says.');
INSERT INTO comments (userID, resourcesID, comment) VALUES(1, 8, 'Not a fan...');
INSERT INTO comments (userID, resourcesID, comment) VALUES(2, 9, 'Good explanation of EJS');
INSERT INTO comments (userID, resourcesID, comment) VALUES(1, 10, 'unreal #kobe');
INSERT INTO comments (userID, resourcesID, comment) VALUES(3, 9, 'Good explanation of EJS');


