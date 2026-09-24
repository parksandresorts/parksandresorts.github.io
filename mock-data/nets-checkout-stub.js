// Stand-in for Nets' checkout.js in Storybook. `.storybook/main.ts` points GATSBY_NETS_CHECKOUT_URL
// here, so `NetsCheckoutIframe` mounts this instead of the real payment iframe: it shows the ids it
// was handed and accepts the calls the component makes on the instance.
window.Dibs = {
  Checkout: class {
    constructor({ containerId, checkoutKey, paymentId }) {
      const stub = document.createElement("div");
      stub.dataset.testid = "nets-checkout-stub";
      stub.style.whiteSpace = "pre-line";
      stub.textContent = `Tack för ditt köp!\ncheckoutKey: ${checkoutKey}\npaymentId: ${paymentId}`;
      document.getElementById(containerId)?.appendChild(stub);
    }
    on() {}
    send() {}
    freezeCheckout() {}
    thawCheckout() {}
  },
};
