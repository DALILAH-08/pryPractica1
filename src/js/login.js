const frmLogin = document.getElementById("frmLogin");
frmLogin.addEventListener("submit", function(event){
    event.preventDefault();

    const correoElectronico = document.getElementById("email").value;
    const contrasenia = document.getElementById ("Password").value;
    const responsLogin =document.getElementById("responseLogin");
    responsLogin.textContent ="";

    const accesLogin = document.createElement ("div");
    accesLogin.setAttribute("role", "alert");


    if (correoElectronico === "dalilah@gmail.com" && contrasenia =="123"){
    accesLogin.textContent = "DATOS CORRECTOS";
    accesLogin.classList.add("alert", "alert-success");
    responsLogin.appendChild(accesLogin);
    window.location.href = "prueba.html";
}

    else{
        accesLogin.textContent = "DATOS INCORRECTOS";
        accesLogin.classList.add("alert","alert-danger");
        responsLogin.appendChild(accesLogin);

        document.querySelector("#frmLogin").reset();

    }

});