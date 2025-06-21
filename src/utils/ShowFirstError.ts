export function ShowOneError(errors: string[] | string) {
  return Array.isArray(errors) ? errors[0] : errors || 'Something went wrong';
}

export default ShowOneError;
