        //Header do Site
        const table = document.createElement('table');
        table.setAttribute('align', 'center');
        table.setAttribute('width', '900');

        const tr_header = document.createElement('tr');
        const td_logo = document.createElement('td');
        td_logo.classList = 'logo';

        const td_menu = document.createElement('td');

        // document.body.style.backgroundImage = "url('img/fundo2.png')";
        document.body.appendChild(table);
        table.appendChild(tr_header);

        
        const img_logo = document.createElement('img');
        img_logo.src = 'img/logo.png';
        td_logo.appendChild(img_logo);
        td_logo.setAttribute('height', 89);

        tr_header.appendChild(td_logo);
        tr_header.appendChild(td_menu);

        const td_div_menu = document.createElement('div');
        td_div_menu.classList = 'dropDown';

        const span_menu = document.createElement('span');
        span_menu.innerHTML = 'MENU';
        
        const ul_menu = document.createElement('ul');
        ul_menu.classList = 'dropDownContent';

        const li_home = document.createElement('li');
        const li_quemSomos = document.createElement('li');
        const li_contato = document.createElement('li');

        const link_home = document.createElement('a');
        link_home.innerHTML = "HOME";
        link_home.setAttribute('href', 'index.html');

        const link_quemSomos = document.createElement('a');
        link_quemSomos.innerHTML = "SOBRE MIM";
        link_quemSomos.setAttribute('href', 'quemSomos.html');

        const link_contato = document.createElement('a');
        link_contato.innerHTML = "CONTATO";
        link_contato.setAttribute('href', '#');

        td_menu.appendChild(td_div_menu);
        td_div_menu.appendChild(span_menu);
        td_div_menu.appendChild(ul_menu);

        ul_menu.appendChild(li_home);
        ul_menu.appendChild(li_quemSomos);
        ul_menu.appendChild(li_contato);

        li_home.appendChild(link_home);
        li_quemSomos.appendChild(link_quemSomos);
        li_contato.appendChild(link_contato);

        //Body do Site
        const tr_content = document.createElement('tr');

        const td_content = document.createElement('td');
        td_content.classList = 'content';
        td_content.setAttribute('colspan', 2);

        const h2_content = document.createElement('h2');
        h2_content.innerHTML = 'Veja mais em:';

        const div_img = document.createElement('div');
        div_img.classList = 'containerDeImagens';
        const img_linkedin = document.createElement('img');
        img_linkedin.setAttribute('src', 'img/linkedin.png');
        const img_github = document.createElement('img');
        img_github.setAttribute('src', 'img/github.png');

        const link_linkedin = document.createElement('a');
        link_linkedin.setAttribute('href', 'https://www.linkedin.com/in/willyan-ferreira-a0a750206/');
        const link_github = document.createElement('a');
        link_github.setAttribute('href', 'https://github.com/willyanferreira');

        // const github = "https://github.com/willyanferreira";
        // const linkedIn = "https://www.linkedin.com/in/willyan-ferreira-a0a750206/";

        // const paragrafo = document.createElement('p');
        // paragrafo.innerHTML = `Acesse meu <a href="${linkedIn}">LinkedIn</a> e meu <a href="${github}">Github</a>`;

        table.appendChild(tr_content);
        tr_content.appendChild(td_content);
        td_content.appendChild(h2_content);
        // td_content.appendChild(paragrafo);
        td_content.appendChild(div_img);
        div_img.appendChild(link_linkedin);
        div_img.appendChild(link_github);
        link_linkedin.appendChild(img_linkedin);
        link_github.appendChild(img_github);

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
        td_footer.setAttribute('height', '110px');