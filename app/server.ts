"use server";

const memory: any[] = [];

export async function save(formData: FormData) {
  const rawFormData = {
    fullName: formData.get("fullName"),
    dateOfBirth: formData.get("dateOfBirth"),
    nickname: formData.get("nickname"),
    email: formData.get("email"),
    portfolioLink: formData.get("portfolioLink"),
  };

  memory.push(rawFormData);
  console.log(JSON.stringify(memory, null, 2));
}
