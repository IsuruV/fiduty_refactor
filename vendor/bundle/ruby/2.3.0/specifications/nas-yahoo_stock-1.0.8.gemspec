# -*- encoding: utf-8 -*-
# stub: nas-yahoo_stock 1.0.8 ruby lib

Gem::Specification.new do |s|
  s.name = "nas-yahoo_stock".freeze
  s.version = "1.0.8"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Nasir Jamal".freeze]
  s.date = "2011-05-24"
  s.description = "Yahoo Stock is a Ruby library for extracting information about stocks from yahoo finance".freeze
  s.email = "nas35_in@yahoo.com".freeze
  s.extra_rdoc_files = ["README.rdoc".freeze]
  s.files = ["README.rdoc".freeze]
  s.homepage = "http://github.com/nas/yahoo_stock".freeze
  s.rdoc_options = ["--charset=UTF-8".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 1.8".freeze)
  s.rubygems_version = "2.5.2".freeze
  s.summary = "Yahoo Stock is a Ruby library for extracting information about stocks from yahoo finance.".freeze

  s.installed_by_version = "2.5.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 2

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<builder>.freeze, [">= 2.1.2"])
    else
      s.add_dependency(%q<builder>.freeze, [">= 2.1.2"])
    end
  else
    s.add_dependency(%q<builder>.freeze, [">= 2.1.2"])
  end
end
