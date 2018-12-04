/*var outputArea = $("#chat-output");
var apigClient = apigClientFactory.newClient({
    region: 'us-east-1',
    apiKey: 'chatbot-api-key135908642-comse6998'
});


$("#user-input-form").on("submit", function (e) {
 outputArea.append("in the click function\n");
  e.preventDefault();
  var message = $("#user-input").val();
  var body = {
      "message": "hello"
  };

  var additionalParams = {
      "headers": {
          "Content-Type":"application/json"
      }
  };
  apigClient.chatbotPost(body, body, {})
    .then(function(result){
        outputArea.append("success\n");
        
    }).catch( function(result){
        outputArea.append('error: ' + JSON.stringify(result));
        outputArea.append("\n    <div class='bot-message'>\n      <div class='message'>\n        " +
        "Sorry, didn't catch that." + "\n      </div>\n    </div>\n  ");
    });

    outputArea.append("end function");
});*/

window._config = {
    cognito: {
        userPoolId: 'us-east-1_tMbAsKDqH', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '3irit69mla4764k1n2enangiht', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'us-east-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function (e) {
  e.preventDefault();
  var message = $("#user-input").val();
  outputArea.append("\n    <div class='bot-message'>\n      <div class='message'>\n        " +
        message + "\n      </div>\n    </div>\n  ");
  var apigClient = apigClientFactory.newClient({
    region: 'us-east-1',
    apiKey: 'chatbot-api-key135908642-comse6998'
  });

  var body = {
      "message": message
  };
  
  apigClient.chatbotPost({}, body, {})
    .then(function(result){
        outputArea.append("\n    <div class='user-message'>\n      <div class='message'>\n        " +
        result.data.greeting + "\n      </div>\n    </div>\n  ");
        $("#user-input").val("");
    }).catch( function(result){
        outputArea.append('error: ' + JSON.stringify(result));
        
    });
});