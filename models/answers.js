const mongoose = require("mongoose");


const answerSchema = new mongoose.Schema({
    
    text: {
        type: String,
        timestamps: true,
        // createdAt:{type: Date, default: Date.now},
        updatedAt:{type: Date, default:Date.now},
        votes: {types: Number, default:0}



    }
    // messages: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Message"
    //     }
    // ]
});

answerSchema.method("update", function(updates, callback){
    Object.assign(this, updates, {updatedAt: new Date()});
    this.parent().save(callback);
});

answerSchema.method("vote", function (vote, callback) {
    if(vote === "up"){
        this.votes += 1;
    } else {
        this.votes -= 1;
    }
    this.parent().save(callback);
});


const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;