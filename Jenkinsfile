pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
            reuseNode true
		}
	}
    stages {

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

        stage('Publish') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: '',
                    passwordVariable: 'pass',
                    usernameVariable: 'user',
                )]) {
                    sh 'echo $PASSWORD'
                    sh 'echo #USERNAME'

                }
            }
        }


    }
}
