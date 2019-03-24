<?php include('header.php');?>
<link rel="stylesheet" href="main.css" />
<?php include('container.php');?>

<div class="container-fluid">
  <h1>Code Scratch</h1>
  <form method="post">
		<div class="form-group">
			<label>Item</label>
    	<input type="text" name="iname" id="iname" />
      <label>Amount</label>
        <input type="text" name="amount" id="amount" />
        <br>
          <input type="submit" value="Submit">
          <?php
$fp = fopen('log.txt', 'w');
fwrite($fp, 'Cats chase mice');
fclose($fp);
?>
</div></form>

  </div>
<?php include('footer.php');?>
