var Messages = {
    returnEachMessage: function(arrOfObjs) {
        for (let obj of arrOfObjs) {
            console.log(obj);
            if(obj.text){
                if (!obj.roomname) {
                    obj.roomname = 'general';
                }
                MessagesView.renderMessage(obj);
            }
            continue;
        }
    }
};