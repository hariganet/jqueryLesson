/**
 * imgloader
 * 
 * @category    jQuery plugin
 * @license     http://www.opensource.org/licenses/mit-license.html  MIT License
 * @copyright   2010 RaNa design associates, inc.
 * @author      keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link        http://kaelab.ranadesign.com/
 * @version     1.0
 * @date        2011-06-21
 *
 * 画像の読み込みと生成を行い、完了またはタイムアウトを確認してからコールバックに設定した処理を行う。
 *
 * [オプション]
 * imglist: (Array) 画像のsrcに指定するパスを配列形式で指定。
 * callback: (function) コールバック処理を関数形式で指定。
 * timeout: (Number) タイムアウトをミリ秒で指定。省略時はタイムアウトしない。
 *
 */
(function($) {

	/**
	 * imgloader
	 */
	$.fn.imgloader = function(options) {
		var self = this,
			config = $.extend({
				imglist: [],
				callback: $.noop,
				timeout: 0
			}, options),
			images = [],
			count = config.imglist.length,
			start = new Date();

		for (var i = config.imglist.length; i-- > 0;) {
			var img = new Image();
			img.src = config.imglist[i];
			img.onload = function() {
				if (--count < 1) {
					($.proxy(config.callback, self))();
				}
			};
			self.append(img);
			images.push(img);
		}

		if (config.timeout) {
			setTimeout(function() {
				if (new Date() - start > config.timeout) {
					($.proxy(config.callback, self))();
				} else {
					setTimeout(arguments.callee, 500);
				}
			}, 500);
		}

		return this;
	};

})(jQuery);
