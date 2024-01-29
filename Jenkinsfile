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
                    // sh 'echo is this working'
					// sh 'node --version'
					// sh 'yarn --version'
					// sh 'yarn'
					// sh 'yarn build'
                    sh 'touch test.txt'
                }
            }
        }


        stage('Publish') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'bhumitrohilla.in-server', keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                        scp -i $SSH_KEY ./test.txt ubuntu@bhumitrohilla.in:/home/ubuntu/
                    '''
                }
            }
        }
    }
}
