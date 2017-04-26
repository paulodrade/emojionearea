define([
    'jquery',
    'function/trigger',
    'function/emojioneReady',
    'prototype/var/EmojioneArea'
],
function($, textFromHtml, EmojioneArea) {
  EmojioneArea.prototype.enable = function () {
      var self = this;
      var editor = self[(self.standalone) ? "button" : "editor"];
      emojioneReady(function () {
          editor.prop('contenteditable', true);
          editor.parent().css('opacity', 1);
          editor.parent().removeClass('emojionearea-disable');
          trigger(self, 'enable', [editor]);
      });
      return self;
  }
});
