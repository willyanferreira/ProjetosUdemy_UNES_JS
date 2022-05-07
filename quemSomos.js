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
        link_quemSomos.innerHTML = "SOBRE MIM";
        link_quemSomos.setAttribute('href', '#');

        const link_contato = document.createElement('a');
        link_contato.innerHTML = "CONTATO";
        link_contato.setAttribute('href', 'contato.html');

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
        h2_content.innerHTML = 'Sobre mim';

        const paragrafo = document.createElement('p');
        paragrafo.innerHTML = '<strong>Estudante</strong> de Análise e Desenvolvimento de Sistemas.<hr>';

        const lista = document.createElement('ol');
        const li_html = document.createElement('li');
        li_html.innerHTML = "HTML";
        const li_css = document.createElement('li');
        li_css.innerHTML = "CSS";
        const li_js = document.createElement('li');
        li_js.innerHTML = "JavaScript";
        const h2_lista = document.createElement('h2');
        h2_lista.innerHTML = "Tecnologias que estou estudando atualmente";

        table.appendChild(tr_content);
        tr_content.appendChild(td_content);
        td_content.appendChild(h2_content);
        td_content.appendChild(paragrafo);
        td_content.appendChild(h2_lista);
        td_content.appendChild(lista);
        lista.appendChild(li_html);
        lista.appendChild(li_css);
        lista.appendChild(li_js);

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