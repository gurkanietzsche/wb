
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Gönderiliyor..';

   const serviceID = 'default_service';
   const templateID = 'template_99s32em';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Gönder';
      alert('Başarıyla Gönderildi!');
    }, (err) => {
      btn.value = 'Gönder';
      alert(JSON.stringify(err));
    });
});

