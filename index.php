<http>
    <head>
        <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
        <div class="container">
            <h2>
                Currency Converter
            </h2>
            <br />
            <br />
            <br />
            <form method="post" id="currency-form">
                <div class="form-group">
                    <label>From</label>
                    <select name="from_currency">
                        <option value="INR">Indian Rupee</option>
                        <option value="USD" selected="1">US Dollar</option>
                        <option value="AUD">Australian Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="EGP">Egyptian Pound</option>
                        <option value="CNY">Chinese Yuan</option>
                    </select>
                    &nbsp;
                    <label>Amount</label>
                    <input type="text" placeholder="Currency" name="amount" id="amount" />
                    &nbsp;
                    <label>To</label>
                    <select name="to_currency">
                        <option value="INR" selected="1">Indian Rupee</option>
                        <option value="USD">US Dollar</option>
                        <option value="AUD">Australian Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="EGP">Egyptian Pound</option>
                        <option value="CNY">Chinese Yuan</option>
                    </select>
                    &nbsp;&nbsp;
                    <button type="submit" name="convert" id="convert" class="btn btn-default">Convert</button>
                </div>
            </form>
            <div class="form-group" id="converted_rate">
                <?php

function currencyConverter ($from_Currency, $to_Currency) {
    echo "Starting conversion ...";
    $from_Currency = urlencode(strtoupper($from_Currency));
    $to_Currency = urlencode(strtoupper($to_Currency));
    $url = file_get_contents('http://free.currencyconverterapi.com/api/v6/convert?q=' . $from_Currency . '_' . $to_Currency . '&compact=ultra');
    $json = json_decode($url, true);
    echo "<br>";
    return $json[$from_Currency . '_' . $to_Currency];
}

if(isset($_POST['convert'])) {
    $from_currency = trim($_POST['from_currency']);
    $to_currency = trim($_POST['to_currency']);
    $amount = trim($_POST['amount']);
    // Convert function
    $from_Currency = urlencode($from_currency); // get hexcode
	$to_Currency = urlencode($to_currency);	 // get hexcode
	//$get = file_get_contents("https://free.currencyconverterapi.com/=$from_Currency+to+$toCurrency");  
	//$get = explode("<span class=bld>",$get);
	//$get = explode("</span>",$get[1]);
	//$rate= preg_replace("/[^0-9\.]/", null, $get[0]);
	//$converted_amount = $amount*$rate;
	//$data = array( 'rate' => $rate, 'converted_amount' =>$converted_amount, 'from_Currency' => strtoupper($from_Currency), 'to_Currency' => strtoupper($to_Currency));
    // Set conversion
    $converted_currency=currencyConverter($from_Currency, $to_Currency);
    // Print outout
    echo "...conversion done. <br> Result: <br>";
    echo $converted_currency;
}
                ?>
            </div>
        </div>
    </body>
</http>
