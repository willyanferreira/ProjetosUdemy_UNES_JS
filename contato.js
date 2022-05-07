        //Header do Site
        const table = document.createElement('table');
        table.setAttribute('align', 'center');
        table.setAttribute('width', '900');

        const tr_header = document.createElement('tr');
        const td_logo = document.createElement('td');
        const td_menu = document.createElement('td');

        document.body.style.backgroundImage = "url('img/fundo2.png')";
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
        link_home.setAttribute('href', 'index.html');

        const link_quemSomos = document.createElement('a');
        link_quemSomos.innerHTML = "QUEM SOMOS";
        link_quemSomos.setAttribute('href', 'quemSomos.html');

        const link_contato = document.createElement('a');
        link_contato.innerHTML = "CONTATO";
        link_contato.setAttribute('href', '#');

        td_menu.appendChild(ul_menu);

        ul_menu.appendChild(li_home);
        ul_menu.appendChild(li_quemSomos);
        ul_menu.appendChild(li_contato);

        li_home.appendChild(link_home);
        li_quemSomos.appendChild(link_quemSomos);
        li_contato.appendChild(link_contato);

        //Body do Site
        const tr_content = document.createElement('tr');

        const td_content = document.createElement('td');
        td_content.setAttribute('colspan', 2);

        const h2_content = document.createElement('h2');
        h2_content.innerHTML = 'Veja mais';

        const github = "https://github.com/willyanferreira";
        const linkedIn = "https://www.linkedin.com/in/willyan-ferreira-a0a750206/";

        const paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Acesse meu <a href="${linkedIn}">LinkedIn</a> e meu <a href="${github}">Github</a>`;

        table.appendChild(tr_content);
        tr_content.appendChild(td_content);
        td_content.appendChild(h2_content);
        td_content.appendChild(paragrafo);

        //Footer do Site
        const tr_footer = document.createElement('tr');

        const td_footer = document.createElement('td');
        td_footer.setAttribute('colspan',2);
        td_footer.setAttribute('align', 'center');

        const h4_footer = document.createElement('h4');
        h4_footer.innerHTML = 'Todos os direitos reservados';

        table.appendChild(tr_footer);
        tr_footer.appendChild(td_footer);
        td_footer.appendChild(h4_footer);