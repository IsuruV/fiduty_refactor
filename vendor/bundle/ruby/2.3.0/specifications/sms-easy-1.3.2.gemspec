# -*- encoding: utf-8 -*-
# stub: sms-easy 1.3.2 ruby lib

Gem::Specification.new do |s|
  s.name = "sms-easy".freeze
  s.version = "1.3.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Brendan G. Lim".freeze, "Raimond Garcia".freeze, "Preston Lee".freeze]
  s.date = "2015-12-08"
  s.description = "SMSEasy allows you to send text messages to a mobile recipient for free.  It leverages ActionMailer for delivery of text messages through e-mail. Based on the Brendan Lim's sms-easy.".freeze
  s.email = ["preston.lee@prestonlee.com".freeze]
  s.homepage = "https://github.com/preston/sms-easy".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.5.2".freeze
  s.summary = "SMSEasy allows you to send text messages to a mobile recipient for free.".freeze

  s.installed_by_version = "2.5.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<actionmailer>.freeze, [">= 4.2.5"])
      s.add_development_dependency(%q<bundler>.freeze, [">= 1.10.6"])
      s.add_development_dependency(%q<rake>.freeze, ["= 10.4.2"])
    else
      s.add_dependency(%q<actionmailer>.freeze, [">= 4.2.5"])
      s.add_dependency(%q<bundler>.freeze, [">= 1.10.6"])
      s.add_dependency(%q<rake>.freeze, ["= 10.4.2"])
    end
  else
    s.add_dependency(%q<actionmailer>.freeze, [">= 4.2.5"])
    s.add_dependency(%q<bundler>.freeze, [">= 1.10.6"])
    s.add_dependency(%q<rake>.freeze, ["= 10.4.2"])
  end
end
