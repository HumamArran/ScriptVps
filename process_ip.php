<?php
// استقبال العنوان IP من النموذج
if(isset($_POST["name"]) || isset($_POST["date"]) || isset($_POST["ip_address"])) {
$name = $_POST['name'];
$ip_address = $_POST['ip_address'];
$date = $_POST['date'];
echo $name;
$fp = fopen('ip.c', 'a');//opens file in append mode  
fwrite($fp, '###' . ' ' . $name . ' ' . $date . ' ' . $ip_address . '\r\n' );  
fclose($fp); 
// يمكنك أن تقوم بتخزين العنوان IP في ملف أو قاعدة بيانات أو أي مكان آخر حسب احتياجاتك

// مثال بسيط: إعادة توجيه المستخدم إلى صفحة أخرى مع عرض العنوان IP
//header("Location: show_ip.php?ip=$ip_address");
}else{
    echo "<h1>eeeeee</h1>"
}
?>
