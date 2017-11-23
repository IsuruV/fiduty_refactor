# -*- encoding: utf-8 -*-
# stub: yahoo-finance 1.2.1 ruby lib

Gem::Specification.new do |s|
  s.name = "yahoo-finance".freeze
  s.version = "1.2.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Herval Freire".freeze]
  s.date = "2017-02-09"
  s.email = "herval@hervalicio.us".freeze
  s.extra_rdoc_files = ["README.md".freeze, "HISTORY".freeze]
  s.files = ["HISTORY".freeze, "README.md".freeze]
  s.homepage = "http://hervalicio.us/blog".freeze
  s.rubygems_version = "2.5.2".freeze
  s.summary = "A wrapper to Yahoo! Finance market data (quotes and exchange rates) feed".freeze

  s.installed_by_version = "2.5.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<json>.freeze, [">= 0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.10"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<test-unit>.freeze, [">= 0"])
    else
      s.add_dependency(%q<json>.freeze, [">= 0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.10"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<test-unit>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<json>.freeze, [">= 0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.10"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<test-unit>.freeze, [">= 0"])
  end
end
