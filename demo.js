(function() {
    var options = {
        splitter: 'char'      //如果用户没设置参数，此为默认设置
    };

    var api = {
        config: function(opts) {
            if (!opts) return options;

            for (var key in opts) {
                options[key] = opts[key];
            }
            return this;      //方便链式调用
        },

        listen: function listen(elem){
            if(typeof elem === 'string'){
                console.log("------->>",elem);
                var elems=document.querySelectorAll(elem);
                var len=elems.length;
                while(len--){
                    listen(elems[len]);
                }
                return;
            }
            injector(elem, options.splitter);
            return this;      //同样是方便链式调用
        }
    };

    var getRandomColor = function(){
	  return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
  };

    function injector(target,splitter){
        var text = target.textContent,
        sText,
        after,
        inject='';
        if(splitter == 'char'){
            sText=text.split('');
            after='';
        }else if(splitter == 'word'){
            sText = text.split(' ');
            after=' ';
        }
        if(sText.length){
            for(var i=0;i<sText.length;i++){
                var font_color = getRandomColor();
                inject += '<span style="color:'+font_color+'">'+sText[i]+'</span>'+after;
            }
            target.innerHTML=inject;
        }
    }
    this.ColorDivide=api;
})();