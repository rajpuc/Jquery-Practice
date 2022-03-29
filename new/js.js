$(document).ready(function(){
    var info=[];
    $("#save").click(function(e){
        e.preventDefault();
        var name=$("#name").val();
        var phone=$("#phone").val();
        var age=$("#age").val();
        //console.log(name,phone,age);
    });
    $("#test").change(function(){
        var obj={};
        var testPrice=$("#test").val();
        var testName=$("#test option:selected").text();
        obj.testName=testName;
        obj.testPrice=testPrice;
        // console.log(obj);
        if(!info.some(info => info.testName === obj.testName)){
            info.push(obj);
        }
        
        // console.log(info);
        var x='';
        var totalPrice=0;
        info.forEach(function(vals){
            x+=`<tr><td>${vals.testName}</td><td>${vals.testPrice}</td></tr>`
            totalPrice+=Number(vals.testPrice);
        })
        // x+=`<tr><td><b>Total</b></td><td>${totalPrice}</td></tr>`;
        $('#total').text(`${totalPrice}`);
        $("#testInfo tbody").html(x);
        $("#discount").on("input", function() {
            var req=$(this).val()/ 100;
            var totalValue = totalPrice - (totalPrice * req);
            console.log(totalValue);
            $('#afDis').text(`${totalValue}`);
         });
        // $("#discount").change(function(){
        //     var dis=$("#discount").val()/ 100;
        //     console.log(dis);
        //     var totalValue = totalPrice - (totalPrice * dis);
        //     console.log(dis);
        // })
    })
});