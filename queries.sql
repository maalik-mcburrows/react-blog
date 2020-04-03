-- I left many of the foreign key constraints blank for the fact that while constructing the database some of the primary keys 
-- have not been generated yet, I'd reccomend just going back after you create the database and updating those fields with their official corresponding values.

CREATE DATABASE coronablog;

CREATE TABLE users (id serial PRIMARY KEY, first_name text, last_name text, entryid int REFERENCES blog(id));

INSERT INTO users (first_name, last_name, entryid) VALUES ('Maalik', 'McBurrows', null);
INSERT INTO users (first_name, last_name, entryid) VALUES ('Coronita', 'Virusia', null);


CREATE TABLE blog (id serial PRIMARY KEY,
                                        name text NOT NULL,
                                                  title varchar, entry varchar, userid int REFERENCES users(id));
INSERT INTO blog (name, title, entry, userid) 
VALUES ('Maalik', '04-02', 'Super boring, but at least I have code, twitter, and PS4 lol', null);
INSERT INTO blog (name, title, entry, userid) 
VALUES ('Coronita Virusia', '04-03', 'I have been able to travel the world for free, I am more cultured because of this great experience :)', null);


CREATE TABLE comments (id serial PRIMARY KEY,
                                        first_name text NOT NULL,
                                                  last_name text, text varchar, blogid int REFERENCES blog(id));                                      
INSERT INTO comments (first_name, last_name, text, blogid) VALUES ('Ya', 'Boi', 'Great Comment', null);
INSERT INTO comments (first_name, last_name, text, blogid) VALUES ('Coronita', 'Virusia', '@ me next time bro', null);




