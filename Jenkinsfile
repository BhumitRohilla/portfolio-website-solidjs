pipeline {
    agent {
		docker {
			image 'jitesoft/node-yarn'
		}
	}
    stages {

        stage('list') {
            steps {
                script {
                    sh 'ls -al'
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
                    sh 'apk add --no-cache openssh'
                }
            }
        }

        stage('Publish') {
            steps {
                sshagent(credentials: ['bhumitrohilla.in-server']) {
                    sh 'echo working'
                    sh 'tmux'
                    sh 'echo intumux'
                }
            }
        }


    }
}
