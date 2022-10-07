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
    const brtag = document.createElement("br");
    document.getElementById('outputbox').appendChild(brtag);
    document.getElementById('outputbox').appendChild(brtag);
    const hrtag = document.createElement("hr");
    document.getElementById('outputbox').appendChild(hrtag);
    addnew();
  }
  function addnew(){
    namechange= document.getElementById('output');
    namechange.removeAttribute('id');
    namechange= document.getElementById('userimage');
    namechange.removeAttribute('id');
    const ptag = document.createElement("p");
    const uimgn = document.createElement("div")
    let newdatabox = document.getElementById('outputbox').appendChild(ptag);
    let newuimg = document.getElementById('outputimg').appendChild(uimgn);
    newdatabox.setAttribute('id','output');
    newuimg.setAttribute('id','userimage');
  }
  
  function clearvalue(){
    document.getElementById("outputbox").innerHTML ='<br><p id="output"></p>';
    document.getElementById("outputimg").innerHTML = '<div id="userimage"></div>';  
    alert('All Items Cleared');
  }