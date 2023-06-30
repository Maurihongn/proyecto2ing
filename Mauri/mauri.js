const submitFetch = async (event) => {
  event.preventDefault();

  const userId = document.getElementById("userIdInput").value;
  const url = `https://reqres.in/api/users/${userId}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const user = data.data;
      const nameElement = document.getElementById("name");
      const emailElement = document.getElementById("email");
      nameElement.textContent = user.first_name;
      emailElement.textContent = user.email;
    } else {
      throw new Error("Error en la solicitud: " + response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return false;
};
