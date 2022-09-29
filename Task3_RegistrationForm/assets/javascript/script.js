function callvalue() {
    var uname = document.getElementById("nameinput").value;
    var uemail = document.getElementById("emailinput").value;
    var uweb = document.getElementById("websiteinput").value;
    var uimg = document.getElementById("ImgLink").value;
    var ugen = document.getElementsByName("gender");
    for(i=0;i<2;i++){
      if (ugen[i].checked)
      ugender=ugen[i].value

    }
    let uskills=[];
    var uskill = document.getElementsByName("skillsinput");
    for(i=0;i<uskill.length;i++){
      if (uskill[i].checked){
      uskills.push(uskill[i].value);
    }
    }
    let outputdata= `Name: ${uname}<br>
                     Email: ${uemail}<br>
                     Website: ${uweb}<br>
                     Gender: ${ugender}<br>
                     Skills: ${uskills}`;  
    let userimage = `<img src = '${uimg}' alt='UserImg' class='uimage'>`                   
                     
    
    document.getElementById("output").innerHTML = outputdata;
    document.getElementById("userimage").innerHTML = userimage;
  }
  
  function clearvalue(){
    document.getElementById("output").innerHTML ='';
    document.getElementById("userimage").innerHTML = '';  
    alert('All Items Cleared');
  }