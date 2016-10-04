var turfinput = $("#value-input")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    console.log("Hi")
    var valueToSave = input.val();
    storeValue("jacksVariable", valueToSave);
    input.val("")
  }
})

onNewValue("jacksVariable", function(value) {
  $("#value-output").html(value)
})