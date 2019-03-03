var Rooms = {
    returnRoom: function(arrOfObjs) {
        for (let obj of arrOfObjs) {
            if (obj.roomname) {
                RoomsView.renderRoom(obj.roomname);
            }
        }
    },

    add: function(roomName) {
        
    }
};