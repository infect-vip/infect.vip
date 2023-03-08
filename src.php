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
	    
    </head>
    
    <body>
		<div class="enter" onclick="proceed();">
			<span class="center">click to proceed</span>
		</div>
		
		<div id="main"> 
		    <div class="center">
                <pre class="spider">                               ;               ,                               
                             ,;                 '.                             
                            ;:                   :;                            
                           ::                     ::                           
                           ::                     ::                           
                           ':                     :                            
                            :.                    :                            
                         ;' ::                   ::  '                         
                        .'  ';                   ;'  '.                        
                       ::    :;                 ;:    ::                       
                       ;      :;.             ,;:     ::                       
                       :;      :;:           ,;"      ::                       
                       ::.      ':;  ..,.;  ;:'     ,.;:                       
                        "'"...   '::,::::: ;:   .;.;""'                        
                            '"""....;:::::;,;.;"""                             
                        .:::.....'"':::::::'",...;::::;.                       
                       ;:' '""'"";.,;:::::;.'""""""  ':;                       
                      ::'         ;::;:::;::..         :;                      
                     ::         ,;:::::::::::;:..       ::                     
                     ;'     ,;;:;::::::::::::::;";..    ':.                    
                    ::     ;:"  ::::::"""'::::::  ":     ::                    
                     :.    ::   ::::::;  :::::::   :     ;                     
                      ;    ::   :::::::  :::::::   :    ;                      
                       '   ::   ::::::....:::::'  ,:   '                       
                        '  ::    :::::::::::::"   ::                           
                           ::     ':::::::::"'    ::                           
                           ':       """""""'      ::                           
                            ::                    ;:                            
                            ':;    <a onclick="copyDiscord()" id="discord"></a>    ;:                            
                              ';                ;'                              
                                  <a href="" target="_blank"></a>                                  
                                <a href="" target="_blank"></a>                                
                                <a href="" target="_blank"></a>                                
                                <a href="" target="_blank"></a>                                
                                <div id="player">
<input type="range" value="0.3" min="0" max="1" onchange="vol()" step="0.1" id="r">
                </pre>
		    </div>
		</div>
		
		<audio loop preload="auto" id="audio">
            <source src="VEA8IyhCTSUqQChUQDwjKEJNJSpAKFRAPCMoQk0lKkAoVEA8IyhCTSUqQChUQDwjKEJNJSpAKFRAPCMoQk0lKkAoVEA8IyhCTSUqQChUQDwjKEJNJSpAKFRAPCMoQk0lKkAoVEA8IyhCTSUqQCg=" type="audio/mp3" id="audio-source">
        </audio>
		
		<video autoplay muted loop id="vid">
					<source src="/assets/media/video/prt.mp4" type="video/mp4">
		</video>
		
        <script src="assets/js/mainv.js?v=18"></script>
			
</html>
