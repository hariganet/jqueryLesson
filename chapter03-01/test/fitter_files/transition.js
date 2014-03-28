/**
 * transition
 * 
 * @category    jQuery plugin
 * @license     http://www.opensource.org/licenses/mit-license.html  MIT License
 * @copyright   2010 RaNa design associates, inc.
 * @author      keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link        http://kaelab.ranadesign.com/
 * @version     1.0
 * @date        2011-06-17
 *
 * ページ遷移時にトランジション効果を付ける。
 *
 * [オプション]
 * selector: 効果を付ける要素を指定。初期値は"body"。
 *
 */
(function($) {

	/**
	 * transition
	 */
	$.fn.transition = function(options) {
		var self = this,
			defaults = {
				selector: "body"
			},
			config = $.extend({}, defaults, options),
			href = this.attr("href");

		this.click(function(event) {
			$(config.selector).animate({
				opacity: 0
			}, {
				duration: 2000,
				complete: function() {
					location.href = href;
					$(window).unload($.noop);
				}
			});
			event.preventDefault();
		});

		return this;
	};
	
})(jQuery);
