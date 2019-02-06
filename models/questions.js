const mongoose = require("mongoose");
let sortAnswers = function(a, b){
    if(a.votes === b.votes){
        return b.updatedAt - a.updatedAt;
    }
    return b.votes - a.votes;
}
const questionSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            // createdAt: Date,
            // answers:[]
        },
        answer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Answer"
        }
    },
    {
        timestamps: true
    }
);

questionSchema.pre("save", function(next){
    this.answers.sort(sortAnswers);
    next();
})

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;