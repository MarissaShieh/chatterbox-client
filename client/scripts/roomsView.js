var RoomsView = {
  existingRooms: [],
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readAll((data)=>{Rooms.returnRoom(data.results)})
  },

  renderRoom: function(roomName) {
    if(!this.existingRooms.includes(roomName)){
      this.existingRooms.push(roomName);
      this.$select.append(`
      <option onchange="function(this.innerHTML)"=> ${roomName} </option>
      `);
    }
  }

  // addRoom: function() {
  //       this.
  // }
};
