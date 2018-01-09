$.fn.extend({
    snow: function (options) {
        /* *
        * amount:雪花数量
        * src:雪花图片路径
        * type:straight表示直线落下 默认随机
        * speed:雪花速度倍数 0.5表示0.5倍速
        */
        var settings = $.extend(true, {}, options);
        var obj = $(this)[0];
        if (!obj){ return; }
        var amount = parseInt(settings.amount) || 50;
        var img = new Image();
        img.src = settings.src ? settings.src : './images/snow.png';
        var dotArr = [];
        obj.width = obj.offsetParent.offsetWidth;
        obj.height = obj.offsetParent.offsetHeight;
        var ctx = obj.getContext('2d');
        var type = settings.type == "straight" ? "straight":"random";
        var speed = parseInt(settings.speed) || 0.2;
        if (type == "straight" ){
            for (var i = 0; i < amount; i++) {
                dotArr.push({
                    r: rnd(1, 3),
                    x: rnd(0, obj.width - 10),
                    y: rnd(0, obj.height - 10),
                    sx: -3 * speed,
                    sy: 3 * speed
                });
            }
        }else{
            for (var i = 0; i < amount; i++) {
                dotArr.push({
                    r: rnd(1, 3),
                    x: rnd(0, obj.width - 10),
                    y: rnd(0, obj.height - 10),
                    sx: -rnd(3, 7) * speed,
                    sy: rnd(3, 7) * speed
                });
            }
        }
        
        img.onload = function () {
            setInterval(function () {
                ctx.clearRect(0, 0, obj.width, obj.height);

                for (var i = 0; i < dotArr.length; i++) {
                    var dot = dotArr[i];

                    ctx.beginPath();
                    var x = dot.x;
                    var y = dot.y;
                    var r = dot.r;
                    var sx = dot.sx;
                    var sy = dot.sy;
                    ctx.drawImage(img, x, y, r * 10, r * 10);
                    dot.x += sx;
                    dot.y += sy;
                    if (dot.x > obj.width - 4 || dot.x < 0) {
                        dot.x = obj.width - 10;
                    }

                    if (dot.y > obj.height - 4 || dot.y < 0) {
                        dot.y = 0;
                    }

                    ctx.fill();
                }
            }, 16);
        }

        function rnd(n, m) {
            return parseInt(Math.random() * (m - n) + n)
        }
    }
});


