var input = $("#value-input")

input.keydwn(function(e) {	
  if (e.keyCode == "13") {
    console.log("Hi"
    var valueToSave = input.val();
    storeValue("davidsVariable", value);
    input.val("")
  }
})

onNewValue("davidsVariable", function(value) {
  $("#value-output").html(value)
})