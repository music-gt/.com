

    // footer
      $(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>

     <script>
$(document).ready(function(){
  $(" #myInput").click(function(){
    $(" #myInput ").animate({width: '400px'});
  });
});
      	
      	
  







