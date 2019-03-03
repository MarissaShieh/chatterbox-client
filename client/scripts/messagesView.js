var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
   Parse.readAll((data)=>{
     Messages.returnEachMessage(data.results);
     setInterval(MessagesView.initialize,5000);
    });
  },

  renderMessage: function(message) {
    //debugger;
    this.$chats.append(MessageView.render(message));
  }

};
