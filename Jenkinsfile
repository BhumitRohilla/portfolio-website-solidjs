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
                }
            }
        }

        stage('Publish') {
            steps {
                script {
                    sshagent(credentials: ['bhumitrohilla.in-server'])
                    sh '''
                        tmux a
                        echo working
                    '''
                }
            }
        }

    }
}
