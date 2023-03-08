<?php 
if(isset($_GET['key'])) {
    $key = $_GET['key'];
    
    if($key == 'cmZkc3l0YnluNDM4aGQ') {
        $audio = 'audio_files_jsiVB/appear.mp3';

        header('Cache-Control: no-cache');
        header('Content-Transfer-Encoding: binary');
        header('Content-Type: audio/mpeg');
        header('Content-Length: ' . filesize($audio));
        header('Accept-Ranges: bytes');
        header('Content-Disposition: inline; filename=\'' . $audio . '\'');

        readfile($audio);
    }
    else {
        $_SESSION['audio_error'] = 'incorrect key';
        include('_audio_error.php');
    }
}
else {
    $_SESSION['audio_error'] = 'incorrect key';
    include('_audio_error.php');
}
?>