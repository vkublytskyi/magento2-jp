/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/shipping-rates-validator': {
                'Magento_JapaneseAddress/js/postcode-validation-fix': true
            }
        }
    }
};
