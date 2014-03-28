/**
 * fitter
 * 
 * @category    jQuery plugin
 * @license     http://www.opensource.org/licenses/mit-license.html  MIT License
 * @copyright   2010 RaNa design associates, inc.
 * @author      keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link        http://kaelab.ranadesign.com/
 * @version     1.0
 * @date        2011-06-17
 *
 * 画像をウィンドウにフィッティングさせるプラグイン。
 *
 * [ver.1.0]
 * リサイズイベント発生時に要素内の画像サイズをウィンドウサイズに合わせて変更する。
 * 最小サイズを指定しておけば、それより小さくはならない。
 *
 * [オプション]
 * width: 画像の初期横幅
 * height: 画像の初期縦幅
 * minWidth: 最小横幅
 * minHeight: 最小縦幅
 * selector: フィッティングさせる要素を指定する。初期値は"img"。
 *
 */
(function($) {

	/**
	 * fitter
	 */
	$.fn.fitter = function(options) {
		var self = this,
			defaults = {
				width: 600,
				height: 400,
				minWidth: 600,
				minHeight: 400,
				selector: "img"
			},
			config = $.extend({}, defaults, options);

		// resize
		$(window).resize(function() {
			var w = $(window).width(),
				h = $(window).height();

			// 最小サイズ設定
			if (w < config.minWidth || h < config.minHeight) {
				return false;
			}

			// IE 6
//			if ($.browser.msie && $.browser.version < 7) {
//				self.width(w).height(h);
//			}

			// 画像サイズ変更。後ろはIE用
			if (w / h > config.width / config.height) {
				self.find(config.selector).width(w).height(w * config.height / config.width);
			} else {
				self.find(config.selector).height(h).width(h * config.width / config.height);
			}

		}).resize();

		return this;
	};

})(jQuery);
