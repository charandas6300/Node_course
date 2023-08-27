const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/testDatabase`)
    .then(() => console.log("connection is successful"))
    .catch(err => console.error('couldn\'t connect to mongodb', err));

const { Schema, model } = mongoose;

const courseSchema = new Schema({
    name: {type:String, default:""},
    creator: {type:String, default:"null"},
    publishedDate: { type: Date, default: Date.now },
    isPublished: {type:Boolean, default:false},
    rating: {type:Number, default:0}
});

const Course = model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'js',
       
        isPublished: true,
        rating: 3
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses = await Course.find({ creator: 'josh' }).select({ name: 1, publishedDate: 1 });
    console.log(courses);
}

// Remove createCourse() from here

// Export the getCourses function to make it accessible from the HTML

module.exports = createCourse();
