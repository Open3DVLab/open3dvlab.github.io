document.addEventListener('DOMContentLoaded', domReady);

function domReady() {
    new Dics({
        container: document.querySelectorAll('.b-dics')[0],
        hideTexts: false,
        textPosition: "bottom"
    });
    new Dics({
        container: document.querySelectorAll('.b-dics')[1],
        hideTexts: false,
        textPosition: "bottom"
    });
}



function objectSceneEvent(idx, image_type = 'render') {
    let dics = document.querySelectorAll('.b-dics')[0];
    let sections = dics.getElementsByClassName('b-dics__section');
    let imagesLength = 4; // TODO

    updateImages(sections, idx, imagesLength, 'object', image_type);
    updateTabStates('object-scale-recon', idx);
}

function objectSceneEventnormal(idx) {
    let dics = document.querySelectorAll('.b-dics')[1];
    let sections = dics.getElementsByClassName('b-dics__section');
    // let columnNames = ['00', '10', '30', '50', '70', '90', '99'];
    let imagesLength = 3;

    for (let i = 0; i < imagesLength; i++) {
        let imageContainer = sections[i].getElementsByClassName('b-dics__image-container')[0];
        if (imageContainer) {
            let image = imageContainer.getElementsByClassName('b-dics__image')[0];
            if (image) {
                let imageFolder   = getImageFolder(idx);
                let imageFileName = getImageFileName(i+1);
                image.src = `resources/normal/${imageFolder}/${imageFileName}`;
            }
        }
    }

    updateTabStates('object-scale-recon-normal', idx);
}

function updateImages(sections, idx, imagesLength, sliderType, image_type) {
    for (let i = 0; i < imagesLength; i++) {
        let imageContainer = sections[i].getElementsByClassName('b-dics__image-container')[0];
        if (imageContainer) {
            let image = imageContainer.getElementsByClassName('b-dics__image')[0];
            if (image) {
                let imageFolder   = getImageFolder(idx, sliderType);
                let imageFileName = getImageFileName(i, sliderType);
                image.src = `resources/${image_type}/${imageFolder}/${imageFileName}`;
            }
        }
    }
}

function updateTabStates(navId, activeIdx) {
    let navItems = document.getElementById(navId).getElementsByClassName('nav-item');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].children[0].className = (activeIdx === i) ? "nav-link active" : "nav-link";
    }
}

function getImageFolder(idx, sliderType=false) {
    // let folders = ['stump', 'bicycle', 'treehill', 'flowers', 'caterpillar', 'barn', 'playground', 'train', 'truck', 'm60'];
    let folders = ['sci-art', 'residence', 'campus', 'rubble', 'building'];
    return folders[idx];
}

function getImageFileName(imageIndex, sliderType=false) {
    // let filenames = ['3dgs.png', 'ours.png', 'gt.png'];
    // let filenames = ['gt.png', 'ours.png', 'sugar.png', 'neus.png', 'neuralangelo.png'];
    let filenames = ['gt.png', 'ours.png', 'sugar.png', 'neuralangelo.png'];
    return filenames[imageIndex];
}