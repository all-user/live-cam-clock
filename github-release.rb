require 'json'
package_json = JSON.parse(File.read('./package.json'))
version = "v#{package_json['version']}"
user_name = package_json['config']['userName']
repo_name = package_json['config']['repoName']
targets = ['osx']
release_info = "-u #{user_name} -r #{repo_name} -t #{version}"

Dir.chdir(File.dirname(__FILE__)) do
  `github-release info #{release_info}`
  current_version_exist = $?.exitstatus == 0
  if current_version_exist
    STDERR.puts '!!! There has been a release with the same version !!!'
    exit 1
  end
  %x(
    github-release release #{release_info} \
                           -n "#{version}" \
                           --pre-release
  )
  targets.each do |target|
    %x(
      github-release upload  #{release_info} \
                             -n "#{target}.zip" \
                             -f ./dist/#{target}/POET-#{target}.zip
    )
  end
end
