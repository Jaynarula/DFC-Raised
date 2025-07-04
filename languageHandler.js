function handleLanguage(input) {
  if (/^[a-zA-Z0-9 ]+$/.test(input)) {
    return 'en';
  }
  return 'hi';
}
export default handleLanguage;
