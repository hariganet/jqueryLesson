/**
 * fadechanger
 * 
 * @category    jQuery plugin
 * @license     http://www.opensource.org/licenses/mit-license.html  MIT License
 * @copyright   2010 RaNa design associates, inc.
 * @author      keisuke YAMAMOTO <keisukey@ranadesign.com>
 * @link        http://kaelab.ranadesign.com/
 * @version     1.0
 * @date        2011-06-21
 *
 * 要素をフェードで切り替えていくプラグイン。
 *
 * [ver.1.0]
 * 最前面(末尾)の要素をfadeOutさせたのち、最背面(先頭)へ移動させ、show()している。その繰り返し。
 * CSSは特に指定していないので、同じ場所で切り替える場合は、position: absoluteなどで重ねておく必要あり。
 *
 * [実行方法]
 * $(parent-element).fadechanger({ selector: child-element });
 *
 * [オプション]
 * speed: 切り替えにかける時間をミリ秒で指定。初期値は2000。
 * wait: 次の切替までの待ち時間をミリ秒で指定。初期値は2000。
 * selector: 要素内のどの子要素を切り替えるかを指定する。
 *           省略した場合は、すべての子要素が対象となる。
 *           例）{ selector: ".opened" }とした場合は、openedというクラス名を持った子要素のみが対象となる。
 * loop: 切替のループ回数を数値で指定。初期値は"infinite"（無限）。
 *
 */
(function($) {

	/**
	 * fadechanger
	 */
	$.fn.fadechanger = function(options) {
		var self = this,
			config = $.extend({
				speed: 2000,
				wait: 2000,
				selector: "",
				loop: "infinite"
			}, options),
			count = self.find(config.selector).length;

		if (typeof config.loop === "number") {
			count *= config.loop;
		}

		self.find(config.selector).show();
		(function() {
			var arg = arguments;
			if (typeof config.loop === "number" && --count < 1) {
				return false;
			}
			self.find(config.selector).eq(-1).delay(config.wait).fadeOut(config.speed, function() {
				$(this).prependTo($(this).parent()).show();
				arg.callee();
			});
		})();

		return this;
	};

})(jQuery);
