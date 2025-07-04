const form = document.getElementById('userForm');
const message = document.getElementById('message');
const peopleList = document.getElementById('peopleList');
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
form.addEventListener('submit', function(e) {
  e.preventDefault();
  message.textContent = '';
  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const age = Number(form.age.value);
  const hobby = form.hobby.value.trim();
  if (!fullName || !email || !age || !hobby) {
    message.textContent = 'Please fill all fields!';
    return;
  }
  if (!validateEmail(email)) {
    message.textContent = 'Please enter a valid email!';
    return;
  }
  if (age <= 0) {
    message.textContent = 'Age must be greater than 0!';
    return;
  }
  if (age <= 18) {
    message.textContent = 'You must be over 18 to submit.';
    return;
  }
  const li = document.createElement('li');
  li.textContent = `Name: ${fullName}, Email: ${email}, Age: ${age}, Hobby: ${hobby}`;
  peopleList.appendChild(li);
  message.style.color = 'green';
  message.textContent = 'User added successfully!';
  form.reset();
});
