function authenticate() {

    let user = prompt("Benutzername:")?.trim();
    let pass = prompt("Passwort:")?.trim();

    let hashedPassPasw = CryptoJS.SHA256(pass).toString();
    let hashedPassUsr = CryptoJS.SHA256(user).toString();

    console.log("Eingegebener Hash:", hashedPassPasw);

    const storedHashPassw = "c30c6b3aa67e27e0fc807ab96edfc920b08ca09b98c942a593aff6c832957388";
    const storedHashUsr = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918";

    console.log("Gespeicherter Hash:", storedHashPassw);

    if (hashedPassUsr !== storedHashUsr || hashedPassPasw !== storedHashPassw) {
        document.body.innerHTML = "<h1>Zugang verweigert! Falscher Benutzername oder Passwort!</h1>";
    }
}

window.onload = authenticate;
