        //Header do Site
        const table = document.createElement('table');
        const tr_header = document.createElement('tr');
        const td_logo = document.createElement('td');
        const td_menu = document.createElement('td');

        document.body.style.backgroundImage = "url('img/fundo.png')";
        document.body.appendChild(table);
        table.appendChild(tr_header);

        
        const img_logo = document.createElement('img');
        img_logo.src = 'img/logo.png';
        td_logo.appendChild(img_logo);
        td_menu.innerHTML = 'Só Jesus Salva.';

        tr_header.appendChild(td_logo);
        tr_header.appendChild(td_menu);

        //Body do Site
        const tr_capa = document.createElement('tr');
        const td_capa = document.createElement('td');
        td_capa.setAttribute('colspan', 2);
        
        const img_capa = document.createElement('img');
        img_capa.src = 'img/capa.png';

        table.appendChild(tr_capa);
        tr_capa.appendChild(td_capa);
        td_capa.appendChild(img_capa);

        //Footer do Site