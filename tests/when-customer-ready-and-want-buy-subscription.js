const assert = require('chai').assert;

const Service = require('../src/module/service');

const CustomerBuilder = require('./dsl/customerBuilder');

suite('when customer selected params and wants to buy a subscription', function(){
    suite('when customer select one product and delivery once in two months', function() {
        test('then the subscription cost is 6$', function () {
            let customer = new CustomerBuilder()
                .withOneProduct()
                .withIntervalOnceInTwoMonths()
                .ready();

            const service = new Service(customer);

            assert.equal(service.cost, 6);
        });
    });
});