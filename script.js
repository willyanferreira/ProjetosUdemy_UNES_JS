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
        td_logo.setAttribute('height', 89);

        tr_header.appendChild(td_logo);
        tr_header.appendChild(td_menu);
        
        const ul_menu = document.createElement('ul');

        const li_home = document.createElement('li');
        const li_quemSomos = document.createElement('li');
        const li_contato = document.createElement('li');

        const link_home = document.createElement('a');
        link_home.innerHTML = "HOME";
        const link_quemSomos = document.createElement('a');
        link_quemSomos.innerHTML = "QUEM SOMOS";
        const link_contato = document.createElement('a');
        link_contato.innerHTML = "CONTATO";

        td_menu.appendChild(ul_menu);

        ul_menu.appendChild(li_home);
        ul_menu.appendChild(li_quemSomos);
        ul_menu.appendChild(li_contato);

        li_home.appendChild(link_home);
        li_quemSomos.appendChild(link_quemSomos);
        li_contato.appendChild(link_contato);

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