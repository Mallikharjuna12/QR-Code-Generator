const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const imgBox = document.getElementById("imgBox");

function generateQR() {

    let text = qrText.value.trim();

    if (text === "") {
        alert("Please enter text or URL");
        qrText.focus();
        return;
    }

    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
        + encodeURIComponent(text);

    imgBox.classList.add("show");
}

qrText.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        generateQR();
    }

});

qrImage.onload = function(){

    const oldButton = document.getElementById("downloadBtn");

    if(oldButton){
        oldButton.remove();
    }

    const downloadBtn = document.createElement("button");

    downloadBtn.id = "downloadBtn";

    downloadBtn.innerText = "Download QR Code";

    downloadBtn.style.marginTop = "15px";

    downloadBtn.onclick = function(){

        const link = document.createElement("a");

        link.href = qrImage.src;

        link.download = "QRCode.png";

        link.click();

    };

    document.querySelector(".container").appendChild(downloadBtn);

};