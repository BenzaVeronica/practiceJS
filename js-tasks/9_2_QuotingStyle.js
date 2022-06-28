export default function task9_2(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  let text = "'I'm the cook,' he said, 'it's my job.'";

  console.log(text, '\nResult:');

  console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2')); // "I'm the cook," he said, "it's my job."
}
