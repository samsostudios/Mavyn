import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Samso';
  greetUser(name);
  document.body.style.backgroundColor = "blue"
});