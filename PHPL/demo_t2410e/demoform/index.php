<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <form action="#" method="post" class="mt-5">
        <div class=" container-fluid" style="max-width: 800px;">
            <h2 class="d-flex justify-content-center">Login</h2>
            <div class="row">
                <div class="col col-2"></div>
                <div class="col col-8">
                    <div class="d-block justify-content-center">
                        <div class="mb-2">
                            <label class="form-label">User name</label>
                            <input class="form-control" type="text" name="Username" placeholder="User name">
                            <span><?php echo $error ?></span>
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Password</label>
                            <input type="password" name="Password" class="form-control">
                            <span> <?php echo $error ?> </span>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary m-2 px-4">Login</button>
                            <button type="submit" class="btn btn-danger m-2 px-2">Cancel</button>
                        </div>
                    </div>
                </div>
                <div class="col col-2"></div>
            </div>
        </div>
    </form>
</body>
<div>
    <h2>User information</h2>
    <label class="label"></label>
</div>

</html>

<?php
$username = $_POST["Username"];
$pwd = $_POST["Password"];
$error = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "POST Method";
    if (empty($username)) {
        $error = "Username is required";
        echo $error;
    }
    if (empty($pwd)) {
        $error = "Password is required";
        echo $error;
    }
}
?>