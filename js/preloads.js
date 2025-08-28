
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills.DtXF2zQ8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app.Cnnoy7gI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/page-OnePage.B_il_NMc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection.C2z_bq_R.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useEditorShopPayNavigation.BYPNE4ga.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedPayment.DG-DM-jF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LocalizationExtensionField.Cpoi-upa.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayOptInDisclaimer.7YCXLNaU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShipmentBreakdown.CZILsDTh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/MerchandiseModal.DfM82q-L.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StackedMerchandisePreview.DVhQEJSj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection.DU7QaIhu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/component-ShopPayVerificationSwitch.DmGovegD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useSubscribeMessenger.B3EGSkx2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.BuV9P5al.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/app.DDHPiHsQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DeliveryMethodSelectorSection.mzIofv1F.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  