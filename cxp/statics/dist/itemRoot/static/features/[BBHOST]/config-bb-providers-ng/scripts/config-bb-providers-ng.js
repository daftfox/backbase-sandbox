/**
 * Project level configuration of modules
 *
 * @example
 * Export functions to be used in config phase. E.g.:
 *
 * import { dataSomeEndpointKey } from 'data-bb-some-endpoint-ng';
 *
 * export default [
 *   [`${dataSomeEndpointKey}Provider`, (endpoint) => {
 *     endpoint.setBaseUri('http://example.com/api');
 *   }],
 * ];
 *
 */

define('config-bb-providers-ng', function (require, exports) {
  var serverRoot = window.b$.portal.config.serverRoot;
  var portalBaseUri = serverRoot + '/' + window.b$.portal.portalName;

  exports.default = [
    ['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.xsrfCookieName = 'BBXSRF';
      $httpProvider.defaults.xsrfHeaderName = 'X-BBXSRF';
    }],
    ['lib-bb-intent-ng:intentProvider', function(intents) {
      intents.setRoutes({
        'view.account.category.transactions': portalBaseUri + '/insights',
        'intent.rb.transactions.dbit.list.view': portalBaseUri + '/insights',
        'intent.rb.transactions.crdt.list.view': portalBaseUri + '/insights',
        'intent.bb.product.summary.view': portalBaseUri + '/index',
        'intent.bb.manage.products.view': portalBaseUri + '/manage-products',
        'intent.rb.categories.management.list.view': portalBaseUri + '/transactions',
        'intent.rb.billpay.summary.view': portalBaseUri + '/bill-pay',
        'intent.rb.billpay.single-bill.create': portalBaseUri + '/bill-pay',
        'intent.rb.billpay.single-bill.edit': portalBaseUri + '/bill-pay/manage-single-bill',
        'intent.rb.billpay.recurring-bill.create': portalBaseUri + '/bill-pay/manage-recurring-bill',
        'intent.rb.billpay.recurring-bill.edit': portalBaseUri + '/bill-pay/manage-recurring-bill',
        'intent.rb.billpay.pending-payments.view': portalBaseUri + '/bill-pay/pending-payments',
        'intent.rb.billpay.pending-payments.refresh': portalBaseUri + '/bill-pay',
        'intent.rb.billpay.payee.create': portalBaseUri + '/bill-pay/manage-payee',
        'intent.rb.billpay.payee.edit': portalBaseUri + '/bill-pay/manage-payee',
        'intent.rb.transaction.category.change': portalBaseUri + '/insights',
        'intent.rb.update.analysis.view': portalBaseUri + '/insights',
        'intent.rb.product.selected': portalBaseUri + '/transactions'
      });
    }]
  ];
});
