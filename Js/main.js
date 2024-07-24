function RandomPassword(lenght) {
    const SmallLetter = "abcdefghijklmnopqrstu";
    const LargeLetter = SmallLetter.toUpperCase();
    const numbers = "123456780";
    let password = "";
    for (let i = 0; i <= lenght / 4; i++) {
        password += SmallLetter[Math.floor(Math.random() * SmallLetter.length)];
        password += LargeLetter[Math.floor(Math.random() * LargeLetter.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return password;
}
const GeneratePass = document.getElementById("password_btn");
GeneratePass.addEventListener("click", (e) => {
    e.preventDefault();
    const NewPass = document.getElementById("NewPass");
    NewPass.value = RandomPassword(8);
});
function Copy() {
    let NewPass = document.getElementById("NewPass");
    NewPass.select();
    NewPass.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(NewPass.value);
}

const CopBtn = document.querySelector(".copy_btn");
CopBtn.addEventListener("click", Copy);
