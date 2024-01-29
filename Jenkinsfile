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
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-bhumitrohilla.in', keyFileVariable: 'SSH_KEY'),
                    usernamePassword(credentialsId: 'ubuntupass', passwordVariable: 'ROOT_PASS')]
                ) {
                        sh '''
                            ssh -o StrictHostKeyChecking=off -i $SSH_KEY ubuntu@bhumitrohilla.in "rm -r jeff | mkdir jeff"
                            scp -o StrictHostKeyChecking=off -i $SSH_KEY -r  ./dist/*  ubuntu@bhumitrohilla.in:/home/ubuntu/jeff/
                            ssh -o StrictHostKeyChecking=off -i $SSH_KEY ubuntu@bhumitrohilla.in "
                                cd /var/www/ &&
                                echo $ROOT_PASS || sudo -S rm -r bhumitrohilla.in &&
                                echo $ROOT_PASS || sudo -S mkdir bhumitrohilla.in &&
                                echo $ROOT_PASS || sudo -S cp ~/jeff/* ./bhumitrohilla.in &&
                                echo $ROOT_PASS || sudo -S nginx -s relaod
                            "
                        '''
                    }
                }
            }
        }
    }
}
