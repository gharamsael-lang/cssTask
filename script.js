const form = document.getElementById('user');

form.addEventListener('submit', function(event) {
  
  event.preventDefault();
  const nameValue = document.getElementById('name').value;
  const phoneValue = document.getElementById('phoneNumber').value;
  const DateValue = document.getElementById('date').value;
  const fileValue = document.getElementById('file').value;
  const videoValue = document.getElementById('myVideo').value;
  const audioValue = document.getElementById('myAudio').value;

  const userData = {
    name: nameValue,
    phone: phoneValue,
    date : DateValue,
    file : fileValue,
    video : videoValue,
    audio :audioValue
  };

  localStorage.setItem('savedUser', JSON.stringify(userData));

  document.getElementById('message').textContent = 'تم حفظ البيانات بنجاح!';
  form.reset();
});