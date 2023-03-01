// POP UP DROP DOWN LIST WITH LOGIN INFORMATION
const account = () => {
    let popup = document.querySelector(".account-popup");
    
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

// LÄGG TILL KLASSEN ACCOUNT-ACTIVE PÅ VARJE CSS FIL OCH STYLA EXAKT LIKADANT PÅ VARJE