class CategoryComponent extends HTMLElement {
    connectedCallback() {
        const category = this.getAttribute('category');
        const categoryIcon = this.getAttribute('icon');

        this.innerHTML = `
            <a href="/customer/all_products/all_products.html?type=${category}" id="categoryLink">
                <div class="products__category">
                    <i class="products__category-icon ${categoryIcon}"></i>
                    <p class="products__category-title">${category}</p>
                </div>
            </a>
        `;
    }
}

customElements.define('category-widget', CategoryComponent);