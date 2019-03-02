var Messages = {
    returnEachMessage: function(arrOfObjs) {
        for (let obj of arrOfObjs) {
            if(obj.text){
                MessagesView.renderMessage(obj);
            }
            continue;
        }
    }
};