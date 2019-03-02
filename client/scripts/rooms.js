var Rooms = {
    returnRoom: function(arrOfObjs) {
        console.log("in the return room function")
        for (let obj of arrOfObjs) {
            if (obj.roomname) {;
                if (obj.roomname.includes("<script>")) {
                    obj.roomname = 'General';
                }
                RoomsView.renderRoom(obj.roomname);
            }
        }
    }
    
};