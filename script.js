var turfinput = $("#turfwar")

turfinput.keydown(function(e) {	
  if (e.keyCode == "13") {
    console.log("Hi")
    var valueToSave = turfinput.val();
    storeValue("jacksVariable", valueToSave);
    turfinput.val("")
  }
})

onNewValue("jacksVariable", function(value) {
  $("#value-output").html(value)
})