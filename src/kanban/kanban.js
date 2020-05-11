const dataMock = [
    {
        title: 'backlog',
        issues: [],
    },
    {
        title: 'ready',
        issues: [],
    },
    {
        title: 'in_progress',
        issues: [],
    },
    {
        title: 'finished',
        issues: [],
    },
],

    dataKanban = JSON.parse(window.localStorage.getItem('dataKanban')) || dataMock,
    menuButton = document.querySelector('.header_account'),
    menuArrow = document.querySelector('.header_account_arrow'),
    menu = document.createElement('nav'),
    backlog_add = document.querySelector('button[name="backlog_add"]'),
    ready_add = document.querySelector('button[name="ready_add"]'),
    in_progress_add = document.querySelector('button[name="in_progress_add"]'),
    finished_add = document.querySelector('button[name="finished_add"]');

let idCounter = window.localStorage.getItem('idCounter') || 0;

menuButton.addEventListener('click', menuToggle);
backlog_add.addEventListener('click', issuesListener);
ready_add.addEventListener('click', issuesListener);
in_progress_add.addEventListener('click', issuesListener);
finished_add.addEventListener('click', issuesListener);

renderItems();

function menuToggle() {
    if (menuArrow.classList.contains('header_account_menu')) {
        menu.parentElement.removeChild(menu);
    } else {
        menu.classList.add('menu');
        menu.innerHTML = '<button class="menu_button">My account</button><button class="menu_button">My tasks</button><button class="menu_button">Options</button><button class="menu_button">Information</button><button class="menu_button">Log out</button>';
        document.body.append(menu);
    }
    menuArrow.classList.toggle('header_account_menu');
}

function issuesListener(event) {
    let target = event.currentTarget;
    console.log(target.id);

    for (let i = 0; i < dataKanban.length; i++) {
        if (dataKanban[i].title === target.id) {
            if (dataKanban[i].title === 'backlog') {
                addIssue(target.parentElement);
            } else {
                selectIssue(target, target.parentElement, i); //dataKanban[i - 1].issues, dataKanban[i].issues
            }
        }
    };
    target.setAttribute("disabled", "disabled")
}

function addIssue(parentElement) {
    console.log('add', idCounter);

    if (document.getElementById('enter_text') === null) {
        let textarea = document.createElement('textarea');

        textarea.classList.add('task_enter', 'enter_text');
        textarea.setAttribute('rows', '1');
        textarea.setAttribute('name', '' + idCounter);
        textarea.setAttribute('placeholder', 'Write here...');
        textarea.setAttribute('cols', '30');
        backlog_add.setAttribute('disabled', 'disabled')
        textarea.addEventListener('change', function (event) {
            console.log('changed');
            event.currentTarget.setAttribute('readonly', 'readonly');
            event.currentTarget.classList.remove('enter_text')
            dataKanban[0].issues.push({ id: 'task' + idCounter, name: textarea.value + '' })
            textarea.setAttribute('id', "task" + idCounter);
            backlog_add.removeAttribute('disabled');
            saveData();
        })
        parentElement.appendChild(textarea);
        idCounter++;
    };
}

function renderItems() {
    for (let i = 0; i < dataKanban.length; i++) {
        for (let j = 0; j < dataKanban[i].issues.length; j++) {
            addIssueToDom(dataKanban[i].issues[j], i);
        }
    }
}

function addIssueToDom(issue, boardIndex) {
    const boardELement = document.querySelectorAll('.task_block')[boardIndex],
        task = document.createElement('div');
    task.setAttribute('class', 'task_block_value');
    task.setAttribute('id', issue.id);
    task.innerHTML = issue.name;
    boardELement.appendChild(task);
}

function selectIssue(caller, parentElem, i) {
    let previousIssues = dataKanban[i - 1].issues, issues = dataKanban[i].issues,
        select = document.createElement('select');

    select.classList.add('task_block_select');
    select.innerHTML += '<option value="" disabled selected hidden>Please Choose...</option>';
    for (let i = 0; i < previousIssues.length; i++) {
        select.innerHTML += '<option value=' + (previousIssues[i].id) + '>' + previousIssues[i].name + '</option>';
    }
    select.addEventListener('click', function (event) {
        select.innerHTML = '<option value="" disabled selected hidden>Please Choose...</option>';
        for (let i = 0; i < previousIssues.length; i++) {
            select.innerHTML += '<option value=' + (previousIssues[i].id) + '>' + previousIssues[i].name + '</option>';
        }
    });

    select.addEventListener('change', function (event) {
        issues.push({ id: select.value, name: previousIssues.find(function (task) { return task.id === select.value }).name });
        select.setAttribute('disabled', 'disabled')

        for (let i = 0; i < previousIssues.length; i++) {
            if (previousIssues[i].id === select.value) {
                let deleteElement = document.getElementById(select.value)
                dataKanban.issues = previousIssues.splice(i, 1)
                deleteElement.remove();
                select.setAttribute("id", select.value)
            }
        }
        caller.removeAttribute('disabled');
        saveData();
    })
    parentElem.appendChild(select);
}

function saveData() {
    let json = JSON.stringify(dataKanban);
    localStorage.setItem('dataKanban', json);
    localStorage.setItem('idCounter', String(idCounter));
}