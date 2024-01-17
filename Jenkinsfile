pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
            reuseNode true
		}
	}
    stages {

        stage('list') {
            steps {
                script {
                    sh 'apk add --no-cache openssh'
                    sh 'ssh --version'
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
