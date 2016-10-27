INSERT INTO users (username, password) VALUES('justin', 'testing');
INSERT INTO users (username, password) VALUES('lydia', 'testing');

INSERT INTO resources (urls, type, topic) VALUES('http://http://eloquentjavascript.net/', 'link', 'javascript');
INSERT INTO resources (urls, type, topic) VALUES('https://www.codeschool.com/learn/javascript', 'link', 'javascript help');
INSERT INTO resources (urls, type, topic) VALUES('https://www.npmjs.com/', 'link', 'npm find package help');
INSERT INTO resources (urls, type, topic) VALUES('https://www.youtube.com/watch?v=zHykHw9JlhE', 'video', 'express routing');
INSERT INTO resources (urls, type, topic) VALUES('https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4', 'link', 'express routing');
INSERT INTO resources (urls, type, topic) VALUES('https://jqueryui.com/show/', 'link', 'jQuery show function');
INSERT INTO resources (urls, type, topic) VALUES('http://expressjs.com/en/api.html#req.cookies', 'link', 'express cookie set');
INSERT INTO resources (urls, type, topic) VALUES('http://expressjs.com/en/api.html#req.cookies', 'link', 'express cookie set');
INSERT INTO resources (urls, type, topic) VALUES('http://expressjs.com/en/api.html#req.cookies', 'link', 'express cookie set');


INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(1, 1, 'true', 3);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(1, 1, 'true', 3);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(1, 1, 'true', 3);
INSERT INTO user_activity (userID, resourcesID, likes, ratings) VALUES(1, 1, 'true', 3);

INSERT INTO comments (userID, resourcesID, comment) VALUES(1, 1, 'this is great!');


