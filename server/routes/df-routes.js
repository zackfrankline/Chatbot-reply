const chatbot = require("../chatbot-reply/bot-reply");

module.exports = (app) => {
  app.post("/dfUserText", async (req, res) => {
    console.log("aa gaya message!");
    let { message } = req.body;
    console.log(message);
   
  });

  app.post("/textQuery", async (req, res) => {
    // console.log(req.body.text);
    // const text = req.body.text;

    const {message}=req.body
   

    const resultQuery = await chatbot.textQuery(message);
    console.log(`  Query: ${resultQuery.queryText}`);
    console.log(`  Response: ${resultQuery.fulfillmentText}`);
    res.send(resultQuery.fulfillmentText);
  });

  //  app.post("/eventQuery", (req, res) => {
  //    console.log(req);

  //  });
};
