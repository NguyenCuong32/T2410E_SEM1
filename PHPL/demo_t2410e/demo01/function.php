<!DOCTYPE html>
<html>
    <h1>Function Demo</h1>
    <?php
        // Định nghĩa hàm
        function Add(float $x,float $y):float
        {
            return $x+$y;
        }
        // Sử dụng hàm
        $result1 = Add(2.0,5.0);
        echo 'Result = '.$result1;
        //1. Viết function xác định một số là số chẵn hay là số lẻ, và hiển thị lên giao diện;
        // This is odd number
        // This is even number
        // 2. Viết function hiện thị 10 chữ số từ 1 đến 10 với format như sau:
            // This is 1
            // This is 2
            // ...
        // Duyệt mảng với foreach
        echo "<br> Elements in array <br>";
        $nums =array(12,34,5,6,7,98,0,4,"one","ten","nice");
        foreach ($nums as $num) {

           echo "This is $num <br>";
        }

        //3. Viết chương trình hiện thị ra danh sach tên sinh viên trong lớp học theo cú pháp
        // First name : Nguyen - Last name: Nam

        $name_list = array("Nguyen"=>"Nam","Le"=>"Hoa","Tran"=>"Binh");
        foreach ($name_list as $first_name => $last_name) {
            echo "First name $first_name - Last name $last_name";
            echo "<br>";
        }

        // 4. Sắp xếp 1 mảng giá trị theo tứ tự tăng dần
        $nums =array(12,34,5,6,7,98,0,4);
        sort($nums);
        foreach ($nums as $num) {
          echo "This is $num";
          echo "<br>";
        }
        // 5. In ra màn hình các số chẵn
        // Định nghĩa 
        function Even():void{
            for ($i=0; $i < 20; $i++) { 
                if ($i%2==0) {
                    echo "Even $i <br>";
                }
            }
        }
        // Sử dụng
        Even();
        // 6. Viết một hàm tính giá trị biểu thức sau:
        // f(x) = 2x^2+10x-9
        // Tính giá trị của f(x) tại x=-3
        function Calculate(int $x):int {
            $result =0;
            $result = 2*pow($x,2) + 10*$x-9;
            return $result;
        }
        // Tinh
        $kq=Calculate(-3);
        echo "Value $kq";
        echo "<br>Date example<br>";
        $today = date("d/M/y");
        echo "Today is: $today";
    ?>
</html>