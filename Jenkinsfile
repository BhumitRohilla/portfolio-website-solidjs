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
                    // sh 'touch test.txt'
                }
            }
        }


        stage('Publish') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-bhumitrohilla.in', keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                        ssh -o StrictHostKeyChecking=off -i $SSH_KEY ubuntu@bhumitrohilla.in "mkdir jeff"
                        scp -o StrictHostKeyChecking=off -i $SSH_KEY -r  ./dist/*  ubuntu@bhumitrohilla.in:/home/ubuntu/jeff/
                    '''
                }
            }
        }
    }
}
