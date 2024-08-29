// Welcome Message
document.getElementById('submitName').addEventListener('click', function() {
    const userName = document.getElementById('userName').value;
    const welcomeMessage = document.getElementById('welcomeMessage');

    if (userName.trim() !== "") {
        welcomeMessage.textContent = `Welcome ${userName}, To My Website`;
    } else {
        alert("Silakan masukkan nama Anda!");
    }
});

// image slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    if (n < 1) slideIndex = imgList.length;

    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}


// form output
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    // Mendapatkan nilai dari form
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Mendapatkan waktu saat ini
    const currentTime = new Date().toString();

    // Memasukkan nilai ke dalam output container
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputDob').textContent = dob;
    document.getElementById('outputGender').textContent = gender;
    document.getElementById('outputMessage').textContent = message;
    document.getElementById('currentTime').textContent = currentTime;

    // Menampilkan output container
    document.getElementById('outputContainer').style.display = 'block';
});
