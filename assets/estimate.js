(function () {
    'use strict';
    window.addEventListener('load', function () {
        var customers_input = document.querySelector('#customers'),
            num_customers =   document.querySelector('#num_customers'),
            hours_input =     document.querySelector('#hours'),
            num_hours =       document.querySelector('#num_hours'),
            total_field =           document.querySelector('#total');
        customers_input.value = 1;
        num_customers.innerHTML = 50;
        hours_input.value = 2;
        num_hours.innerHTML = 2;
        customers_input.addEventListener('change', function(){
            num_customers.innerHTML = customers_input.value * 50;
            setTotal();
        });
        hours_input.addEventListener('change', function(){
            num_hours.innerHTML = hours_input.value;
            setTotal();
        });
        var setTotal = function() {
            var c = customers_input.value * 50 * 5;
            var h = hours_input.value * 50;
            var result = c + h
            total.innerHTML = "$" + result;
        }
    }); // end of on page load
})();
