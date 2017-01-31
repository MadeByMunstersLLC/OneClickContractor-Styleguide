# Atomizer-Styleguide

Atomizer's Style guide was built with Middleman - a static site generator created and maintained by Thoughtbot. Below you will find the instructions for running the style guide on your local machine.

Middleman is distributed using the RubyGems package manager. This means you will need both the Ruby language runtime installed and RubyGems to begin using Middleman.

Mac OS X comes prepackaged with both Ruby and Rubygems, however, some of the Middleman's dependencies need to be compiled during installation and on OS X that requires Xcode Command Line Tools. Xcode can be installed from the terminal:

`$ xcode-select --install`

Once you have Ruby and RubyGems up and running, execute the following from the command line:

`$ gem install middleman`

This will install Middleman, its dependencies and the command-line tools for using Middleman.

Once you have Middleman installed on your machine. Please make sure to install bundler. This gem will allow you to quickly install gems required by Atmoizer.

`$ gem install bundler`

Everything good to go? Great. Next start your local server.

`$ middleman server`