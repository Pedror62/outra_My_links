
        function calcular() {

            var txtv = window.document.querySelector('input#txtvel')
            var res = window.document.querySelector(`div#res`)
            var vel = Number(txtv.value)
            res.innerHTML = ` `
            if ( vel < 60) {
                res.innerHTML += `<p>voce não foi multado devido a velocidade de <strong> ${vel}Km/h </strong> voce está no limite</p>`
            } else if ( vel >= 61) {
               res.innerHTML += `voce foi multado, voce está a  <strong>${vel}Km/h</strong> de velocidade `
            } if(vel == 60){
            res.innerHTML += `<p>voce esta no limite que e <strong>${vel}Km/h</strong> cuidado use o cinto de segurança sempre</p>`
        }
        }

       
