const mongoose = require('mongoose');
const { Schema } = require('mongoose');
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Course = new Schema(
    {
        image: { type: String },
        name: { type: String },
        description: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        level: { type: String },
        videoId: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
