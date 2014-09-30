Iconlab::Application.routes.draw do
  root to:'welcome#welcome'
  get 'us', to:"products_pages#us"
  get 'global', to:"products_pages#global"
end
