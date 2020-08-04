var questions=["What type of people do you think would most benefit from our product?",
    "What is the main benefit you receive from us?",
    "How can we improve this product for you?"];

 exports.view_all_questions= (req, res, next) => {
    res.send(questions);
 }