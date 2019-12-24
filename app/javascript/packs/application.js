// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// var sse = new EventSource('/comments/events');
// console.log('var', sse);
// sse.onmessage = function (e) {
//   alert(`${e.data}`);
// };
// sse.onerror = function (e) {
//   alert(`${e}`);
// };
// sse.addEventListener('comments.create', function (e) {
// sse.onmessage = function (e) {
//   console.log(e.data);
//   // alert(e.data);

//   document.getElementsByClassName("comments")[0].appendChild(
//     `<tr>
//       <td>${e.data.data.title}</td>
//       <td>${e.data.data.body}</td>
//       <td><a href="/comments/${e.data.data.id}">Show</a></td>
//       <td><a href="/comments/${e.data.data.id}/edit">Edit</a></td>
//       <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/comments/13${e.data.data.id}">Destroy</a></td>
//     </tr>`
//   );
// };

var sse = new EventSource('/comments/events');
// sse.addEventListener('comments.create', function (e) {
sse.onmessage = function (e) {
  console.log(e.data);
  const data = JSON.parse(e.data);
  const child = document.createElement('tr');
  child.innerHTML = `
    <td>${data.title}</td>
    <td>${data.body}</td>
    <td><a href="/comments/${data.id}">Show</a></td>
    <td><a href="/comments/${data.id}/edit">Edit</a></td>
    <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/comments/${data.id}">Destroy</a></td>
  `
  document.getElementsByClassName("comments")[0].appendChild(child);
};


// sse.addEventListener('comments.update', function (e) {
//   console.log(e.data);
//   // alert(e.data);
// });
