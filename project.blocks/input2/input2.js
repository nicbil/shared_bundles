modules.define('input2', ['i-bem-dom'], function(provide, bemDom) {
	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function(){
					console.log('2in');
				},
			}
		}
	}))
});