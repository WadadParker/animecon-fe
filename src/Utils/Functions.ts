
export const formDataCoversion = (formData:FormData) => {
    const formObject: Record<string, string | File> = {};
    for (const [key, value] of formData.entries()) {
        formObject[key] = value instanceof File ? value : String(value);
      }
    return formObject
}