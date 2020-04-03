const db = require('./conn');

class blogModel {
    constructor(title, name, entry, userid) {
        this.title = title;
        this.name = name;
        this.entry= entry;
        this.userid = userid;
    }

    static async getAllBlogPosts() {
        try {
            const response = await db.any('SELECT * FROM blog;');
            const data = await response.json()
            console.log(data);
            return data;
        } catch(error) {
            console.log('ERROR: ', error)
        }
    }
};

module.exports = blogModel;
