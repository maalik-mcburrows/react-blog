CREATE DATABASE coronablog;

CREATE TABLE users (id serial PRIMARY KEY, first_name text, last_name text, entryid int REFERENCES blog(id));

INSERT INTO users (first_name, last_name, entryid) VALUES ('Maalik', 'McBurrows', 1);


CREATE TABLE blog (id serial PRIMARY KEY,
                                        name text NOT NULL,
                                                  title varchar, entry varchar, userid int REFERENCES users(id));

INSERT INTO blog (name, title, entry, userid) 
VALUES ('Maalik', '04-02', 'Super boring, but at least I have code, twitter, and PS4 lol', 1);

CREATE TABLE comments (id serial PRIMARY KEY,
                                        first_name text NOT NULL,
                                                  last_name text, text varchar, blogid int REFERENCES blog(id));
                                            
INSERT INTO comments (first_name, last_name, text, blogid) VALUES ('Ya', 'Boi', 'Great Comment', 1);




