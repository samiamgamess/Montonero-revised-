<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <link rel="stylesheet" href="main.css">
</head>

<body>
    <form method="post" action="login.php">
        <h1><img style="height: 120px;" 
        src="montenero-high-resolution-color-logo-removebg-preview.png"
        ></h1>
        <div class="textBoxdiv">
            <input type="text" placeholder="username" name="username">
        </div>
        <div class="textBoxdiv">
            <input type="password" placeholder="password" name="password">
        </div>
        <input type="submit" value="Login" class="loginbtn" name="login_Btn">
        <div class="signup">
            Don't have an account ?
            </br>
            <a href="#">Sign up</a>
        </div>
    </form>
</body>

</html>
<?php
$conn = mysqli_connect("localhost", "root", "");
if (isset($_POST['login_Btn'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "SELECT * FROM websitelogin.logindetails WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_assoc($result)) {
        $resultPassword = $row['password'];
        if ($password == $resultPassword) {
            header('Location:montonero.html');
        } else {
            echo "<script>
                alert('Login unsuccessful');
            </script>";
        }
    }

}
?>

