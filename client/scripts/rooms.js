var Rooms = {
    returnRoom: function(arrOfObjs) {
        for (let obj of arrOfObjs) {
            if (obj.roomname) {;
                if (obj.roomname.includes("<script>")) {
                    obj.roomname = 'General';
                }
                RoomsView.renderRoom(obj.roomname);
            }
        }
    },

    add: function(roomName) {
        
    }
};