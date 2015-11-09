// Tank Body - Slide Out Menu
(function() {
  'use strict';

  $.extend({
    SlideOut: function(options) {
      var slideOutButton = $('<button class="slide-out-button"></button>');
      var slideOut = '<slideout><section></section></slideout>';
      $('body').prepend(slideOut);
      $('body').append(slideOutButton);
      // Get Slide Out & Slide Out button:
      var slideout = $('slideout');
      var slideOutBtn = $('button.slide-out-button');

      // Set up state for Slide Out and screens:
      slideout.attr('aria-hidden', true);
      $("screens").attr('aria-hidden', true);
      $("screens").eq(0).addClass('show').attr('aria-hidden', "false");

      // Handle Slide Out button events:
      slideOutBtn.on('tap', function() {
        $(this).toggleClass('focused');
        slideout.toggleClass('open');
        if (slideout.attr('aria-hidden') === "true") {
          slideout.attr('aria-hidden', "false");
          $('button.back').removeProp('disabled');
          $('button.backTo').removeProp('disabled');
        } else {
          slideout.attr('aria-hidden', true);
          $('button.back').prop('disabled', true);
          $('button.backTo').prop('disabled', true);
        }
      });

      $('slideout').on('tap', 'li', function() {
        var routes = $(this).attr('data-show').split('/');
        var fullRoute = $.TruckRoutes.getFullRoute();
        var menuItems = slideout.find('li[data-show]');

        // Toggle Slide Out button:
        slideOutBtn.toggleClass('focused');

        // This list item shows a single screen:
        menuItems.hazClass('selected').removeClass('selected');
        $.screens.hazClass('show').removeClass('show').attr('aria-hidden', true);
        var screenToShow = $(this).attr('data-show');
        $('#' + screenToShow.split(':')[0]).addClass('show').attr('aria-hidden', false);
        $('screen.current').addClass('next').removeClass('current');
        $('screen.previous').addClass('next').removeClass('previous');
        // Get route to dispatch:
        $.Router.dispatch(screenToShow);



        // Close slide out:
        slideout.removeClass('open');
      });

      return {
        populate: function(options) {
          var slideout = $('slideout');
          if (!slideout[0]) return;
          if (!options) {
            return;
          } else {
            slideout.find('section').append('<ul class="list"></ul>');
            var list = slideout.find('ul');
            options.forEach(function(ctx) {
              for (var key in ctx) {
                if (key === 'header') {
                  list.append('<li class="menu-header"><h2>' + ctx[key] + '</h2></li>');
                } else {
                  list.append('<li data-show="' + key + '"><h3>' + ctx[key] + '</h3></li>');
                }
              }
            });
            slideout.find('li').eq(0).addClass('selected');
          }
        }
      };
    }
  });
})();