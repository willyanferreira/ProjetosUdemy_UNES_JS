        //Header do Site
        const table = document.createElement('table');
        const tr_header = document.createElement('tr');
        const td_logo = document.createElement('td');
        const td_menu = document.createElement('td');

        document.body.appendChild(table);
        table.appendChild(tr_header);

        
        const img_logo = document.createElement('img');
        img_logo.src = 'img/logo.png';
        td_logo.appendChild(img_logo);
        td_menu.innerHTML = 'Só Jesus Salva.';

        tr_header.appendChild(td_logo);
        tr_header.appendChild(td_menu);

        //Body do Site

        //Footer do Site