pipeline {
    agent {
		docker {
			image 'jitesoft/node-yarn'
		}
	}
    stages {
        stage('Git CheckOut') {
            steps {
                script {
                    git branch: 'main',
                        credentialsId: 'd8bbaff0-c43b-40e6-9f5f-8d205d72a464',
                        url: 'https://github.com/BhumitRohilla/portfolio-website-solidjs.git'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'echo is this working'
					sh 'node --version'
					sh 'yarn --version'
					sh 'yarn'
					sh 'yarn build'
                }
            }
        }
    }
}
