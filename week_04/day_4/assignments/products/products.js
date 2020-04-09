function addToCart() {
    var messageElements = document.getElementsByClassName("message");
    if(messageElements.length > 0) {
        messageElements[0].parentElement.removeChild(messageElements[0]);
    }
    if(checkName() && checkImage()) {
        var imageName = document.getElementById("name").value;
        var imageURL = document.getElementById("imagePreview").src;
        var imagePrice = document.getElementById("price").value;

        var newProduct = document.createElement("div");
        newProduct.classList.add("product");
        newProduct.innerHTML = document.getElementById("sampleProduct").innerHTML;

        newProduct.getElementsByClassName("nameData")[0].innerHTML = imageName;
        newProduct.getElementsByClassName("rateValue")[0].innerHTML = imagePrice;
        newProduct.getElementsByClassName("urlData")[0].src = imageURL;
        newProduct.getElementsByClassName("urlData")[0].alt = imageName;

        document.getElementById("cart").appendChild(newProduct);

        setInputValues();
    }
}

function loadImage(event) {
    var preview = document.getElementById("imagePreview");
    preview.src = URL.createObjectURL(event.target.files[0]);
    preview.style.display = "inline";
}

function checkName() {
    var name = document.getElementById("name");

    if((name.value.length < 4) || (name.value.length > 10)) {
        printErrorMessage("nameBox", "Enter a Name of 4 - 10 Characters.");
        name.vlaue = "";
        return false;
    }
    else {
        return true;
    }
}

function checkImage() {
    if(document.getElementById("imagePreview").src.indexOf("temp.txt") != -1) {
        printErrorMessage("urlBox", "Select an Image.");
        return false;
    }
    else {
        return true;
    }
}

function setInputValues(name = "", url = "temp.txt", priceIndex = 0) {
    document.getElementById("name").value = name;
    document.getElementById("imagePreview").src = url;
    document.getElementById("price").selectedIndex = priceIndex;
}

function printErrorMessage(parentId = "", errorMessage) {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message")
    messageElement.innerHTML = errorMessage;
    document.getElementById(parentId).appendChild(messageElement);
}

function deleteConfirm(element) {
    var name = element.parentElement.getElementsByClassName("nameData")[0].innerHTML;
    if(confirm("Do you want to delete " + name + "."))
    {
        deleteProduct(element.parentElement);
    }
    
}

function deleteProduct(element) {
    document.getElementById("cart").removeChild(element);
}

function editProduct(element) {
    var parent = element.parentElement;

    var name = parent.getElementsByClassName("nameData")[0].innerHTML;
    var path = parent.getElementsByClassName("urlData")[0].src;
    var price = (parseInt(parent.getElementsByClassName("rateValue")[0].innerHTML) / 10) - 1;
    setInputValues(name, path, price);

    deleteProduct(parent);
}