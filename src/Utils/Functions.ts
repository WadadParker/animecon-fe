
export const formDataCoversion = (formData:FormData) => {
    const formObject: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
        formObject[key] = String(value);
      }
    return formObject
}