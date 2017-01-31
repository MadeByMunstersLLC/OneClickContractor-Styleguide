###
# Site Config
###

# Reload the browser
configure :development do
  activate :livereload
end

# Have sprockets look asset files and require them
after_configuration do
  sprockets.append_path File.join root, 'bower_components'
  sprockets.append_path File.join root, 'js'
end

# Require Helpers
require "helpers/image_helpers"
helpers ImageHelpers

# Markdown
set :markdown_engine, :kramdown
activate :syntax

# Directory Settings
set :css_dir,    'stylesheets'
set :js_dir,     'javascript'
set :images_dir, 'images'
set :relative_links, true

# Build-specific configuration
configure :build do
  # Build-target specific configs
  target_env = ENV['TARGET'] || ''
  case target_env.to_s.downcase
  when 'prod'
    config[:root_url] = '/Atomizer-Styleguide/'
  else
    config[:root_url] = '/'
  end

  activate :minify_css
  activate :minify_javascript
  # activate :minify_html
  # activate :asset_hash
  activate :directory_indexes
  activate :gzip
  # activate :imageoptim, pngout: false
  activate :relative_assets
end

# Deploy To GH-Pages
activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
end