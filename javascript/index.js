function myfunction() {
  let checkBox = document.getElementById("toggle");
  if (checkBox.checked) {
    document.getElementById("yearllyPrice").style.display = "none";
    document.getElementById("yearllyPrice1").style.display = "none";
    document.getElementById("yearllyPrice2").style.display = "none"
    document.getElementById("monthlyPrice").style.display = "flex";
    document.getElementById("monthlyPrice1").style.display = "flex";
    document.getElementById("monthlyPrice2").style.display = "flex";
  } else {
    document.getElementById("yearllyPrice").style.display = "flex";
    document.getElementById("yearllyPrice1").style.display = "flex";
    document.getElementById("yearllyPrice2").style.display = "flex";
    document.getElementById("monthlyPrice").style.display = "none";
    document.getElementById("monthlyPrice1").style.display = "none";
    document.getElementById("monthlyPrice2").style.display = "none";
  }


}
