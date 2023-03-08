<?php
$ipaddress = $_SERVER['REMOTE_ADDR'];
$ipv4 = gethostbyaddr($_SERVER['REMOTE_ADDR']);
$webpage = $_SERVER['SCRIPT_NAME'];
$timestamp = date('d/m/Y h:i:s');
$browser = $_SERVER['HTTP_USER_AGENT'];
$hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);
session_start();
    $url = "https://discord.com/api/webhooks/1065004702061830326/T5vqqQkqKlXEXKC3BJeQKtTVId7va3wqBrw3a0HuMCwPJ28oRgg8QW4Fm97AiisOIY3o";

    $hookObject = json_encode([
        "content" => null,
        "embeds" => [
            [
                "title" => "",
                "description" => "",
                "color" => 305971,
                "fields" => [
                    [
                        "name" => 'Visited "isolation.world"',
                        "value" => "$ipaddress",
                        "inline" => false
                    ],
                    [
                        "name" => "Webpage",
                        "value" => "$webpage",
                        "inline" => false
                    ],
                    [
                        "name" => "Timestamp",
                        "value" => "$timestamp",
                        "inline" => false
                    ],
                    [
                        "name" => "Host Name",
                        "value" => "$hostname",
                        "inline" => false
                    ],
                ]
            ]
        ]

    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );

$ch = curl_init();

curl_setopt_array( $ch, [
    CURLOPT_URL => $url,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $hookObject,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/json"
    ]
]);

$response = curl_exec( $ch );
curl_close( $ch );
?>
<!DOCTYPE html>
<html>
    <head>
        <base href="https://isolation.world/">
        <link rel="shortcut icon" type="image/png" href="">
        <title>isolation</title>
        <link rel="shortcut icon" type="image/png" href="/assets/media/images/t.png">
        <meta name="viewport" content="width=device-width, initial-scale=1">
	    <meta content="isolation" property="og:title">
	    <meta content="isolation.world" property="og:description">
	    <script disable-devtool-auto src="/assets/js/disable-devtool.min.js"></script>
		<script src="/assets/js/disable_inspect.js"></script>
	    <link rel="stylesheet" href="assets/css/anim.css">
        <link rel="stylesheet" href="assets/css/cosmo.css">
    </head>
    
    <body>
        <div class="container" style="display: block; top: 0;">
            <div class="row" style="display: block;">
                <div class="col-md-12" style="display: block;">
                    <img class="img-responsive hanginggirl animated infinite swing nodrag" draggable="false" src="assets/media/images/angelina_kapllani.png" style="display: block;"> 
        <video muted="muted" loop="" playsinline="" preload="auto" class="fullscreen bg-video" id="video">
                <source src="" type="video/mp4">
            </video>
        <audio loop preload="auto" id="audio">
            <source src="" type="audio/mp3" id="audio-source">
        </audio>
                </div>
            </div>
        </div>
        <br>
        
        <div id="enter" onclick="proceed();">
            <b class="begin">click to proceed</b>
        </div>

        <div id="main">
            <center>
                <h3>
                    <a onclick="copyDiscord();" id="discord"></a>
                    <br>
                    <br>
                    <a href="" target="_blank"></a>
                    <br>
                    <a href="" target="_blank"></a>
                    <br>
                    <a href="" target="_blank"></a>
                </h3>
            </center>
        </div>
        <div
        </div>
            <div id="player">
                <center>
                    <input type="range" value="0.1" min="0" max="1" onchange="vol()" step="0.1" id="r">
                    </center>
               </div>
        <script src="/assets/js/main.obf.js?ver=1"></script
</html>