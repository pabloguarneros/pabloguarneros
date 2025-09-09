import { drawings } from './media';


// --- NEW CODE: Pure HTML/CSS/JS Image Viewer ---
const DRAWING_HIGH_RES_PATH = '/media/drawings/';
const DRAWING_LOW_RES_PATH = '/media/drawings_low_res/';

// Create sidebar
const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
document.body.appendChild(sidebar);

// Create main image viewer
const viewer = document.createElement('div');
viewer.id = 'viewer';
viewer.style.position = 'fixed';
viewer.style.left = '100px';
viewer.style.top = '0';
viewer.style.right = '0';
viewer.style.bottom = '0';
viewer.style.display = 'flex';
viewer.style.alignItems = 'center';
viewer.style.justifyContent = 'center';
viewer.style.background = 'rgba(0,0,0,0.85)';
viewer.style.transition = 'background 0.4s';
document.body.appendChild(viewer);

// Main image element
const mainImg = document.createElement('img');
mainImg.style.maxWidth = '80vw';
mainImg.style.maxHeight = '80vh';
mainImg.style.borderRadius = '16px';
mainImg.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5)';
mainImg.style.opacity = '0';
mainImg.style.transform = 'scale(0.96)';
mainImg.style.transition = 'opacity 0.5s, transform 0.5s';
viewer.appendChild(mainImg);

// Sidebar thumbnails
drawings.forEach((drawing, idx) => {
    const thumb = document.createElement('img');
    thumb.src = DRAWING_LOW_RES_PATH + drawing.name;
    thumb.style.width = '80px';
    thumb.style.height = '80px';
    thumb.style.objectFit = 'cover';
    thumb.style.marginBottom = '16px';
    thumb.style.cursor = 'pointer';
    thumb.title = drawing.name || `Drawing ${idx + 1}`;
    thumb.style.borderRadius = '8px';
    thumb.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    thumb.style.transition = 'box-shadow 0.3s, transform 0.3s';
    thumb.onmouseenter = () => {
        thumb.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';
        thumb.style.transform = 'scale(1.05)';
    };
    thumb.onmouseleave = () => {
        thumb.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
        thumb.style.transform = 'scale(1)';
    };
    // Preload high-res image
    const highResImg = new Image();
    highResImg.src = DRAWING_HIGH_RES_PATH + drawing.name;

    thumb.onclick = () => {
        mainImg.style.opacity = '0';
        mainImg.style.transform = 'scale(0.96)';
        setTimeout(() => {
            // If preloaded, use it instantly
            if (highResImg.complete) {
                mainImg.src = highResImg.src;
                mainImg.style.opacity = '1';
                mainImg.style.transform = 'scale(1)';
            } else {
                mainImg.src = highResImg.src;
                mainImg.onload = () => {
                    mainImg.style.opacity = '1';
                    mainImg.style.transform = 'scale(1)';
                };
            }
        }, 200);
    };
    sidebar.appendChild(thumb);
});

// Show first image by default
if (drawings.length > 0) {
    mainImg.src = DRAWING_HIGH_RES_PATH + drawings[0].name;
    mainImg.onload = () => {
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
    };
}
const supportBtn = document.createElement('button');
supportBtn.id = 'support-this-project-button';
supportBtn.innerText = '🌌';
supportBtn.title = 'Support This Project';
document.body.appendChild(supportBtn);

const supportCard = document.createElement('div');
supportCard.id = 'support-this-project-card';
supportCard.style.display = 'none';
document.body.appendChild(supportCard);

// Close button
const closeBtn = document.createElement('div');
closeBtn.id = 'close-support-this-project-button';
closeBtn.innerText = 'close';
closeBtn.title = 'Close support this project card.';
supportCard.appendChild(closeBtn);

const heading = document.createElement('p');
heading.id = 'support-this-project-heading';
heading.innerHTML = '<b>get_bio()</b>';
supportCard.appendChild(heading);

const message = document.createElement('p');
message.id = 'support-this-project-message';
message.className = 'tldr-height';
message.innerHTML = `
<p>Hello, my name is Pablo. I'm a writer from Mexico City who likes to draw. These are some of my drawings painted at good times and bad times and just times, I guess?</p>
<p>My dream is to live in a lighthouse by a grey sand beach. What's your dream?</p>
<pre style="font-family: inherit; font-size: inherit; margin: 0;">
moments: List[str] = []
while i.keep_dreaming():
    life.time += timedelta(minutes=45)
    if i.meet(you):
        break()
moments.extend(a_lifetime_with(you))
</pre>
`;
supportCard.appendChild(message);


// Links container
const linksContainer = document.createElement('div');
linksContainer.id = 'support-this-project-links';
supportCard.appendChild(linksContainer);

const links = [
    {
        label: 'Merch',
        emoji: '🦦',
        url: 'https://www.redbubble.com/people/WRNO',
        desc: 'Visit the store, where you can buy a few... pillow covers?',
    },
];

links.forEach(link => {
    const btn = document.createElement('button');
    btn.className = 'support-link';
    btn.onclick = () => window.open(link.url, '_blank');
    btn.innerHTML = `
        <p><b>${link.label}</b> ${link.emoji}</p>
        <p class="tldr-width tldr-height">${link.desc}</p>
    `;
    linksContainer.appendChild(btn);
});

// Show/hide logic with smooth transition
let isOpen = false;
supportBtn.onclick = () => {
    isOpen = true;
    supportCard.style.display = 'block';
    setTimeout(() => {
        supportCard.classList.add('open');
    }, 10);
};
closeBtn.onclick = () => {
    supportCard.classList.remove('open');
    setTimeout(() => {
        supportCard.style.display = 'none';
        isOpen = false;
    }, 400);
};
