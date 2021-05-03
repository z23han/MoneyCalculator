"use strict";

module.exports = {

    getMonthlyWithdraw: function(req, res) {

        try {

            var balance = parseFloat(req.body.balance);
            var rate = parseFloat(req.body.rate);
            var months = parseInt(req.body.months);
            var deposit = parseInt(req.body.deposit);

            var total = balance;
            
            for (var i = 1; i <= months; ++i) {
                total = (1 + rate / 100) * total;

                if (i % 12 == 0) {
                    total += deposit;
                }
            }

            var withdraw = 0
            for (var i = 0; i < months; ++i) {
                withdraw += (1 + rate / 100)**i;
            }

            var result = total / withdraw;
            console.log(result);

            return res.json({
                success: true, 
                result: result
            });

        } catch (err) {
            console.log(err);
            return res.json({
                success: false, 
                msg: err
            });
        }
    }
}