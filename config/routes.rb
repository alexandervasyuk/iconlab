Iconlab::Application.routes.draw do
  root to:'welcome#welcome'
  get 'us', to:"products_pages#us"
  get 'reperen', to:"products_pages#reperen"
	get 'products', to:"products_pages#products"
  get 'global', to:"static_pages#global"
  get 'about', to:"static_pages#about"
  get 'news', to:"static_pages#news"
  get 'contact', to:"static_pages#contact"
end
