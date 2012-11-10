<?php
if (isset($_SERVER['HTTP_X_FILENAME'])) {
    file_put_contents(
        'uploads/'.$_SERVER['HTTP_X_FILENAME'],
        file_get_contents('php://input')
    );
}
