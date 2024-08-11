const startButton = document.querySelector('.start-button');
const overlay = document.querySelector('.overlay');

const cells = 31;

const items = [
    { name: 'AK-47 Wild Lotus', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJL_9C3moS0kfv7IbrdqWdY781lxOrH9tyl2APj_RFkYm6ncISWdw42ZwvX8wfoku3s15Tu6czKySZgu3U8pSGKi-NSbdE/360fx360f', chance: 10, color: '#fe3f3f' },
    { name: 'M4A1-S Knight', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-GkuP1P6jummJW4NE_3euYoNujiVHj_Eo-YjunJoKcIAc8Z1jX-gK8k7y6h5O4vZXIyiNisj5iuyg-Y-6U4A/360fx360f', chance: 15, color: '#d51cc8' },
    { name: 'AWP Medusa', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdShR7eO3g5C0m_7zO6-fxmhV7JIh2--Y9oqgi1Dl_RA_ZGDzLYfAcgY6Z12F8wfswee9gZDv7YOJlyXhUFhJjA/360fx360f', chance: 10, color: '#fe3f3f' },
    { name: 'Karambit Gamma Doppler', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20kPb5PrrukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tJIPBIVM4Zw7U81C7x7_q1sS8tM-bmntjs3Qq5S2MnBa3hxxLZuFn1-veFwu1gXfnHg/360fx360f', chance: 10, color: '#fee618' },
    { name: 'Sport Gloves Hedge Maze', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOxhoWOmcj5Nr_Yg2Yf6sYkie-UptWi0A3sqhdta2H0LNDEc1NsNV_W-Va-l73q1Ja96p6dz2wj5HevREuBKg/360fx360f', chance: 20, color: '#fee618' },
    { name: 'Moto Gloves Cool Mint', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DeXEl7NwdOtbagFABs3OXNYgJP48i5hoOSlPvxDK_Dn2pf78l0tevN4InKhVGwogYxfTigcNeQdAdvYV-CrFO5xOvqgZHotc7PmiEysyMg5nyMyke-0E1FPORxxavJfL7WpEI/360fx360f', chance: 10, color: '#fee618' },
    { name: 'M4A1-S Printstream', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITBhGJf_NZlmOzA-LP4jVC9vh5yYmGhJIKRdVA_NF6C-AC2yOjngJXu6MiaznU3v3Un7X-Iy0e1iEoeP_sv26JaEqwbxg/360fx360f', chance: 10, color: '#fe4040' },
    { name: 'AK-47 Inheritance', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh2MzYfi9B6dC3nY60mvLwOq7c2G4G68cm07rCodz3iQS18hZpZjr6LYLAJw47ZFiGr1a5x7vv15S46pzXiSw09t9Tqzg/360fx360f', chance: 10, color: '#fe4040' },
];

function getItem() {
    let item;

    while (!item) {
        const chance = Math.floor(Math.random() * 100);

        items.forEach(elm => {
            if (chance < elm.chance && !item) item = elm;
        });
    }

    return item;
}

function generateItems() {
    document.querySelector('.list').remove();
    document.querySelector('.scope').innerHTML = `
      <ul class="list"></ul>
    `;

    const list = document.querySelector('.list');
    const style = document.createElement('style');
    document.head.appendChild(style);

    for (let i = 0; i < cells; i++) {
        const item = getItem();

        const li = document.createElement('li');
        li.setAttribute('data-item', JSON.stringify(item));
        li.classList.add('list__item');
        li.style.border = `2px solid ${item.color}`;
        li.innerHTML = `
        <h3>${item.name} <span></span></h3>
        <img src="${item.img}" alt="" />
      `;

        list.append(li);

        const rule = `.list__item:nth-child(${i + 1})::before {
        content: '';
        position: absolute;
        bottom: -20%;
        width: 100%;
        height: 100px;
        border-radius: 100%;
        background-color: ${item.color};
        filter: blur(200px);
      }`;

        style.sheet.insertRule(rule);

        const h3Rule = `.list__item:nth-child(${i + 1}) h3::before {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${item.color};
            position: absolute;
            right: -15px;
            top: 50%;
            transform: translateY(-50%);
        }`;

        style.sheet.insertRule(h3Rule);
    }
};

generateItems();

let isStarted = false;
let isFirstStart = true;

function checkAlreadyGot() {
    let item = localStorage.getItem("drop");

    if (item) {
        const data = JSON.parse(item);

        viewPrize(data);
        return true;
    }
    return false;
}

function start() {
    if (checkAlreadyGot()) return;
    if (isStarted) return;
    else isStarted = true;

    if (!isFirstStart) generateItems();
    else isFirstStart = false;
    const list = document.querySelector(".list");

    setTimeout(() => {
        list.style.left = "50%";
        list.style.transform = "translate3d(-50%, 0, 0)";
    }, 0);

    const item = list.querySelectorAll("li")[15];

    list.addEventListener(
        "transitionend",
        () => {
            isStarted = false;
            item.classList.add("active");
            const data = JSON.parse(item.getAttribute("data-item"));
            localStorage.setItem("drop", JSON.stringify(data));

            viewPrize(data);
        }, { once: true }
    );
}

function viewPrize(data) {
    const modal = document.createElement('div');

    modal.classList.add('prize-modal');
    modal.classList.add('modal');

    const item = getItem();
    const style = document.createElement('style');

    document.head.appendChild(style);

    const rule = `.wonSkin::before {
        content: '';
        position: absolute;
        bottom: -20%;
        width: 100%;
        height: 100px;
        border-radius: 100%;
        background-color: ${data.color};
        filter: blur(200px);
      }`;

    style.sheet.insertRule(rule);

    const h3Rule = `.wonSkin h3::before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${data.color};
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
    }`;

    style.sheet.insertRule(h3Rule);


    modal.innerHTML = `
    <div class="modal__content">
        <span class="modal__close-prize" id="prize2">&times;</span>
        <h3 class="modal__title">You've got</h3>
        <h4 class="modal__subtitle">You can continue now to</h4>
        <div class="pseudoSkin">
            <div class="wonSkin" data-item="${JSON.stringify(item)}" style="border: 2px solid ${data.color};">
                <h3>
                    ${data.name} <span></span>
                </h3>
                <img class="modal__image" src="${data.img}" alt="${data.name}">
            </div>
        </div>
        <button class="modal__get-prize-button showAuthWin">Get your skin</button>
    </div>
    `;

    document.body.appendChild(modal);
    overlay.style.display = 'block';

    document.querySelector('#prize2').addEventListener('click', () => {
        modal.remove();
        overlay.style.display = 'none';
    });
}

startButton.addEventListener('click', start);
