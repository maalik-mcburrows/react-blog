const db = require('./conn');

class blogModel {
    constructor(title, name, entry, userid) {
        this.title = title;
        this.name = name;
        this.entry= entry;
        this.userid = userid;
    }

    static async getAllBlogData() {
        try {
            const response = await db.any(`SELECT * FROM blog INNER JOIN comments ON blogid = blog.id;`);
            console.log(response);
            return response;
        } catch(error) {
            console.log('ERROR: ', error)
        }
    }

};

module.exports = blogModel;
