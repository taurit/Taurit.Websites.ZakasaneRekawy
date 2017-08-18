// show/hide newsletter form
function setVisibility(domElement, visibility) {
    domElement.style.display = (visibility === true) ? "block" : "none";
}
var showFormWrapper = document.getElementById('show-newsletter-form-wrapper');
var button = document.getElementById('show-newsletter-form');
var mailchimpForm = document.getElementById('mc_embed_signup');
var emailInput = document.getElementById('mce-EMAIL');
// by default it's displayed, so it works for noscript users
setVisibility(showFormWrapper, true);
setVisibility(mailchimpForm, false);
// if scripts work, hide and require action to show (as it scientifically increases conversion ratio) 
button.onclick = function () {
    setVisibility(showFormWrapper, false);
    setVisibility(mailchimpForm, true);
    emailInput.focus();
};
