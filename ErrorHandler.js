export default function ErrorHandler(error) {
  const search = error.toString().replace(" ", "+");
  window.open(`https://stackoverflow.com/search?q=${search}`);
}