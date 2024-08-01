export function allDataFilledIn(formData) {
  return Object.keys(formData).every((key) => key.trim().length > 0);
}
