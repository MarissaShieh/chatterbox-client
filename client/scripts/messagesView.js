var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
   Parse.readAll((data)=>{Messages.returnEachMessage(data.results)});
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }

};
