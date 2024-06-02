const formData = {
    email: "",
    message: ""
};

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
};

const handleInput = (event) => {
    formData[event.target.name] = event.target.value;
    saveToLocalStorage();
};

const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem(STORAGE_KEY);
        formData = { email: "", message: "" };
        form.reset();
    }
};

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
