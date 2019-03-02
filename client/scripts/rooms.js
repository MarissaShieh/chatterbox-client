var Rooms = {
    returnRoom: function(arrOfObjs) {
        console.log("in the return room function")
        for (let obj of arrOfObjs) {
            if (obj.roomname) {
                RoomsView.renderRoom(obj.roomname);
            }
            continue;
        }
    }
    
};