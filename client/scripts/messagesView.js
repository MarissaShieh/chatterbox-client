var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
   Parse.readAll((data)=>{Messages.returnEachMessage(data.results)});
  },

  renderMessage: function(message) {
    //template the messages
    console.log(MessageView.render(message));
    this.$chats.append(MessageView.render(message));
    console.log(this.$chats)
  }

};
