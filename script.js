(function () {
  'use strict';

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Enquiry form – prevent default and show confirmation (no backend)
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var message = form.querySelector('#message').value.trim();
      if (!name || !email || !phone || !message) return;
      // Replace with your email when you have one; otherwise we show a message
      var contactEmail = 'mannakaran1@gmail.com';
      var subject = encodeURIComponent('Enquiry from Karan Surgicals website');
      var body = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\nMessage:\n' + message
      );
      alert('Thank you for your enquiry. You will be redirected to send an email to us. Please add our email address in your contacts if needed.');
      window.location.href = 'mailto:' + contactEmail + '?subject=' + subject + '&body=' + body;
    });
  }
})();
