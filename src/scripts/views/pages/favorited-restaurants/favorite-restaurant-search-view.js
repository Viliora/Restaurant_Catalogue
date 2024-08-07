/* eslint-disable no-dupe-class-members */
import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="content">
      <h2 class="content__heading">Your favorited Restaurant</h2>
      <div id="restaurant-search-container">
        <div id="restaurants" class="restaurants"></div>
      </div>
    </div>
    `;
  }

  // runWhenUserIsSearching(callback) {
  //   document.getElementById('#query').addEventListener('change ', (event) => {
  //     callback(event.target.value);
  //   });
  // }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
      <div class="row" id="restaurant-item__not__found">
        Tidak ada restaurant untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestaurantSearchView;
