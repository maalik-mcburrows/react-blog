const db = require('./conn');

class blogModel {
    constructor(id, title, name, entry, userid) {
        this.id = id;
        this.title = title;
        this.name = name;
        this.entry= entry;
        this.userid = userid;
    }

    static async getAllBlogData() {
        try {
            const response = await db.any(`SELECT * FROM blog;`);
            console.log(response);
            return response;
        } catch(error) {
            console.log('ERROR: ', error)
        }
    }

    static async getSingleBlog(id) {
        try {
            const response = await db.any(`SELECT * FROM blog WHERE id = $1`, id)
            console.log(response);
            return response;
        } catch(error) {
            console.log('ERROR: ', error)
        }
    }

    static async getBlogComments(id) {
        try {
            const response = await db.any(`SELECT * FROM comments WHERE blogid = $1`, id)
            console.log(response);
            return (response);
        } catch(error) {
            console.log('ERROR: ', error);
        }
    }

    

};

module.exports = blogModel;
