pipeline {
  agent {
    node {
      label 'Build'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }

  }
}