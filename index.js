function allFarmers(){
    
    fetch('http://127.0.0.1:5000/api/v1/farmers', {
    })
    .then((res) => res.json())
    .then((data) => {

        console.log("gytrdesdtyug")
        if (data.status === 400){
            document.getElementById('blank').style.display = "block";
            document.getElementById('blank').innerHTML = "You have no sent messages";
        }
        if (data.status === 200){
            console.log(data)
            let allfarmers = "";
            data.data.forEach((farmer) => {
                allfarmers +=
                    `<tr>
                     <td class="senders">To User: ${farmer.district} </td>
                     <td>${farmer.number}"</td>
                    </tr>`;
                });
            document.getElementById('allfarmers').innerHTML = allfarmers;
        }
    })
}
allFarmers()