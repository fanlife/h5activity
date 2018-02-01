(function(){
    // 慢 -> 快 -> 慢
    $.squaredLotteryRoll({
        rollWrapSelector: "#J_lottery_container_1",
        prizeIndex: 1,
        isDefaultClickFn: true,
        rollBtnSelector: "#J_btn_start_1",
        succCallback: function() {
            alert("抽奖成功");
        }
    });


    // 快 -> 慢
    $("#J_btn_start_2").on("click", function(){
        $("#J_lottery_container_2").addClass("mode-2");

        $.squaredLotteryRoll({
            speed: 39,
            rollWrapSelector: "#J_lottery_container_2",
            prizeIndex: 6,
            isDefaultClickFn: false,
        })
    })
})();