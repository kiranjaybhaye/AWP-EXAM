



function submit(){
    let userComment = document.querySelector("#usrName1").value;
        const newElement = document.createElement("div");
        newElement.style.display="flex";
        newElement.style.justifyContent="center";
        newElement.style.marginBottom="10px";

    let userPassword = document.querySelector("#usrPass1").value;
        const newElement = document.createElement("div");
        newElement.style.display="flex";
        newElement.style.justifyContent="center";
        newElement.style.marginBottom="10px";

    let userEmail = document.querySelector("#usrPass1").value;
    const newElement = document.createElement("div");
        newElement.style.display="flex";
        newElement.style.justifyContent="center";
        newElement.style.marginBottom="10px";

    const child1=document.querySelector("div");
    child1.textContent = userComment;

    const child2=document.querySelector("div");
    child2.textContent = userPassword;

    const child3=document.querySelector("div");
    child3.textContent = userEmail;

    newElement.appendChild(child1);
    newElement.appendChild(child2);
    newElement.appendChild(child3);

}