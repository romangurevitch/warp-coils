# npm-demo

You can find the tests under the test folder.
In order to run the test use npm test

### Installation 
go to the project directory and run:
 npm install -g $(pwd)

### Pipeline script
```
node {
  git url: 'https://github.com/TamirHadad/warp-coils.git'
  sh "npm install"
  sh "npm test"
  def version = "1.${env.BUILD_ID}.0"
  sh "npm version ${version}"
  sh "npm publish"
  env.BUILD_PROPS = "npm.name=warp-coils;npm.version=${version}"
}
```


After the npm install you can run  testgen that will print a number to your console
