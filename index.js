function submitForm() {
  const form = document.getElementById("surveyForm");
  if (form.checkValidity()) {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderCheckboxes = document.querySelectorAll(
      'input[name="gender"]:checked'
    );
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    let gender = [];
    genderCheckboxes.forEach((checkbox) => {
      gender.push(checkbox.value);
    });

    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDob").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = gender.join(", ");
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobile").textContent = mobile;

    document.getElementById("popup").style.display = "flex";
  } else {
    alert("Please fill out all required fields.");
  }
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
