function sendEmail(From,To,Name,Email,Contact,SubmissionType,BodyofMessage)
{
    console.log("sendEmail Entry");
    var subject = "";
    if(SubmissionType.toLowerCase()=="feedback")
        subject="Feedback received";
    else if(SubmissionType.toLowerCase()=="complaint")
        subject="Complaint received";
    else if(SubmissionType.toLowerCase()=="ask")
        subject="Ask here";
    else 
        subject="Query received";

    var jsonData = JSON.stringify({
        "from":From,
        "to":To,
        "subject":subject,
        "email": Email,
        "name": Name,
        "contact": Contact,
        "body":BodyofMessage,
        "submissionType":SubmissionType
    });

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "https://prod-06.westeurope.logic.azure.com/workflows/baaed420a437449c95f5616dca04a775/triggers/manual/paths/invoke/Send?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=qN1nw71VIApYkJIKLl8xLT4yCF0j3AtnwqRd9g474V0",
        dataType: "json",
        data: jsonData,
        success: function (data) {
           console.log(data); 
           
        }
    });
    console.log("sendEmail Exit");
}