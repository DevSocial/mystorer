
 //= require jquery
 //= require jquery.ui.all
 //= require jquery_ujs
 
 //= require_tree ./elfinder

$(function() {
  var rails_csrf = {};
  rails_csrf[$('meta[name=csrf-param]').attr('content')] = $('meta[name=csrf-token]').attr('content');

  $('#elfinder').elfinder({
    lang: 'en',
    height: '600',
    url: '/elfinder',
    transport : new elFinderSupportVer1(),
    customData: rails_csrf,
  });
});
