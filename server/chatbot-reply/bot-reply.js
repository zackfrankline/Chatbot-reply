const dialogflow = require("@google-cloud/dialogflow");
const config=require("../config/dev.keys")

const projectId=config.googleProjectID;
const sessionId=config.dialogFLowSessionID;




const sessionClient = new dialogflow.SessionsClient();



const textQuery = async(userText)=>{

    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: userText,
          // The language used by the client (en-US)
          languageCode: "en-US",
        },
      },
    };

    try{
          const responses = await sessionClient.detectIntent(request);
        //   console.log(responses)
          const result=responses[0].queryResult;
           
          return result
    }
    catch(err){
        // console.log(err)
        console.log("error aaya bhai ")
        console.log(err)
        return err
        
    }




}



module.exports={
    textQuery
}