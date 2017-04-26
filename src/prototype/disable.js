define([
    'jquery',
    'function/trigger',
    'function/emojioneReady',
    'prototype/var/EmojioneArea'
],
function($, textFromHtml, EmojioneArea) {
  EmojioneArea.prototype.disable = function () {
      var self = this;
      var editor = self[(self.standalone) ? "button" : "editor"];
      emojioneReady(function () {
          editor.prop('contenteditable', false);
          editor.parent().addClass('emojionearea-disable');
          trigger(self, 'disable', [editor]);
      });
      return self;
  }
});
