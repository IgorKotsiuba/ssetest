var sse = new EventSource('/comments/events');
// console.error('var', sse);
// sse.onmessage = function (e) {
//   alert(`${e.data}`);
// };
// sse.onerror = function (e) {
//   alert(`${e}`);
// };
sse.addEventListener('message.create', function (e) {
  console.log(e.data);
  // alert(e.data);
});
