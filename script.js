fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/')
.then(response => response.json())
.then((data) => {
    console.log(data)


    for(i = 0; i < data.length; i++) {
        let name = data[i].CcyNm_UZ
        let valyuta = data[i].Ccy
        let rate = data[i].Rate
        let date = data[i].Date

        document.getElementById('valyut').innerHTML += `
        <tr style="text-align: center;">
            <td style="border: 1px solid blue;">${name}</td>
            <td style="border: 1px solid blue;">${valyuta}</td>
            <td style="border: 1px solid blue;">${rate}</td>
            <td style="border: 1px solid blue;">${date}</td>
        </tr>
        `
    }

})