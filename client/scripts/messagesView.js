var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
   Parse.readAll((data)=>{console.log(data)});
   //send data to message
   //$chats.children.
   //console.log($.ajax.args[0][0].success);
  },

  renderMessage: function(message) {
    //template the messages
    console.log(MessageView.render(message));
    this.$chats.append(MessageView.render(message));
    console.log(this.$chats)
  }

};
