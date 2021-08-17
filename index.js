(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let reg_close = "Sep 2, 2021 23:59:59",
      countDown = new Date(reg_close).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;
          if(Math.floor(distance / (day)) < 10)
        {
          document.getElementById("days").innerText = `0`+Math.floor(distance / (day))+`  :`;
        }
        else{
          document.getElementById("days").innerText = Math.floor(distance / (day))+`  :`;
        }
        if(Math.floor((distance % (day)) / (hour)) < 10)
        {
          document.getElementById("hours").innerText = `0`+Math.floor((distance % (day)) / (hour))+`  :`;
        }
        else{
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))+`  :`;
        }
        if(Math.floor((distance % (hour)) / (minute)) < 10)
        {
          document.getElementById("minutes").innerText = `0`+Math.floor((distance % (hour)) / (minute))+`  :`;
        }
        else{
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))+`  :`;
        }
        if(Math.floor((distance % (minute)) / second) < 10)
        {
          document.getElementById("seconds").innerText = `0`+Math.floor((distance % (minute)) / second);
        }
        else{
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        }
          //document.getElementById("days").innerText = Math.floor(distance / (day))+`  :`;
          //document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))+`  :`;
          //document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))+`  :`;
          //document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerText = `00`+`  :`;
          document.getElementById("hours").innerText = `00`+`  :`;
          document.getElementById("minutes").innerText = `00`+`  :`;
          document.getElementById("seconds").innerText = `00`;
          }
      }, 0)
  }());
