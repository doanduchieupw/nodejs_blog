const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: 'string', default: '' },
        desc: { type: 'string', maxLength: 600 },
        img: { type: 'string', minLength: 10 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: 'string', unique: true },
        level: { type: 'string' },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
