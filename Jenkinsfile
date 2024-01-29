pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
            args '-v /etc/passwd:/etc/passwd'
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
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-key-bhumit-rohilla', keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                        scp -i $SSH_KEY ./build ubuntu@bhumitrohilla.in:/home/ubuntu/
                    '''
                }
            }
        }
    }
}
