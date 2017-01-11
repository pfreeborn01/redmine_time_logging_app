/**
 * jQuery Maxlength plugin
 * @version		$Id: jquery.maxlength.js 18 2009-05-16 15:37:08Z emil@anon-design.se $
 * @package		jQuery maxlength 1.0.5
 * @copyright	Copyright (C) 2009 Emil Stjerneman / http://www.anon-design.se
 * @license		GNU/GPL, see LICENSE.txt
 */(function(e){e.fn.maxlength=function(t){var n=jQuery.extend({events:[],maxCharacters:10,status:!0,statusClass:"status",statusText:"character left",notificationClass:"notification",showAlert:!1,alertText:"You have typed too many characters.",slider:!1},t);return e.merge(n.events,["keyup"]),this.each(function(){function i(){var e=n.maxCharacters-r;e<0&&(e=0),t.next("div").html(e+" "+n.statusText)}function s(){var e=!0;r>=n.maxCharacters?(e=!1,t.addClass(n.notificationClass),t.val(t.val().substr(0,n.maxCharacters)),o()):t.hasClass(n.notificationClass)&&t.removeClass(n.notificationClass),n.status&&i()}function o(){n.showAlert&&alert(n.alertText)}function u(){var e=!1;return t.is("textarea")?e=!0:t.filter("input[type=text]")?e=!0:t.filter("input[type=password]")&&(e=!0),e}var t=e(this),r=e(this).val().length;if(!u())return!1;e.each(n.events,function(e,n){t.bind(n,function(e){r=t.val().length,s()})}),n.status&&(t.after(e("<div/>").addClass(n.statusClass).html("-")),i());if(!n.status){var a=t.next("div."+n.statusClass);a&&a.remove()}n.slider&&(t.next().hide(),t.focus(function(){t.next().slideDown("fast")}),t.blur(function(){t.next().slideUp("fast")}))})}})(jQuery);