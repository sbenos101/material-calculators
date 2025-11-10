<script>

// Unit conversion utility
function convertUnits(value, from, to) {
    if (isNaN(value) || !from || !to) return NaN;
    if (from === to) return value;
    const conversions = {
        m: { ft: 3.28084, cm: 100, in: 39.3701, mm: 1000 },
        ft: { m: 1 / 3.28084, cm: 30.48, in: 12 },
        cm: { m: 1 / 100, ft: 1 / 30.48, in: 1 / 2.54 },
        in: { m: 1 / 39.3701, ft: 1 / 12, cm: 2.54 },
        mm: { ft: 1 / 304.8, cm: 1 / 10, in: 1 / 25.4, m: 1 / 1000 }
    };
    return value * (conversions[from]?.[to] || 1);
}


    const productsMap = {

"aggregates": {
        "name": "Aggregates",
        "img": `<svg class="category-thumb" xmlns=http://www.w3.org/2000/svg baseProfile="tiny" version="1.2" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="59.5" fill="#fff"/>
            <g>
                <path d="M49.53,39.73l21.78,43.54c.74,1.48-.34,3.23-1.99,3.23H25.79c-1.66,0-2.73-1.74-1.99-3.23l21.75-43.54c.82-1.64,3.16-1.64,3.99,0Z" fill="#009845"/>
                <path d="M74.42,25.23l21.78,43.54c.74,1.48-.34,3.23-1.99,3.23h-43.54c-1.66,0-2.73-1.74-1.99-3.23l21.75-43.54c.82-1.64,3.16-1.64,3.99,0Z" fill="#009845" stroke="#fff" stroke-miterlimit="10" stroke-width="1.2"/>
            </g>
            </svg>
        `,        
        "categories": [
            {
                "name": "Concrete Sand",
                "img": "/media/catalog/category/sand.jpg",
                "href": "/concrete-sand",
            },
            {
                "name": "Decorative Stone",
                "img": "/media/catalog/category/import/outdoor-and-garden/aggregates/decorative-stone.jpg",
                "href": "/outdoor-and-garden/aggregates/decorative-stone",
            },
            {
                "name": "Sand & Stone Ballast",
                "img": "/media/catalog/category/import/building-materials/aggregate/sand-and-stone-ballast.jpg",
                "href": "/sand-stone-ballast-3-parts-stone-to-2-parts-sand",
            },
            {
                "name": "Stone & Gravel",
                "img": "/media/catalog/category/import/building-materials/aggregate/stone-and-gravel.jpg",
                "href": "/building-materials/aggregate/stone-and-gravel",
            },
        ],
    },
    "bricks-and-blocks": {
        "name": "Bricks & Blocks",
        "img": `<svg class="category-thumb" xmlns=http://www.w3.org/2000/svg baseProfile="tiny" version="1.2" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="59.5" fill="#009845"/>
            <rect x="48" y="17.75" width="32" height="17" rx="1.48" ry="1.48" fill="#fff"/>
            <g>
            <rect x="30" y="37.25" width="32" height="17" rx="1.48" ry="1.48" fill="#fff"/>
            <rect x="65" y="37.25" width="32" height="17" rx="1.48" ry="1.48" fill="#fff"/>
            </g>
            <g>
            <rect x="13" y="56.75" width="32" height="17" rx="1.48" ry="1.48" fill="#fff"/>
            <rect x="48" y="56.75" width="32" height="17" rx="1.48" ry="1.48" fill="#fff"/>
            </g>
            <g>
            <rect x="30" y="76.25" width="32" height="17" rx="1.48" ry="1.48" fill="#fff"/>
            <rect x="65" y="76.25" width="32" height="17" rx="1.48" ry="1.48" fill="#fff"/>
            </g>
        </svg>
        `,
        "categories": [
            {
                "name": "Facing Brick",
                "img": "/media/catalog/category/import/building-materials/bricks/facing-bricks.jpg",
                "href": "/building-materials/bricks/facing-bricks",
            },
            {
                "name": "Coursing Brick",
                "img": "/media/catalog/category/import/building-materials/bricks/coursing-brick.jpg",
                "href": "/building-materials/bricks/coursing-brick",
            },
            {
                "name": "Engineering & Concrete Common Brick",
                "img": "/media/catalog/category/import/building-materials/bricks/engineering-and-concrete-common-bricks.jpg",
                "href": "/building-materials/bricks/engineering-and-concrete-common-bricks",
            },
            {
                "name": "Aerated Blocks",
                "img": "/media/catalog/category/import/building-materials/building-blocks/aerated-blocks.jpg",
                "href": "/building-materials/building-blocks/aerated-blocks",
            },
            {
                "name": "Concrete Blocks",
                "img": "/media/catalog/category/import/building-materials/building-blocks/concrete-blocks.jpg",
                "href": "/building-materials/building-blocks/concrete-blocks",
            },
            {
                "name": "Trench Blocks",
                "img": "/media/catalog/category/import/building-materials/building-blocks/trench-blocks.jpg",
                "href": "/building-materials/building-blocks/trench-blocks",
            }
        ],
    },
    "floorboards": {
        "name": "Floorboards",
        "img": `<svg class="category-thumb" xmlns=http://www.w3.org/2000/svg baseProfile="tiny" version="1.2" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="59.5" fill="#fff"/>
            <g>
                <rect x="25" y="24.5" width="19" height="45" fill="#009845"/>
                <rect x="50.75" y="50.5" width="19" height="45" fill="#009845"/>
                <rect x="76" y="24.5" width="19" height="45" fill="#009845"/>
                <rect x="25" y="76.5" width="19" height="19" fill="#009845"/>
                <rect x="50.75" y="24.5" width="19" height="19" fill="#009845"/>
                <rect x="76" y="76.5" width="19" height="19" fill="#009845"/>
            </g>
            </svg>
        `,
        "categories": [
            {
                "name": "Floorboards",
                "img": "/media/catalog/category/floorboards.jpg",
                "href": "/building-materials/mouldings/floorboards",
            },
        ],
    },
    "insulation": {
        "name": "Loft Insulation",
        "img": `<svg class="category-thumb" xmlns=http://www.w3.org/2000/svg baseProfile="tiny" version="1.2" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="59.5" fill="#fff"/>
            <path d="M16.5,60c0-24.02,19.48-43.5,43.5-43.5s43.5,19.48,43.5,43.5-19.48,43.5-43.5,43.5-43.5-19.48-43.5-43.5ZM60,98.5c21.26,0,38.5-17.24,38.5-38.5s-17.24-38.5-38.5-38.5S21.5,38.74,21.5,60s17.24,38.5,38.5,38.5Z" fill="#009845"/>
            <path d="M32.76,60c0-15.04,12.19-27.24,27.24-27.24s27.24,12.19,27.24,27.24-12.19,27.24-27.24,27.24-27.24-12.19-27.24-27.24ZM60,82.81c12.6,0,22.81-10.21,22.81-22.81s-10.21-22.81-22.81-22.81-22.81,10.21-22.81,22.81,10.21,22.81,22.81,22.81Z" fill="#009845"/>
            </svg>
        `,
        "categories": [
            {
                "name": "Loft Insulation",
                "img": "/media/catalog/category/import/building-materials/insulation/loft-insulation.jpg",
                "href": "/building-materials/insulation/loft-insulation",
            },
        ],
    },
    "paving": {
        "name": "Paving",
        "img": `  <svg class='category-thumb' xmlns=http://www.w3.org/2000/svg baseProfile="tiny" version="1.2" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="59.5" fill="#009845"/>
            <g>
                <g>
                <rect x="53.5" y="16" width="13" height="27" fill="#fff"/>
                <rect x="53.5" y="46.5" width="13" height="27" fill="#fff"/>
                <rect x="53.5" y="77" width="13" height="27" fill="#fff"/>
                </g>
                <g>
                <g>
                    <rect x="70" y="31.25" width="13" height="27" fill="#fff"/>
                    <rect x="70" y="61.75" width="13" height="27" fill="#fff"/>
                </g>
                <g>
                    <rect x="37" y="31.25" width="13" height="27" fill="#fff"/>
                    <rect x="37" y="61.75" width="13" height="27" fill="#fff"/>
                </g>
                </g>
                <g>
                <rect x="86" y="48.42" width="13" height="27" fill="#fff"/>
                <rect x="21" y="48.42" width="13" height="27" fill="#fff"/>
                </g>
            </g>
            </svg>
        `,
        "categories": [
            {
                "name": "Porcelain Paving",
                "img": "/media/catalog/category/porcelain-paving.jpg",
                "href": "/outdoor-and-garden/porcelain-paving-slabs",
            },
            {
                "name": "Natural Stone Paving",
                "img": "/media/catalog/category/natural-stone-paving.jpg",
                "href": "/outdoor-and-garden/natural-stone-paving",
            },
            {
                "name": "Concrete Paving",
                "img": "/media/catalog/category/concrete-paving.jpg",
                "href": "/outdoor-and-garden/concrete-paving",
            },
        ],
    },
    "radiators": {
        "name": "Radiators",
        "img": `<svg class="category-thumb" xmlns=http://www.w3.org/2000/svg baseProfile="tiny" version="1.2" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="59.5" fill="#fff"/>
            <g>
                <rect x="23.43" y="23.5" width="15" height="69" rx="7.5" ry="7.5" fill="#009845"/>
                <rect x="43.43" y="23.5" width="15" height="69" rx="7.5" ry="7.5" fill="#009845"/>
                <rect x="63.43" y="23.5" width="15" height="69" rx="7.5" ry="7.5" fill="#009845"/>
                <path d="M82.43,28.5h7c1.1,0,2,.9,2,2v10c0,1.1-.9,2-2,2h-7v-14h0Z" fill="#009845"/>
                <path d="M82.43,73.5h9.6c2.5,0,4.53,2.03,4.53,4.53v14.19c0,3.46-2.81,6.28-6.28,6.28h-1.13c-3.71,0-6.72-3.01-6.72-6.72v-18.28h0Z" fill="#009845"/>
            </g>
            </svg>
        `,
        "categories": [
            {
                "name": "Convector Radiators",
                "img": "/media/catalog/category/import/plumbing-and-heating/radiators/convector-radiators.jpg",
                "href": "/plumbing-and-heating/radiators/convector-radiators",
            },
            {
                "name": "Heated Towel Rails",
                "img": "/media/catalog/category/import/plumbing-and-heating/radiators/heated-towel-rails.jpg",
                "href": "/plumbing-and-heating/radiators/heated-towel-rails",
            },
            {
                "name": "Oil Radiators",
                "img": "/media/catalog/category/import/plumbing-and-heating/radiators/oil-radiators.jpg",
                "href": "/plumbing-and-heating/radiators/oil-radiators",
            },
            {
                "name": "Fittings & Accessories",
                "img": "/media/catalog/category/import/plumbing-and-heating/radiators/radiator-fittings-and-accessories.jpg",
                "href": "/plumbing-and-heating/radiators/radiator-fittings-and-accessories",
            }
        ],
    },
    "tiling": {
        "name": "Tiling",
        "img": `<svg class="category-thumb" xmlns=http://www.w3.org/2000/svg baseProfile="tiny" version="1.2" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="59.5" fill="#fff"/>
            <g>
                <g>
                <rect x="46.68" y="71.29" width="26.64" height="26.64" rx=".91" ry=".91" transform="translate(77.4 -17.64) rotate(45)" fill="#009845"/>
                <rect x="46.68" y="22.07" width="26.64" height="26.64" rx=".91" ry=".91" transform="translate(42.6 -32.06) rotate(45)" fill="#009845"/>
                </g>
                <g>
                <rect x="22.07" y="46.68" width="26.64" height="26.64" rx=".91" ry=".91" transform="translate(102.83 77.4) rotate(135)" fill="#009845"/>
                <rect x="71.29" y="46.68" width="26.64" height="26.64" rx=".91" ry=".91" transform="translate(186.87 42.6) rotate(135)" fill="#009845"/>
                </g>
            </g>
            </svg>
        `,
        "categories": [
            {
                "name": "Tiles",
                "img": "/media/catalog/category/tiles-and-trims.jpg",
                "href": "/kitchens-and-bathrooms/tiling/tiles-and-trims",
            },
        ],
    },
    "timber-decking": {
        "name": "Timber Decking",
        "img": ` <svg class="category-thumb"  xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="59.5" fill="#009845"/>
            <g>
            <g>
                <rect x="29.68" y="19.5" width="17" height="81" rx="1.11" ry="1.11" fill="#fff"/>
                <g>
                <rect x="32.68" y="23" width="1" height="74" fill="#009845"/>
                <rect x="37.68" y="23" width="1" height="74" fill="#009845"/>
                <rect x="42.68" y="23" width="1" height="74" fill="#009845"/>
                </g>
            </g>
            <g>
                <rect x="51.5" y="19.5" width="17" height="81" rx="1.11" ry="1.11" fill="#fff"/>
                <g>
                <rect x="54.5" y="23" width="1" height="74" fill="#009845"/>
                <rect x="59.5" y="23" width="1" height="74" fill="#009845"/>
                <rect x="64.5" y="23" width="1" height="74" fill="#009845"/>
                </g>
            </g>
            <g>
                <rect x="73.32" y="19.5" width="17" height="81" rx="1.11" ry="1.11" fill="#fff"/>
                <g>
                <rect x="76.32" y="23" width="1" height="74" fill="#009845"/>
                <rect x="81.32" y="23" width="1" height="74" fill="#009845"/>
                <rect x="86.32" y="23" width="1" height="74" fill="#009845"/>
                </g>
            </g>
            </g>
        </svg>
        `,
        "categories": [
            {
                "name": "Timber Decking",
                "img": "/media/catalog/category/timber-decking_1.jpg",
                "href": "/outdoor-and-garden/garden-timber/timber-decking",
            }
        ],
    }
};

function initializeApp() {
    // Carousel setup
    let materials = ["aggregates", "bricks-and-blocks", "floorboards", "insulation", "paving", "radiators", "tiling", "timber-decking"];
   const carousels = [];
    const prevButtons = [];
    const nextButtons = [];
    const carouselContainers = [];
    const carouselIndexMap = {};

    materials = materials.filter(material => {
        const exists = productsMap[material] && document.getElementById(`${material}-carousel`);
        if (!exists) {
            console.warn(`Carousel for ${material} not found or missing in productsMap`);
        }
        return exists;
    });

    materials.forEach((material, index) => {
        const section = document.getElementById(`${material}-carousel`);
        if (!section) {
            console.error(`No section found for ${material}-carousel`);
            return;
        }

        const carousel = section.querySelector('.carousel');
        const prevBtn = section.querySelector('.prevBtn');
        const nextBtn = section.querySelector('.nextBtn');
        const container = section.querySelector('.carousel-container');

        if (!carousel || !prevBtn || !nextBtn || !container) {
            console.error(`Missing carousel elements for ${material}: carousel=${!!carousel}, prevBtn=${!!prevBtn}, nextBtn=${!!nextBtn}, container=${!!container}`);
            return;
        }

        carousels.push(carousel);
        prevButtons.push(prevBtn);
        nextButtons.push(nextBtn);
        carouselContainers.push(container);
        carouselIndexMap[material] = 0;

        // Clear existing content
        carousel.innerHTML = '';

        const category = productsMap[material];
        const uniqueProducts = category.categories.filter(
            (product, idx, self) => idx === self.findIndex(p => p.href === product.href)
        );

        if (uniqueProducts.length < category.categories.length) {
            console.warn(`Removed ${category.categories.length - uniqueProducts.length} duplicates from ${material}`);
        }

        uniqueProducts.forEach(product => {
            console.log(`Appending item for ${material}: ${product.name}`);
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.innerHTML = `
                <form class="carousel-item-content w-full" style="background-color: gainsboro">
                    <img src="${product.img}" alt="${product.name}" title="${product.name}" class="carousel-item-image" style="border-radius: 0.75rem;">
                    <div class="carousel-item-details w-full">
                        <div class="flex flex-row items-center gap-4 justify-start" style="padding: 8px; padding-left: 0px; min-height: 50px;">
                            ${category.img}
                            <strong>
                                <p class="md:text-lg text-base" style="border-bottom: #009845 2px solid; padding-bottom:4px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.4;">
                                    ${product.name}
                                </p>
                            </strong>
                        </div>
                        <div class="md:mt-auto w-full pt-2 pb-2 flex z-50">
                            <a href="${product.href}" class="py-2 w-full btn btn-primary justify-center text-sm rounded uppercase font-bold focus:border-primary focus:outline-none focus:ring-0 mr-auto" aria-label="SHOP NOW">
                                <svg class="w-6 h-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 328.8" aria-hidden="true">
                                    <path style="fill:#fff" d="M387.61,142.63h-116.59l-27.11-61.22c3.52-3.46,4.83-8.84,2.9-13.69l-21.21-53.51c-5.22-11.89-17.75-17.11-26.2-12.32l-1.1-.44c-10.5-4.17-20.52,1.02-24.69,11.53l-21.21,53.5c-1.9,4.8-.64,10.1,2.77,13.55l-.26,.18-27.57,62.42H12.45c-.26,0-.52,0-.77,.02-6.5,.29-11.68,4.32-11.68,9.19v6.79c0,5.07,5.99,9.49,12.83,9.49h3.52l52.04,148.59c2.54,7.25,9.38,12.11,17.07,12.11h220.59c7.4,0,14.06-4.52,16.8-11.4l59.16-148.73h5.64c.29,0,.58,0,.86-.03,6.45-.39,11.49-5.17,11.49-10.02v-6.79c0-5.05-5.57-9.19-12.39-9.2Zm-122.93,60.13h-55.65v-34.72h61.02l-5.38,34.72Zm-7.75,50.05h-47.9v-32.17h52.88l-4.98,32.17Zm-119.42-32.17h53.04l-.06,32.17h-48.18l-4.81-32.17Zm33.86-132.76l.09-.5c5.78,1.02,11.72-2.13,13.97-7.79l13.92-35.1,14.41,36.34c2.13,5.36,7.57,8.47,13.06,7.91h0s.06,.17,.09,.28c0,.03,.02,.06,.02,.08,0,0,0,.02,0,.02l24.7,53.53h-104.82l24.55-54.76Zm19.28,80.16l-.06,34.72h-55.76l-5.2-34.72h61.01Zm-146.03,0H111.83l5.05,34.72H56.87l-12.25-34.72Zm19.4,52.6h55.46l4.69,32.17h-49.17l-10.98-32.17Zm29.87,84.25l-12.26-34.21h45.13l4.98,34.21h-37.84Zm56.22,0l-5.12-34.21h45.46l-.06,34.21h-40.28Zm58.91,0v-34.21h45.13l-5.3,34.21h-39.83Zm90.13,0h-32.17l5.39-34.21h39.54l-12.76,34.21Zm20.42-52.08h-44.38l5.08-32.17h52.59l-13.28,32.17Zm21.45-50.05h-57.94l5.47-34.72h66.76l-14.29,34.72Z"></path>
                                </svg>
                                <span class="ml-2 inline text-nowrap">SHOP NOW</span>
                            </a>
                        </div>
                    </div>
                </form>`;
            carousel.appendChild(item);
        });

        // Hide navigation buttons for single-item carousels
        if (uniqueProducts.length <= 1) {
            prevBtn.classList.add('hidden');
            nextBtn.classList.add('hidden');
        }
    });

    function getVisibleItems() {
        if (window.innerWidth <= 500) return 1;
        if (window.innerWidth <= 1280) return 2;
        return 3;
    }

    function getMaxIndex(material) {
        const uniqueCount = productsMap[material].categories.filter(
            (product, idx, self) => idx === self.findIndex(p => p.href === product.href)
        ).length;
        return Math.max(uniqueCount - getVisibleItems(), 0);
    }

    function updateCarousel(material) {
        const idx = materials.indexOf(material);
        const carousel = carousels[idx];
        if (!carousel) return;

        const visibleItems = getVisibleItems();
        const maxIndex = getMaxIndex(material);
        carouselIndexMap[material] = Math.min(carouselIndexMap[material], maxIndex);

        const itemWidth = 100 / visibleItems;
        carousel.style.transform = `translateX(-${carouselIndexMap[material] * itemWidth}%)`;
    }

    function nextProduct(material) {
        const maxIndex = getMaxIndex(material);
        if (carouselIndexMap[material] < maxIndex) {
            carouselIndexMap[material]++;
            updateCarousel(material);
        }
    }

    function prevProduct(material) {
        if (carouselIndexMap[material] > 0) {
            carouselIndexMap[material]--;
            updateCarousel(material);
        }
    }

    materials.forEach((material, index) => {
        const prevBtn = prevButtons[index];
        const nextBtn = nextButtons[index];
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => prevProduct(material));
            nextBtn.addEventListener('click', () => nextProduct(material));
        } else {
            console.error(`Navigation buttons missing for ${material}`);
        }

        const carouselContainer = carouselContainers[index];
        if (carouselContainer) {
            let touchStartX = 0;
            let isSwiping = false;
            carouselContainer.addEventListener('touchstart', e => {
                touchStartX = e.touches[0].clientX;
                isSwiping = false;
            });
            carouselContainer.addEventListener('touchmove', e => {
                if (isSwiping) return;
                const touchMoveX = e.touches[0].clientX;
                const swipeDistance = touchStartX - touchMoveX;
                const swipeThreshold = window.innerWidth * 0.25;
                if (Math.abs(swipeDistance) > swipeThreshold) {
                    isSwiping = true;
                    swipeDistance > 0 ? nextProduct(material) : prevProduct(material);
                }
            });
            carouselContainer.addEventListener('touchend', () => {
                isSwiping = false;
            });
        } else {
            console.error(`Carousel container missing for ${material}`);
        }
    });

    function updateCarousels() {
        materials.forEach(material => updateCarousel(material));
    }

    window.addEventListener('resize', updateCarousels);
    updateCarousels();

        // Calculators
        const calculators = {
            aggregates: {
                elements: {
                    length: document.getElementById('aggregate-length'),
                    width: document.getElementById('aggregate-width'),
                    depth: document.getElementById('aggregate-depth'),
                    lengthUnit: document.getElementById('aggregate-length-unit'),
                    widthUnit: document.getElementById('aggregate-width-unit'),
                    depthUnit: document.getElementById('aggregate-depth-unit'),
                    output: document.getElementById('aggregate-output'),
                    type: document.getElementById('aggregate-type')
                },
                grabs: {
                    "Sand": 850,
                    "Decorative Stone": 850,
                    "Sand & Stone Ballast": 850,
                    "Stone & Gravel": 850
                },
                calculate: function () {
                    const { length, width, depth, lengthUnit, widthUnit, depthUnit, output, type } = this.elements;

                    const l = convertUnits(parseFloat(length.value), lengthUnit.value, 'm');
                    const w = convertUnits(parseFloat(width.value), widthUnit.value, 'm');
                    const d = convertUnits(parseFloat(depth.value), depthUnit.value, 'm');
                    const volume = l * w * d;

                    if (isNaN(volume)) {
                        output.innerHTML = "";
                        return;
                    }

                    const totalWeight = volume * 2000;
                    const grabWeight = this.grabs[type.value] || 850;
                    const halfGrabWeight = grabWeight / 2;

                    const fullGrabs = Math.floor(totalWeight / grabWeight);
                    const remainingAfterFull = totalWeight - (fullGrabs * grabWeight);

                    const halfGrabs = Math.floor(remainingAfterFull / halfGrabWeight);
                    const remainingAfterHalf = remainingAfterFull - (halfGrabs * halfGrabWeight);

                    const handiBags = Math.ceil(remainingAfterHalf / 20);

                    output.innerHTML = `
                        <div class="material-results">
                            <p>Results</p>
                            <p>Please note these figures are a guide and offer no guarantee that the quantity specified will be enough for your project.</p>
                            <br>
                        </div>
                        <p class="font-bold text-xl">Volume: ${volume.toFixed(3)} m<sup>3</sup></p>
                        <p class="font-bold text-xl">Weight: ${totalWeight.toFixed(0)} kg</p>
                        <div style="margin-top: 12px">
                            <p>Full Grab Bags (~${grabWeight}kg): ${fullGrabs}</p>
                            <p>Half Grab Bags (~${halfGrabWeight}kg): ${halfGrabs}</p>
                            <p>Handi-Bags (~20kg): ${handiBags}</p>
                        </div>`;
                },
                init: function () {
                    const inputs = Object.values(this.elements).filter(el => el);
                    inputs.forEach(el => {
                        if (!el) console.error('Missing DOM element in aggregates:', Object.keys(this.elements).find(key => this.elements[key] === el));
                        el.addEventListener('input', () => this.calculate());
                    });
                    this.calculate();
                }
            },
            bricks: {
                elements: {
                    length: document.getElementById('wall-length'),
                    height: document.getElementById('wall-height'),
                    lengthUnit: document.getElementById('wall-length-unit'),
                    heightUnit: document.getElementById('wall-height-unit'),
                    output: document.getElementById('brick-output'),
                    wastage: document.getElementById('brick-wastage'),
                    brickLength: document.getElementById('brick-length'),
                    brickWidth: document.getElementById('brick-width'),
                    brickHeight: document.getElementById('brick-height'),
                    mortarJoint: document.getElementById('mortar-joint'),
                    area: document.getElementById('wall-area'),
                    toggle: document.getElementById('brick-block-toggle'),
                    toggleText: document.getElementById('brick-block-toggle-text'),
                    toggleTitle: document.getElementById('brick-block-toggle-title')
                },
                setDefault: function() {
                    const { brickLength, brickWidth, brickHeight, toggle, toggleText, toggleTitle } = this.elements;
                    if (!toggle.checked) {
                        brickLength.value = 440;
                        brickWidth.value = 140;
                        brickHeight.value = 215;
                        toggleText.innerHTML = "Change to Bricks";
                        toggleTitle.innerHTML = "Block dimensions:";
                        document.getElementById("brick-length-label").innerText = "Length";
                        document.getElementById("brick-width-label").innerText = "Height";
                        document.getElementById("brick-height-label").innerText = "Width";
                    } else {
                        brickLength.value = 215;
                        brickWidth.value = 102.5;
                        brickHeight.value = 65;
                        toggleText.innerHTML = "Change to Blocks";
                        toggleTitle.innerHTML = "Brick dimensions:";
                        document.getElementById("brick-length-label").innerText = "Length";
                        document.getElementById("brick-width-label").innerText = "Width";
                        document.getElementById("brick-height-label").innerText = "Height";
                    }
                    this.calculate();
                },
                calculate: function() {
                    const { length, height, lengthUnit, heightUnit, output, wastage, brickLength, brickHeight, mortarJoint, area } = this.elements;
                    const l = convertUnits(parseFloat(length.value), lengthUnit.value, 'm');
                    const h = convertUnits(parseFloat(height.value), heightUnit.value, 'm');
                    const a = l * h;
                    area.value = isNaN(a) ? "" : a.toFixed(2);
                    const bl = parseFloat(brickLength.value) / 1000;
                    const bh = parseFloat(brickHeight.value) / 1000;
                    const mj = parseFloat(mortarJoint.value) / 1000;
                    const bricksPerM2 = 1 / ((bl + mj) * (bh + mj));
                    let totalBricks = a * bricksPerM2;
                    if (wastage.checked) totalBricks *= 1.05;
                    output.innerHTML = isNaN(a) ? "" : `
                        <div class="material-results">
                            <p>Results</p>
                            <p>Please note these figures are a guide and offer no guarantee that the quantity specified will be enough for your project.</p>
                            <br>
                        </div>
                        <p>Wall Area: ${a.toFixed(2)} m²</p>
                        <p class="font-bold text-xl">Number of ${this.elements.toggle.checked ? 'Bricks' : 'Blocks'} Needed: ${Math.ceil(totalBricks)}</p>
                        <div style="margin-top: 4px">
                            <p>Wastage: ${wastage.checked ? '5% included' : 'Not included'}</p>
                            <p>${this.elements.toggle.checked ? 'Bricks' : 'Blocks'} Dimensions: ${brickLength.value}mm x ${this.elements.brickWidth.value}mm x ${brickHeight.value}mm</p>
                            <p>Mortar Joint: ${mortarJoint.value}mm</p>
                        </div>`;
                },
                init: function() {
                    const inputs = Object.values(this.elements).filter(el => el);
                    inputs.forEach(el => {
                        if (!el) console.error('Missing DOM element in bricks:', Object.keys(this.elements).find(key => this.elements[key] === el));
                        el.addEventListener('input', () => this.calculate());
                    });
                    this.elements.toggle.addEventListener('change', () => this.setDefault());
                    this.setDefault();
                }
            },
            flooring: {
                elements: {
                    length: document.getElementById('flooring-room-length'),
                    width: document.getElementById('flooring-room-width'),
                    lengthUnit: document.getElementById('flooring-room-length-unit'),
                    widthUnit: document.getElementById('flooring-room-width-unit'),
                    output: document.getElementById('flooring-output'),
                    wastage: document.getElementById('board-wastage'),
                    boardLength: document.getElementById('flooring-board-length'),
                    boardWidth: document.getElementById('flooring-board-width'),
                    area: document.getElementById('flooring-area')
                },
                setBoardSize: function(value) {
                    const [length, width] = value.split('x');
                    this.elements.boardLength.value = length;
                    this.elements.boardWidth.value = width;
                    this.calculate();
                },
                calculate: function() {
                    const { length, width, lengthUnit, widthUnit, output, wastage, boardLength, boardWidth, area } = this.elements;
                    const l = convertUnits(parseFloat(length.value), lengthUnit.value, 'm');
                    const w = convertUnits(parseFloat(width.value), widthUnit.value, 'm');
                    const a = l * w;
                    area.value = isNaN(a) ? "" : a.toFixed(2);
                    const bl = 1; //parseFloat(boardLength.value) / 1000;
                    let bw = parseFloat(boardWidth.value);
                    if (bw < 125) bw = 125;
                    else if (bw > 150) bw = 150;
                    boardWidth.value = bw;
                    bw = (bw - 11) / 1000;
                    const boardsPerM2 = 1 / (bl * bw);
                    let totalBoards = a * boardsPerM2;
                    if (wastage.checked) totalBoards *= 1.05;
                    const totalLengthMeters = totalBoards * bl;
                    output.innerHTML = (isNaN(a) || bw * 1000 < 1) ? "" : `
                        <div class="material-results">
                            <p>Results</p>
                            <p>Please note these figures are a guide and offer no guarantee that the quantity specified will be enough for your project.</p>
                            <br>
                        </div>
                        <p>Flooring Area: ${a.toFixed(2)} m²</p>
                        <p class="font-bold text-xl">Linear Meterage: ${totalLengthMeters.toFixed(2)} meters</p>
                        <div style="margin-top: 12px">
                            <p>Wastage: ${wastage.checked ? '5% included' : 'Not included'}</p>
                            <p>Floorboard Width: ${boardWidth.value}mm</p>
                            <p>Please note, our 125 and 150mm wide floorboards have a respective coverage of 114 and 139mm.</p>
                        </div>`;
                },
                init: function() {
                    const inputs = Object.values(this.elements).filter(el => el);
                    inputs.forEach(el => {
                        if (!el) console.error('Missing DOM element in flooring:', Object.keys(this.elements).find(key => this.elements[key] === el));
                        el.addEventListener('input', () => this.calculate());
                    });
                    this.calculate();
                }
            },
            insulation: {
                elements: {
                    length: document.getElementById('insulation-area-length'),
                    width: document.getElementById('insulation-area-width'),
                    lengthUnit: document.getElementById('insulation-area-length-unit'),
                    widthUnit: document.getElementById('insulation-area-width-unit'),
                    output: document.getElementById('insulation-output'),
                    thickness: document.getElementById('roll-thickness'),
                    rollWidth: document.getElementById('roll-width'),
                    rollLength: document.getElementById('roll-length'),
                    area: document.getElementById('insulation-area')
                },
                setRollSpecs: function(value) {
                    const [thickness, width, length] = value.split('x');
                    this.elements.thickness.value = thickness;
                    this.elements.rollWidth.value = width;
                    this.elements.rollLength.value = parseInt(length) / 1000;
                    this.calculate();
                },
                calculate: function() {
                    const { length, width, lengthUnit, widthUnit, output, thickness, rollWidth, rollLength, area } = this.elements;
                    const l = convertUnits(parseFloat(length.value), lengthUnit.value, 'm');
                    const w = convertUnits(parseFloat(width.value), widthUnit.value, 'm');
                    const a = l * w;
                    area.value = isNaN(a) ? "" : a.toFixed(2);
                    const rl = parseFloat(rollLength.value);
                    const rw = parseFloat(rollWidth.value) / 1000;
                    const rollsPerM2 = 1 / (rl * rw);
                    const totalRolls = a * rollsPerM2;
                    output.innerHTML = isNaN(a) ? "" : `
                        <div class="material-results">
                            <p>Results</p>
                            <p>Please note these figures are a guide and offer no guarantee that the quantity specified will be enough for your project.</p>
                            <br>
                        </div>
                        <p>Insulation Area: ${a.toFixed(2)} m²</p>
                        <p class="font-bold text-xl">Number of Insulation Rolls Needed: ${Math.ceil(totalRolls)}</p>
                        <p>Roll Dimensions: ${rollLength.value} metres x ${rollWidth.value} x ${thickness.value}mm</p>`;
                },
                init: function() {
                    const inputs = Object.values(this.elements).filter(el => el);
                    inputs.forEach(el => {
                        if (!el) console.error('Missing DOM element in insulation:', Object.keys(this.elements).find(key => this.elements[key] === el));
                        el.addEventListener('input', () => this.calculate());
                    });
                    this.calculate();
                }
            },






            tiling: {
    elements: {
        length: document.getElementById('tiling-room-length'),
        width: document.getElementById('tiling-room-width'),
        lengthUnit: document.getElementById('tiling-room-length-unit'),
        widthUnit: document.getElementById('tiling-room-width-unit'),
        output: document.getElementById('tile-output'),
        wastage: document.getElementById('tile-wastage'),
        tileLength: document.getElementById('tile-length'),
        tileWidth: document.getElementById('tile-width'),
        area: document.getElementById('tiling-area')
    },
    calculate: function() {
        const { length, width, lengthUnit, widthUnit, output, wastage, tileLength, tileWidth, area } = this.elements;

        const l = convertUnits(parseFloat(length.value), lengthUnit.value, 'm');
        const w = convertUnits(parseFloat(width.value), widthUnit.value, 'm');
        const a = l * w;
        area.value = isNaN(a) ? "" : a.toFixed(2);

        const tl = parseFloat(tileLength.value) / 1000;  // mm to meters
        const tw = parseFloat(tileWidth.value) / 1000;   // mm to meters

        const tilesPerM2 = 1 / (tl * tw);
        let totalTiles = a * tilesPerM2;

        if (wastage.checked) totalTiles *= 1.1;

        output.innerHTML = (isNaN(a) || isNaN(totalTiles)) ? "" : `
            <div class="material-results">
                <p>Results</p>
                <p>Please note these figures are a guide and offer no guarantee that the quantity specified will be enough for your project.</p>
                <br>
            </div>
            <p>Tiling Area: ${a.toFixed(2)} m²</p>
            <p class="font-bold text-xl">Number of Tiles Needed: ${Math.ceil(totalTiles)}</p>
            <p>Wastage: ${wastage.checked ? '10% included' : 'Not included'}</p>
            <p>Tile Dimensions: ${tileLength.value}mm x ${tileWidth.value}mm</p>
        `;
    },
    init: function() {
        const inputs = Object.values(this.elements).filter(el => el);
        inputs.forEach(el => el.addEventListener('input', () => this.calculate()));
        this.calculate();
    }
},

            paving: {
                elements: {
                    length: document.getElementById('paving-paving-area-length'),
                    width: document.getElementById('paving-paving-area-width'),
                    lengthUnit: document.getElementById('paving-paving-area-length-unit'),
                    widthUnit: document.getElementById('paving-paving-area-width-unit'),
                    output: document.getElementById('paving-tile-output'),
                    wastage: document.getElementById('paving-tile-wastage'),
                    tileLength: document.getElementById('paving-tile-length'),
                    tileWidth: document.getElementById('paving-tile-width'),
                    area: document.getElementById('paving-paving-area')
                },
                calculate: function() {
                    const { length, width, lengthUnit, widthUnit, output, wastage, tileLength, tileWidth, area } = this.elements;
                    const l = convertUnits(parseFloat(length.value), lengthUnit.value, 'm');
                    const w = convertUnits(parseFloat(width.value), widthUnit.value, 'm');
                    const a = l * w;
                    area.value = isNaN(a) ? "" : a.toFixed(2);
                    const tl = parseFloat(tileLength.value) / 1000;
                    const tw = parseFloat(tileWidth.value) / 1000;
                    const tilesPerM2 = 1 / (tl * tw);
                    let totalTiles = a * tilesPerM2;
                    if (wastage.checked) totalTiles *= 1.1;
                    output.innerHTML = isNaN(a) ? "" : `
                        <div class="material-results">
                            <p>Results</p>
                            <p>Please note these figures are a guide and offer no guarantee that the quantity specified will be enough for your project.</p>
                            <br>
                        </div>
                        <p>Paving Area: ${a.toFixed(2)} m²</p>
                        <p class="font-bold text-xl">Number of Block, Slab, or Setts Needed: ${Math.ceil(totalTiles)}</p>
                        <p>Wastage: ${wastage.checked ? '10% included' : 'Not included'}</p>
                        <p>Paving Dimensions: ${tileLength.value}mm x ${tileWidth.value}mm</p>`;
                },
                init: function() {
                    const inputs = Object.values(this.elements).filter(el => el);
                    inputs.forEach(el => {
                        if (!el) console.error('Missing DOM element in paving:', Object.keys(this.elements).find(key => this.elements[key] === el));
                        el.addEventListener('input', () => this.calculate());
                    });
                    this.calculate();
                }
            },
  radiators: {
        elements: {
            length: document.getElementById('room-length'),
            width: document.getElementById('room-width'),
            height: document.getElementById('room-height'),
            lengthUnit: document.getElementById('room-length-unit'),
            widthUnit: document.getElementById('room-width-unit'),
            heightUnit: document.getElementById('room-height-unit'),
            output: document.getElementById('room-output'),
            doubleGlazed: document.getElementById('double-glazed'),
            frenchDoors: document.getElementById('french-doors'),
            roomType: document.getElementById('room-type'),
            calculateCheckbox: document.getElementById('radiator-calculate')
        },
        calculate: function() {
            const {
                length, width, height,
                lengthUnit, widthUnit, heightUnit,
                output, doubleGlazed, frenchDoors,
                roomType, calculateCheckbox
            } = this.elements;

            // Clear output if checkbox is unchecked or missing
            if (!calculateCheckbox || !calculateCheckbox.checked) {
                output.innerHTML = '';
                return;
            }

            // Validate inputs
            const l = convertUnits(parseFloat(length.value), lengthUnit.value, 'm');
            const w = convertUnits(parseFloat(width.value), widthUnit.value, 'm');
            const h = convertUnits(parseFloat(height.value), heightUnit.value, 'm');
            const volume = l * w * h;

            // Clear output if calculations are invalid
            if (isNaN(volume)) {
                output.innerHTML = '';
                return;
            }

            const windowFactorMap = {
                'Kitchen': [81, 109, 136],
                'Bathroom': [122, 135, 149],
                'Bedroom': [108, 120, 132],
                'Dining Room': [135, 150, 165]
            };

            let windowFactor = 0;
            if (doubleGlazed.checked && frenchDoors.checked) {
                windowFactor = 1;
            } else if (frenchDoors.checked) {
                windowFactor = 2;
            }

            const factors = windowFactorMap[roomType.value] || [108, 120, 132];
            const btu = volume * factors[windowFactor];

            output.innerHTML = `
                <div class="material-results">
                    <p>Results</p>
                    <p>Please note these figures are a guide and offer no guarantee.</p>
                    <br>
                </div>
                <p class="font-bold text-xl">Room Type: ${roomType.value}</p>
                <p class="font-bold text-xl">Volume: ${volume.toFixed(2)} m<sup>3</sup></p>
                <p class="font-bold text-xl">Estimated BTU Required: ${Math.round(btu)} BTU</p>
                <p>Window Types: ${[
                    doubleGlazed.checked ? 'Double Glazed' : '',
                    frenchDoors.checked ? 'French Doors' : ''
                ].filter(Boolean).join(', ') || 'None selected'}</p>
            `;
        },
        init: function() {
            const inputs = Object.values(this.elements).filter(el => el);
            inputs.forEach(el => {
                if (!el) {
                    console.error('Missing DOM element in radiators:', Object.keys(this.elements).find(key => this.elements[key] === el));
                    return;
                }
                el.addEventListener('input', () => this.calculate());
            });
            this.calculate();
        }
    },


radiator: {
    elements: {
        length: document.getElementById('room-length'),
        width: document.getElementById('room-width'),
        height: document.getElementById('room-height'),
        lengthUnit: document.getElementById('room-length-unit'),
        widthUnit: document.getElementById('room-width-unit'),
        heightUnit: document.getElementById('room-height-unit'),
        roomType: document.getElementById('room-type'),
        doubleGlazed: document.getElementById('double-glazed'),
        frenchDoors: document.getElementById('french-doors'),
        output: document.getElementById('room-output')
    },
    calculate: function() {
        const { length, width, height, lengthUnit, widthUnit, heightUnit, roomType, doubleGlazed, frenchDoors, output } = this.elements;

        const l = convertUnits(parseFloat(length.value), lengthUnit.value, "m");
        const w = convertUnits(parseFloat(width.value), widthUnit.value, "m");
        const h = convertUnits(parseFloat(height.value), heightUnit.value, "m");
        const volume = l * w * h;

        const windowFactorMap = {
            "Kitchen": [81, 0, 136],
            "Bathroom": [122, 0, 149],
            "Bedroom": [108, 0, 132],
            "Dining Room": [135, 0, 165]
        };

        let btu;
        if (doubleGlazed.checked) {
            btu = volume * windowFactorMap[roomType.value][0];
        } else if (frenchDoors.checked) {
            btu = volume * windowFactorMap[roomType.value][2];
        } else {
            btu = NaN;
        }

        output.innerHTML = isNaN(btu) ? "" : `
            <div class="material-results">
                <p>Results</p>
                <p>Please note these figures are a guide and offer no guarantee.</p>
                <br>
            </div>
            <p class="font-bold text-xl">Room Type: ${roomType.value}</p>
            <p class="font-bold text-xl">Volume: ${isNaN(volume) ? 0 : volume.toFixed(2)} m<sup>3</sup></p>
            <p class="font-bold text-xl">Estimated BTU Required: ${Math.round(btu)} BTU</p>
            <p>Window Types: ${[doubleGlazed.checked ? 'Double Glazed' : '', frenchDoors.checked ? 'French Doors' : ''].filter(Boolean).join(", ") || "None selected"}</p>
        `;
    },
    init: function() {
        const { doubleGlazed, frenchDoors } = this.elements;

        const inputs = Object.values(this.elements).filter(el => el);
        inputs.forEach(el => {
            el.addEventListener('input', () => this.calculate());
            el.addEventListener('change', () => this.calculate());
        });

        // Enforce only one checkbox checked at a time
        doubleGlazed.addEventListener('change', () => {
            if (doubleGlazed.checked) {
                frenchDoors.checked = false;
                this.calculate();
            }
        });

        frenchDoors.addEventListener('change', () => {
            if (frenchDoors.checked) {
                doubleGlazed.checked = false;
                this.calculate();
            }
        });

        this.calculate();
    }
},




            decking: {
                elements: {
                    length: document.getElementById('decking-deck-length'),
                    width: document.getElementById('decking-deck-width'),
                    lengthUnit: document.getElementById('decking-deck-length-unit'),
                    widthUnit: document.getElementById('decking-deck-width-unit'),
                    output: document.getElementById('decking-output'),
                    wastage: document.getElementById('decking-board-wastage'),
                    boardLength: document.getElementById('decking-board-length'),
                    boardWidth: document.getElementById('decking-board-width'),
                    area: document.getElementById('decking-decking-area')
                },
                setBoardLength: function(value) {
                    const [length, width] = value.split('x');
                    this.elements.boardLength.value = length;
                    this.elements.boardWidth.value = width;
                    this.calculate();
                },
                calculate: function() {
                    const { length, width, lengthUnit, widthUnit, output, wastage, boardLength, boardWidth, area } = this.elements;
                    const l = convertUnits(parseFloat(length.value), lengthUnit.value, 'm');
                    const w = convertUnits(parseFloat(width.value), widthUnit.value, 'm');
                    const a = l * w;
                    area.value = isNaN(a) ? "" : a.toFixed(2);
                    const bl = parseFloat(boardLength.value) / 1000;
                    const bw = parseFloat(boardWidth.value) / 1000;
                    const boardsPerM2 = 1 / (bl * bw);
                    let totalBoards = a * boardsPerM2;
                    if (wastage.checked) totalBoards *= 1.05;
                    if (parseFloat(boardWidth.value) == 125) totalBoards *= 1.04404761905;
                    else if (parseFloat(boardWidth.value) == 100) totalBoards *= 1.064;
                    const linearMeters = totalBoards * bl;
                    output.innerHTML = (isNaN(a) || isNaN(totalBoards) || isNaN(linearMeters)) ? "" : `
                        <div class="material-results">
                            <p>Results</p>
                            <p>Please note these figures are a guide and offer no guarantee that the quantity specified will be enough for your project.</p>
                            <br>
                        </div>
                        <p>Decking Area: ${a.toFixed(2)} m²</p>
                        <div style="margin-top: 4px">
                            <p class="font-bold text-xl">Number of Decking Boards Needed: ${Math.ceil(totalBoards)}</p>
                            <p>Total Linear Meters: ${linearMeters.toFixed(2)} m</p>
                            <p>Wastage: ${wastage.checked ? '5% included' : 'Not included'}</p>
                            <p>Board Dimensions: ${boardLength.value}mm x ${boardWidth.value}mm</p>
                            <p>These quantities are only for the decking and not the frame.</p>
                        </div>`;
                },
                init: function() {
                    const inputs = Object.values(this.elements).filter(el => el);
                    inputs.forEach(el => {
                        if (!el) console.error('Missing DOM element in decking:', Object.keys(this.elements).find(key => this.elements[key] === el));
                        el.addEventListener('input', () => this.calculate());
                    });
                    this.calculate();
                }
            }
        };

        Object.values(calculators).forEach(calc => calc.init());
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (!window.Alpine) {
            console.warn('Alpine.js not loaded, initializing manually');
            initializeApp();
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const fadeContainer = document.querySelector(".introduction-fade-container");

    if (readMoreBtn && fadeContainer) {
      readMoreBtn.addEventListener("click", () => {
      fadeContainer.classList.toggle("expanded");
      readMoreBtn.textContent = fadeContainer.classList.contains("expanded")
        ? "Read Less"
        : "Read More";
     });
     }
   });

    window.addEventListener('alpine:init', () => {
        initializeApp();
    });

</script>
